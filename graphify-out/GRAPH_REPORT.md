# Graph Report - D:\Kerja\ReactLaravelBoilerplate  (2026-07-14)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1389 nodes · 2755 edges · 159 communities (96 shown, 63 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 99 edges (avg confidence: 0.78)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- index.ts
- ProfileController.php
- cn
- instinct-cli.py
- utils.ts
- ui-playground.tsx
- combobox.tsx
- test_parse_instinct.py
- sidebar.tsx
- lottie-gallery.tsx
- data-table.tsx
- _make_project
- TestCase
- app-header.tsx
- dropdown-menu.tsx
- compilerOptions
- layout.tsx
- load_all_instincts
- item.tsx
- two-factor-setup-modal.tsx
- detect_project
- User
- components.json
- use-appearance.tsx
- security.tsx
- devDependencies
- menubar.tsx
- cmd_status
- _load_instincts_from_dir
- delete-user.tsx
- composer.json
- command.tsx
- carousel.tsx
- HandleAppearance.php
- dependencies
- scripts
- optionalDependencies
- alert-dialog.tsx
- chart.tsx
- form.tsx
- observe.sh
- _find_cross_project_instincts
- cmd_import
- User.php
- observer-loop.sh
- require-dev
- breadcrumbs.tsx
- button.tsx
- InstallFeaturesCommand
- scripts
- laravel
- require
- ci:check
- empty.tsx
- pagination.tsx
- popover.tsx
- AuthenticationTest
- PasswordResetTest
- detect-project.sh
- config
- setup
- UserFactory
- bubble.tsx
- toggle-group.tsx
- ProfileUpdateTest
- tabs.tsx
- psr-4
- test
- DatabaseSeeder.php
- marker.tsx
- placeholder-pattern.tsx
- use-mobile.tsx
- TwoFactorChallengeTest
- VerificationNotificationTest
- start-observer.sh
- post-create-project-cmd
- package.json
- collapsible.tsx
- session-guardian.sh
- homunculus-dir.sh
- eslint.config.js
- icon.tsx
- migrate-homunculus.sh
- class-variance-authority
- clsx
- cmdk
- concurrently
- date-fns
- eslint-import-resolver-typescript
- eslint-plugin-import
- eslint-plugin-react-hooks
- globals
- @hookform/resolvers
- @inertiajs/react
- input-otp
- @laravel/passkeys
- laravel-vite-plugin
- @lottiefiles/dotlottie-react
- lucide-react
- next-themes
- @radix-ui/react-avatar
- @radix-ui/react-collapsible
- @radix-ui/react-dialog
- @radix-ui/react-dropdown-menu
- @radix-ui/react-label
- @radix-ui/react-navigation-menu
- @radix-ui/react-select
- @radix-ui/react-separator
- @radix-ui/react-slot
- @radix-ui/react-toggle-group
- @radix-ui/react-tooltip
- react
- react-day-picker
- react-dom
- react-hook-form
- react-resizable-panels
- recharts
- @shadcn/react
- sonner
- tailwind-merge
- tailwindcss
- @tailwindcss/vite
- tw-animate-css
- @types/react
- @types/react-dom
- typescript
- vaul
- vite
- @vitejs/plugin-react
- zod
- prettier
- prettier-plugin-tailwindcss
- @stylistic/eslint-plugin
- @types/node

## God Nodes (most connected - your core abstractions)
1. `cn()` - 341 edges
2. `User` - 43 edges
3. `Button()` - 34 edges
4. `TestCase` - 27 edges
5. `_load_instincts_from_dir()` - 24 edges
6. `_make_project()` - 20 edges
7. `detect_project()` - 17 edges
8. `compilerOptions` - 15 edges
9. `InputError()` - 14 edges
10. `Label()` - 14 edges

## Surprising Connections (you probably didn't know these)
- `test_validate_must_exist_fails()` --calls--> `_validate_file_path()`  [INFERRED]
  .agents/skills/continuous-learning-v2/scripts/test_parse_instinct.py → .agents/skills/continuous-learning-v2/scripts/instinct-cli.py
- `test_validate_normal_path()` --calls--> `_validate_file_path()`  [INFERRED]
  .agents/skills/continuous-learning-v2/scripts/test_parse_instinct.py → .agents/skills/continuous-learning-v2/scripts/instinct-cli.py
- `test_validate_rejects_etc()` --calls--> `_validate_file_path()`  [INFERRED]
  .agents/skills/continuous-learning-v2/scripts/test_parse_instinct.py → .agents/skills/continuous-learning-v2/scripts/instinct-cli.py
- `test_validate_rejects_proc()` --calls--> `_validate_file_path()`  [INFERRED]
  .agents/skills/continuous-learning-v2/scripts/test_parse_instinct.py → .agents/skills/continuous-learning-v2/scripts/instinct-cli.py
- `test_validate_rejects_usr()` --calls--> `_validate_file_path()`  [INFERRED]
  .agents/skills/continuous-learning-v2/scripts/test_parse_instinct.py → .agents/skills/continuous-learning-v2/scripts/instinct-cli.py

## Import Cycles
- None detected.

## Communities (159 total, 63 thin omitted)

### Community 0 - "index.ts"
Cohesion: 0.06
Nodes (35): AppContent(), Props, AppLogo(), AppLogoIcon(), AppShell(), Props, AppSidebarHeader(), Avatar() (+27 more)

### Community 1 - "ProfileController.php"
Cohesion: 0.06
Nodes (23): CreateNewUser, ResetUserPassword, Controller, RedirectResponse, Request, Response, ProfileController, RedirectResponse (+15 more)

### Community 2 - "cn"
Cohesion: 0.06
Nodes (45): Attachment(), AttachmentAction(), AttachmentActions(), AttachmentContent(), AttachmentDescription(), AttachmentGroup(), AttachmentMedia(), attachmentMediaVariants (+37 more)

### Community 3 - "instinct-cli.py"
Cohesion: 0.10
Nodes (39): _append_observations(), cmd_projects(), _cmd_projects_delete(), _cmd_projects_gc(), _cmd_projects_merge(), cmd_promote(), cmd_prune(), _collect_pending_dirs() (+31 more)

### Community 4 - "utils.ts"
Cohesion: 0.14
Nodes (14): InputError(), Props, Props, PasswordInput(), Props, TextLink(), Checkbox(), Input() (+6 more)

### Community 5 - "ui-playground.tsx"
Cohesion: 0.09
Nodes (23): Accordion(), AccordionContent(), AccordionItem(), AccordionTrigger(), AspectRatio(), HoverCard(), HoverCardContent(), HoverCardTrigger() (+15 more)

### Community 6 - "combobox.tsx"
Cohesion: 0.10
Nodes (27): ComboboxChip(), ComboboxChips(), ComboboxChipsInput(), ComboboxClear(), ComboboxContent(), ComboboxEmpty(), ComboboxGroup(), ComboboxInput() (+19 more)

### Community 7 - "test_parse_instinct.py"
Cohesion: 0.09
Nodes (32): parse_instinct_file(), Validate and resolve a file path, guarding against path traversal.      Raises V, Parse YAML-like instinct file format.      Each instinct is delimited by a pair, _validate_file_path(), patch_globals(), project_tree(), Tests for continuous-learning-v2 instinct-cli.py  Covers:   - parse_instinct_fil, Patch module-level globals to use tmp_path-based directories. (+24 more)

### Community 8 - "sidebar.tsx"
Cohesion: 0.08
Nodes (29): AppSidebar(), NavUser(), Sidebar(), SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroupAction() (+21 more)

### Community 9 - "lottie-gallery.tsx"
Cohesion: 0.11
Nodes (18): AlertError(), Props, Alert(), AlertDescription(), AlertTitle(), alertVariants, Badge(), badgeVariants (+10 more)

### Community 10 - "data-table.tsx"
Cohesion: 0.09
Nodes (25): ContextMenu(), ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut() (+17 more)

### Community 11 - "_make_project"
Cohesion: 0.10
Nodes (26): _promote_auto(), _promote_specific(), Promote a specific instinct by ID from current project to global., Auto-promote instincts found in multiple projects., Validate instinct IDs before using them in filenames., _validate_instinct_id(), _make_project(), Create project directory structure and return a project dict. (+18 more)

### Community 12 - "TestCase"
Cohesion: 0.13
Nodes (8): BaseTestCase, RefreshDatabase, PasswordConfirmationTest, RegistrationTest, DashboardTest, ExampleTest, TestCase, ExampleTest

### Community 13 - "app-header.tsx"
Cohesion: 0.11
Nodes (20): mainNavItems, Props, rightNavItems, NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink() (+12 more)

### Community 14 - "dropdown-menu.tsx"
Cohesion: 0.13
Nodes (16): DropdownMenu(), DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuGroup(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator() (+8 more)

### Community 15 - "compilerOptions"
Cohesion: 0.09
Nodes (21): ./resources/js/*, resources/js/**/*.d.ts, resources/js/**/*.ts, resources/js/**/*.tsx, compilerOptions, allowJs, baseUrl, esModuleInterop (+13 more)

### Community 16 - "layout.tsx"
Cohesion: 0.16
Nodes (17): AppHeader(), NavFooter(), NavMain(), SidebarGroup(), SidebarGroupContent(), SidebarGroupLabel(), SidebarMenu(), SidebarMenuItem() (+9 more)

### Community 17 - "load_all_instincts"
Cohesion: 0.11
Nodes (20): cmd_export(), load_all_instincts(), load_project_only_instincts(), Export instincts to file., Quote a string for safe YAML frontmatter serialization.      Uses double quotes, Load all instincts: project-scoped + global.      Project-scoped instincts take, Load only project-scoped instincts (no global).      In global fallback mode (no, _yaml_quote() (+12 more)

### Community 18 - "item.tsx"
Cohesion: 0.13
Nodes (17): ButtonGroup(), ButtonGroupSeparator(), ButtonGroupText(), buttonGroupVariants, Item(), ItemActions(), ItemContent(), ItemDescription() (+9 more)

### Community 19 - "two-factor-setup-modal.tsx"
Cohesion: 0.15
Nodes (11): Props, TwoFactorSetupStep(), DialogHeader(), InputOTP(), InputOTPGroup(), InputOTPSeparator(), InputOTPSlot(), CopiedValue (+3 more)

### Community 20 - "detect_project"
Cohesion: 0.12
Nodes (18): detect_project(), _git_repo_root(), _main_worktree_root(), _normalize_remote_url(), Return the main worktree root when project_root is a linked worktree., Detect current project context. Returns dict with id, name, root, project_dir., Update the projects.json registry.      Uses file locking (where available) to p, _strip_remote_credentials() (+10 more)

### Community 21 - "User"
Cohesion: 0.17
Nodes (4): User, Authenticatable, EmailVerificationTest, SecurityTest

### Community 22 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 23 - "use-appearance.tsx"
Cohesion: 0.22
Nodes (16): AppearanceToggleTab(), Appearance, applyTheme(), getStoredAppearance(), handleSystemThemeChange(), initializeTheme(), isDarkMode(), listeners (+8 more)

### Community 24 - "security.tsx"
Cohesion: 0.18
Nodes (8): Heading(), Props, ManageTwoFactor(), Props, PasskeyRegistration(), useTwoFactorAuth(), UseTwoFactorAuthReturn, Props

### Community 25 - "devDependencies"
Cohesion: 0.12
Nodes (17): babel-plugin-react-compiler, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-react, @laravel/vite-plugin-wayfinder, devDependencies, babel-plugin-react-compiler (+9 more)

### Community 26 - "menubar.tsx"
Cohesion: 0.12
Nodes (12): Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarMenu(), MenubarRadioItem(), MenubarSeparator() (+4 more)

### Community 27 - "cmd_status"
Cohesion: 0.12
Nodes (16): cmd_status(), _confidence_bar(), _print_instincts_by_domain(), Show status of all instincts (project + global)., Helper to print instincts grouped by domain., _stream_can_encode(), Status with no instincts should print fallback message., Status should show project and global instinct counts. (+8 more)

### Community 28 - "_load_instincts_from_dir"
Cohesion: 0.13
Nodes (15): _load_instincts_from_dir(), Load instincts from a single directory., Loaded instincts should have _source_file, _source_type, _scope_label., If an instinct has no 'scope' in frontmatter, it should default to scope_label., If frontmatter has explicit scope, it should be preserved., Corrupt YAML files should be warned about but not crash., test_load_annotates_metadata(), test_load_defaults_scope_from_label() (+7 more)

### Community 29 - "delete-user.tsx"
Cohesion: 0.27
Nodes (9): Props, Dialog(), DialogClose(), DialogContent(), DialogDescription(), DialogFooter(), DialogOverlay(), DialogTitle() (+1 more)

### Community 30 - "composer.json"
Cohesion: 0.14
Nodes (13): autoload-dev, psr-4, description, keywords, license, minimum-stability, name, prefer-stable (+5 more)

### Community 31 - "command.tsx"
Cohesion: 0.21
Nodes (12): AppCommandPalette(), AppCommandPaletteProps, commands, Command(), CommandDialog(), CommandEmpty(), CommandGroup(), CommandInput() (+4 more)

### Community 32 - "carousel.tsx"
Cohesion: 0.20
Nodes (13): Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions (+5 more)

### Community 33 - "HandleAppearance.php"
Cohesion: 0.24
Nodes (7): HandleAppearance, Request, Response, HandleInertiaRequests, Request, Closure, Middleware

### Community 34 - "dependencies"
Cohesion: 0.15
Nodes (13): @base-ui/react, embla-carousel-react, @inertiajs/vite, dependencies, @base-ui/react, embla-carousel-react, @inertiajs/vite, radix-ui (+5 more)

### Community 35 - "scripts"
Cohesion: 0.15
Nodes (13): scripts, lint, lint:check, post-autoload-dump, post-root-package-install, pre-package-uninstall, types:check, Illuminate\\Foundation\\ComposerScripts::postAutoloadDump (+5 more)

### Community 36 - "optionalDependencies"
Cohesion: 0.15
Nodes (13): lightningcss-linux-x64-gnu, lightningcss-win32-x64-msvc, optionalDependencies, lightningcss-linux-x64-gnu, lightningcss-win32-x64-msvc, @rollup/rollup-linux-x64-gnu, @rollup/rollup-win32-x64-msvc, @tailwindcss/oxide-linux-x64-gnu (+5 more)

### Community 37 - "alert-dialog.tsx"
Cohesion: 0.15
Nodes (11): AlertDialog(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+3 more)

### Community 38 - "chart.tsx"
Cohesion: 0.21
Nodes (11): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartTooltipContent(), getPayloadConfigFromPayload(), INITIAL_DIMENSION (+3 more)

### Community 39 - "form.tsx"
Cohesion: 0.23
Nodes (10): FormControl(), FormDescription(), FormFieldContext, FormFieldContextValue, FormItem(), FormItemContext, FormItemContextValue, FormLabel() (+2 more)

### Community 40 - "observe.sh"
Cohesion: 0.27
Nodes (10): _CHECK_OBSERVER_RUNNING(), CLV2_PYTHON_CMD, _is_windows_app_installer_stub(), PROJECT_ID_ENV, PROJECT_NAME_ENV, _REMOVE_FILE_IF_PRESENT(), resolve_python_cmd(), observe.sh script (+2 more)

### Community 41 - "_find_cross_project_instincts"
Cohesion: 0.18
Nodes (11): cmd_evolve(), _find_cross_project_instincts(), Analyze instincts and suggest evolutions to skills/commands/agents., Find instincts that appear in multiple projects (promotion candidates).      Ret, Show instincts that could be promoted from project to global., _show_promotion_candidates(), Single project should return nothing (need 2+)., Same instinct ID in 2 projects should be found. (+3 more)

### Community 42 - "cmd_import"
Cohesion: 0.18
Nodes (11): cmd_import(), _fetch_import_url(), Validate remote instinct imports before opening a network connection., Fetch a validated remote instinct file with bounded size and timeout., Import instincts from file or URL., _validate_import_url(), Remote imports should not downgrade to plaintext HTTP., Remote imports should not resolve to private or loopback addresses. (+3 more)

### Community 43 - "User.php"
Cohesion: 0.24
Nodes (8): emailRules(), nameRules(), profileRules(), HasFactory, Notifiable, PasskeyAuthenticatable, PasskeyUser, TwoFactorAuthenticatable

### Community 44 - "observer-loop.sh"
Cohesion: 0.33
Nodes (7): analyze_observations(), cleanup(), exit_if_idle_without_sessions(), has_active_session_leases(), on_usr1(), observer-loop.sh script, wait_for_claude_analysis()

### Community 45 - "require-dev"
Cohesion: 0.20
Nodes (10): require-dev, fakerphp/faker, larastan/larastan, laravel/pail, laravel/pao, laravel/pint, laravel/sail, mockery/mockery (+2 more)

### Community 46 - "breadcrumbs.tsx"
Cohesion: 0.33
Nodes (8): Breadcrumbs(), Breadcrumb(), BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator()

### Community 47 - "button.tsx"
Cohesion: 0.33
Nodes (6): Button(), buttonVariants, Calendar(), CalendarDayButton(), PaginationLink(), PageProps

### Community 49 - "scripts"
Cohesion: 0.22
Nodes (9): scripts, build, build:ssr, dev, format, format:check, lint, lint:check (+1 more)

### Community 50 - "laravel"
Cohesion: 0.25
Nodes (8): extra, laravel, post-create-project, dont-discover, installer, post-update-cmd, @php artisan install:features --ansi, @php artisan vendor:publish --tag=laravel-assets --ansi --force

### Community 51 - "require"
Cohesion: 0.25
Nodes (8): require, inertiajs/inertia-laravel, laravel/chisel, laravel/fortify, laravel/framework, laravel/tinker, laravel/wayfinder, php

### Community 52 - "ci:check"
Cohesion: 0.25
Nodes (8): ci:check, dev, Composer\\Config::disableProcessTimeout, npm run format:check, npm run lint:check, npm run types:check, @php artisan dev, @test

### Community 53 - "empty.tsx"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 54 - "pagination.tsx"
Cohesion: 0.25
Nodes (7): Pagination(), PaginationContent(), PaginationEllipsis(), PaginationItem(), PaginationLinkProps, PaginationNext(), PaginationPrevious()

### Community 55 - "popover.tsx"
Cohesion: 0.25
Nodes (6): Popover(), PopoverContent(), PopoverDescription(), PopoverHeader(), PopoverTitle(), PopoverTrigger()

### Community 58 - "detect-project.sh"
Cohesion: 0.38
Nodes (3): _clv2_detect_project(), _clv2_update_project_registry(), detect-project.sh script

### Community 59 - "config"
Cohesion: 0.29
Nodes (7): pestphp/pest-plugin, php-http/discovery, config, allow-plugins, optimize-autoloader, preferred-install, sort-packages

### Community 60 - "setup"
Cohesion: 0.29
Nodes (7): setup, composer install, npm install, npm run build, @php artisan key:generate, @php artisan migrate --force, @php -r \"file_exists('.env') || copy('.env.example', '.env');\

### Community 61 - "UserFactory"
Cohesion: 0.43
Nodes (3): UserFactory, Factory, static

### Community 62 - "bubble.tsx"
Cohesion: 0.38
Nodes (6): Bubble(), BubbleContent(), BubbleGroup(), BubbleReactions(), bubbleReactionsVariants, bubbleVariants

### Community 63 - "toggle-group.tsx"
Cohesion: 0.43
Nodes (5): ToggleGroup(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants

### Community 65 - "tabs.tsx"
Cohesion: 0.40
Nodes (5): Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger()

### Community 66 - "psr-4"
Cohesion: 0.40
Nodes (5): autoload, psr-4, App\\, Database\\Factories\\, Database\\Seeders\\

### Community 67 - "test"
Cohesion: 0.40
Nodes (5): test, @lint:check, @php artisan config:clear --ansi, @php artisan test, @types:check

### Community 68 - "DatabaseSeeder.php"
Cohesion: 0.60
Nodes (3): DatabaseSeeder, Seeder, WithoutModelEvents

### Community 69 - "marker.tsx"
Cohesion: 0.50
Nodes (4): Marker(), MarkerContent(), MarkerIcon(), markerVariants

### Community 71 - "use-mobile.tsx"
Cohesion: 0.70
Nodes (4): getServerSnapshot(), isSmallerThanBreakpoint(), mediaQueryListener(), useIsMobile()

### Community 74 - "start-observer.sh"
Cohesion: 0.83
Nodes (3): start-observer.sh script, stop_observer_if_running(), write_guard_sentinel()

### Community 75 - "post-create-project-cmd"
Cohesion: 0.50
Nodes (4): post-create-project-cmd, @php artisan key:generate --ansi, @php artisan migrate --graceful --ansi, @php -r \"file_exists('database/database.sqlite') || touch('database/database.sqlite');\

### Community 76 - "package.json"
Cohesion: 0.50
Nodes (3): private, $schema, type

### Community 77 - "collapsible.tsx"
Cohesion: 0.50
Nodes (3): Collapsible(), CollapsibleContent(), CollapsibleTrigger()

## Knowledge Gaps
- **256 isolated node(s):** `session-guardian.sh script`, `CLV2_PYTHON_CMD`, `PROJECT_ID_ENV`, `PROJECT_NAME_ENV`, `TIMESTAMP` (+251 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **63 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `index.ts`, `utils.ts`, `ui-playground.tsx`, `combobox.tsx`, `sidebar.tsx`, `lottie-gallery.tsx`, `data-table.tsx`, `app-header.tsx`, `dropdown-menu.tsx`, `layout.tsx`, `item.tsx`, `two-factor-setup-modal.tsx`, `use-appearance.tsx`, `menubar.tsx`, `delete-user.tsx`, `command.tsx`, `carousel.tsx`, `alert-dialog.tsx`, `chart.tsx`, `form.tsx`, `breadcrumbs.tsx`, `button.tsx`, `empty.tsx`, `pagination.tsx`, `popover.tsx`, `bubble.tsx`, `toggle-group.tsx`, `tabs.tsx`, `marker.tsx`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **Why does `User` connect `User` to `ProfileUpdateTest`, `ProfileController.php`, `DatabaseSeeder.php`, `TwoFactorChallengeTest`, `VerificationNotificationTest`, `User.php`, `TestCase`, `AuthenticationTest`, `PasswordResetTest`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `@tailwindcss/vite`, `tw-animate-css`, `@types/react`, `@types/react-dom`, `typescript`, `vaul`, `vite`, `@vitejs/plugin-react`, `zod`, `package.json`, `class-variance-authority`, `clsx`, `cmdk`, `concurrently`, `date-fns`, `globals`, `@hookform/resolvers`, `@inertiajs/react`, `input-otp`, `@laravel/passkeys`, `laravel-vite-plugin`, `@lottiefiles/dotlottie-react`, `lucide-react`, `next-themes`, `@radix-ui/react-avatar`, `@radix-ui/react-collapsible`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-label`, `@radix-ui/react-navigation-menu`, `@radix-ui/react-select`, `@radix-ui/react-separator`, `@radix-ui/react-slot`, `@radix-ui/react-toggle-group`, `@radix-ui/react-tooltip`, `react`, `react-day-picker`, `react-dom`, `react-hook-form`, `react-resizable-panels`, `recharts`, `@shadcn/react`, `sonner`, `tailwind-merge`, `tailwindcss`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Are the 31 inferred relationships involving `User` (e.g. with `.run()` and `.test_users_are_rate_limited()`) actually correct?**
  _`User` has 31 INFERRED edges - model-reasoned connections that need verification._
- **What connects `session-guardian.sh script`, `CLV2_PYTHON_CMD`, `PROJECT_ID_ENV` to the rest of the system?**
  _256 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05552617662612375 - nodes in this community are weakly interconnected._
- **Should `ProfileController.php` be split into smaller, more focused modules?**
  _Cohesion score 0.06077694235588972 - nodes in this community are weakly interconnected._