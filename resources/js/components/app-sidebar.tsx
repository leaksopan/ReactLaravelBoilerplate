import { Link, usePage } from '@inertiajs/react';
import {
    Boxes,
    FileText,
    LayoutDashboard,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { home } from '@/routes';

export function AppSidebar() {
    const { url } = usePage();
    const isLottieGallery = url.startsWith('/lottie');
    const activeModule = isLottieGallery ? 'Lottie Gallery' : 'UI Playground';
    const childItems = [
        {
            label: 'UI Playground',
            icon: LayoutDashboard,
            href: home(),
            active: !isLottieGallery,
        },
        {
            label: 'Lottie gallery',
            icon: FileText,
            href: '/lottie',
            active: isLottieGallery,
        },
    ];

    return (
        <Sidebar
            collapsible="offcanvas"
            className="border-r border-sidebar-border bg-sidebar"
            style={{ '--sidebar-width': '20rem' } as React.CSSProperties}
        >
            <div className="flex h-full w-full">
                <aside className="flex w-16 shrink-0 flex-col items-center gap-3 border-r border-sidebar-border py-3">
                    <Link
                        href={home()}
                        className="flex flex-col items-center gap-1 text-[10px] font-semibold text-sidebar-primary"
                    >
                        <span className="flex size-8 items-center justify-center rounded-md bg-sidebar-primary text-xs font-bold text-sidebar-primary-foreground">
                            AS
                        </span>
                        <span>UI</span>
                    </Link>
                    <nav aria-label="Modules" className="flex flex-col gap-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto min-h-11 flex-col gap-0.5 bg-sidebar-accent px-1 py-1 text-[10px] text-sidebar-accent-foreground"
                            aria-label="UI"
                        >
                            <Boxes />
                            <span>UI</span>
                        </Button>
                    </nav>
                </aside>

                <nav
                    className="min-w-0 flex-1"
                    aria-label={`${activeModule} navigation`}
                >
                    <div className="border-b border-sidebar-border px-3 py-3">
                        <p className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
                            Active module
                        </p>
                        <h2 className="text-base font-semibold">
                            {activeModule}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-1 px-3 py-3">
                        {childItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    'flex h-9 items-center gap-3 rounded-md px-3 text-xs text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground lg:h-10 lg:text-sm [&_svg]:size-4 lg:[&_svg]:size-5',
                                    item.active &&
                                        'bg-sidebar-accent font-semibold text-sidebar-accent-foreground',
                                )}
                            >
                                <item.icon />
                                <span className="truncate">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </Sidebar>
    );
}
