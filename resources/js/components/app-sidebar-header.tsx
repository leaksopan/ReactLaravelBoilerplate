import { Link, usePage } from '@inertiajs/react';
import { Bell, Command, Moon, Palette, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

import { AppCommandPalette } from '@/components/app-command-palette';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Kbd } from '@/components/ui/kbd';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { login } from '@/routes';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function AppSidebarHeader({
    breadcrumbs: _breadcrumbs = [],
    isScrolled = false,
}: {
    breadcrumbs?: BreadcrumbItemType[];
    isScrolled?: boolean;
}) {
    const { auth } = usePage().props;
    const [commandOpen, setCommandOpen] = useState(false);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
                event.preventDefault();
                setCommandOpen((open) => !open);
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    return (
        <header
            className={cn(
                'sticky top-0 z-20 h-16 shrink-0 border-b bg-background transition-[border-radius,box-shadow] duration-200',
                isScrolled ? 'rounded-none shadow-sm' : 'rounded-t-2xl',
            )}
        >
            <div className="flex h-full items-center gap-4 px-5">
                <SidebarTrigger className="shrink-0" />
                <div className="hidden h-6 w-px bg-border sm:block" />
                <Button
                    variant="outline"
                    className="h-10 w-full max-w-md justify-start px-3 font-normal text-muted-foreground shadow-xs"
                    onClick={() => setCommandOpen(true)}
                >
                    <Search data-icon="inline-start" />
                    <span>Search...</span>
                    <span className="ml-auto hidden sm:block">
                        <Kbd>
                            <Command />K
                        </Kbd>
                    </span>
                </Button>

                <div className="ml-auto flex items-center gap-1">
                    <Button
                        variant="link"
                        className="hidden text-primary sm:inline-flex"
                    >
                        Get Pro
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Notifications"
                    >
                        <Bell />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle theme"
                    >
                        <Moon />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Theme presets"
                    >
                        <Palette />
                    </Button>
                    <div className="mx-2 hidden h-6 w-px bg-border sm:block" />
                    {auth.user ? (
                        <Avatar>
                            <AvatarImage
                                src={auth.user.avatar}
                                alt={auth.user.name}
                            />
                            <AvatarFallback>
                                {auth.user.name.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                    ) : (
                        <Button asChild size="sm">
                            <Link href={login()}>Sign in</Link>
                        </Button>
                    )}
                </div>
            </div>
            <AppCommandPalette
                open={commandOpen}
                onOpenChange={setCommandOpen}
            />
        </header>
    );
}
