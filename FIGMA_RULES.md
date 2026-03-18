# Figma Design System Rules

Rules for integrating Figma designs into this codebase using the Model Context Protocol.

## 1. Token Definitions

No custom design tokens. This project uses **Tailwind CSS v4 defaults** exclusively — no `tailwind.config.ts`, no CSS custom properties, no token transformation pipeline.

### Color Palette in Use

| Role | Colors Used |
|------|------------|
| Primary actions | `blue-600`, `blue-700` (hover), `blue-500` (focus ring) |
| Success / available | `green-100` (bg), `green-500` (dot/ring), `green-600` (button), `green-700` (hover), `green-800` (text) |
| Danger / empty | `red-100` (bg), `red-400` (switch off), `red-500` (dot), `red-600` (text/error), `red-700`, `red-800` (text) |
| Neutral surfaces | `white` (cards), `gray-50` (page bg), `gray-200` (borders) |
| Text hierarchy | `gray-900` (headings), `gray-700` (labels), `gray-600` (body), `gray-500` (secondary/timestamps) |
| Input borders | `gray-300` |

### Spacing

Standard Tailwind spacing scale. Common values:

| Context | Pattern |
|---------|---------|
| Cards | `p-5` (standard), `p-8` (modal) |
| Buttons | `px-4 py-2` (small), `px-6 py-3` (large) |
| Form fields | `space-y-4` (container), `mb-1` (labels) |
| Page headings | `mb-6` |
| Containers | `px-4 py-6` (main), `px-4 py-4` (header) |
| Flex row gaps | `gap-2` (badges), `gap-3` (card row), `gap-4` (header/grid) |
| Vertical stacks | `space-y-3` (toggles), `space-y-4` (forms) |

### Typography

No custom fonts — system defaults only.

| Element | Classes |
|---------|---------|
| Page title | `text-2xl font-bold text-gray-900` |
| Card heading | `text-lg font-bold text-gray-900` |
| Header brand | `text-xl font-bold text-gray-900` |
| Form label | `text-sm font-medium text-gray-700` |
| Button text | `text-sm font-medium` |
| Badge text | `text-sm font-medium` |
| Body text | `text-sm text-gray-600` |
| Timestamp | `text-xs text-gray-500` |

## 2. Component Library

All components live in `src/components/`, organized by domain. One component per file, default exports, no barrel files.

### Layout Components (`src/components/layout/`)

- **PublicLayout.tsx** — Public page wrapper. `min-h-screen bg-gray-50`, includes Header, skip-to-content link, `max-w-6xl` container.
- **AdminLayout.tsx** — Admin page wrapper. Dark header (`bg-gray-900`), logout button, link to public view, `max-w-6xl` container.

### Shared Components (`src/components/shared/`)

- **Header.tsx** — Public header with "Monitor BBM Solok" branding. `bg-white`, `border-b border-gray-200`.
- **ProtectedRoute.tsx** — Auth guard, redirects to `/admin/login` if unauthenticated.

### Public Components (`src/components/public/`)

- **SpbuCardList.tsx** — Grid of station cards. `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`.
- **SpbuCard.tsx** — Station card. `bg-white rounded-xl border border-gray-200 p-5 shadow-sm`. Contains FuelStatusBadge, LastUpdatedText, MapsButton.
- **FuelStatusBadge.tsx** — Pill badge showing fuel availability. Available: `bg-green-100 text-green-800` with `green-500` dot. Empty: `bg-red-100 text-red-800` with `red-500` dot. Shape: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium`.
- **MapsButton.tsx** — Google Maps link button. `px-4 py-2 bg-blue-600 text-white rounded-lg`. Inline SVG map pin icon.
- **LastUpdatedText.tsx** — Indonesian-locale timestamp (`id-ID`, `Asia/Jakarta`). `text-xs text-gray-500`.

### Admin Components (`src/components/admin/`)

- **SpbuAdminList.tsx** — Grid of admin station cards (same grid as public).
- **SpbuAdminCard.tsx** — Admin station card with fuel toggles. Same card styling as SpbuCard.
- **FuelToggle.tsx** — Custom toggle switch. Container: `w-11 h-6 rounded-full`. Knob: `w-5 h-5 bg-white rounded-full shadow` with `translate-x-5.5`/`translate-x-0.5`. On: `bg-green-500`. Off: `bg-red-400`.
- **LoginForm.tsx** — Username/password form. Container: `space-y-4 w-full max-w-sm`. Inputs: `w-full px-4 py-2 border border-gray-300 rounded-lg`.
- **SetAllStatusButton.tsx** — Bulk fuel status button. Green variant (`bg-green-600`, "Semua Tersedia") sets all fuels available. Red variant (`bg-red-600`, "Semua Kosong") sets all fuels empty. `px-4 py-2 text-white text-sm font-medium rounded-lg`.
- **UpdateAllButton.tsx** — Bulk timestamp update. `px-6 py-3 bg-green-600 text-white font-medium rounded-lg`.

### Component Composition (Public Dashboard)

```
PublicLayout
└── Header
└── main (max-w-6xl mx-auto px-4 py-6)
    ├── h1 (text-2xl font-bold text-gray-900 mb-6)
    └── SpbuCardList (grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4)
        └── SpbuCard (bg-white rounded-xl border border-gray-200 p-5 shadow-sm)
            ├── h2 (text-lg font-bold)
            ├── p (text-sm text-gray-600 line-clamp-2)
            ├── div (flex flex-wrap gap-2) → FuelStatusBadge[]
            └── div (flex items-center justify-between gap-3)
                ├── LastUpdatedText
                └── MapsButton
```

## 3. Frameworks & Libraries

| Tool | Version |
|------|---------|
| React | ^19.2.4 |
| React DOM | ^19.2.4 |
| React Router | ^7.13.1 |
| Tailwind CSS | ^4.2.1 (via `@tailwindcss/vite` plugin) |
| Vite | ^8.0.0 |
| TypeScript | ~5.9.3 |

**No component library** (no MUI, shadcn, Radix, etc.). All UI built from scratch with Tailwind utilities.

Build: `@vitejs/plugin-react` + `@tailwindcss/vite`. TypeScript target ES2023, strict mode, bundler module resolution.

## 4. Asset Management

Minimal assets:

- `public/favicon.svg` — only static asset
- No images, no CDN, no asset optimization pipeline
- No image components or lazy-loading patterns

When adding new assets, place them in `public/` and reference with absolute paths.

## 5. Icon System

**Inline SVGs only.** No icon library (no Heroicons, Lucide, react-icons, etc.).

Single icon in the codebase — a map pin in `src/components/public/MapsButton.tsx`:

```tsx
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
```

Pattern: stroke-based, `currentColor`, sized with Tailwind (`w-4 h-4`). Follow this pattern for new icons.

## 6. Styling Approach

**Tailwind utility classes only.** No CSS modules, no CSS-in-JS, no styled-components.

`src/index.css` contains only:
```css
@import "tailwindcss";
```

### Key Patterns

**Buttons:**
```
px-4 py-2 bg-{color}-600 text-white font-medium rounded-lg
hover:bg-{color}-700
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-{color}-500 focus-visible:ring-offset-2
transition-[background-color]
cursor-pointer
```

**Cards:**
```
bg-white rounded-xl border border-gray-200 p-5 shadow-sm
```

**Form inputs:**
```
w-full px-4 py-2 border border-gray-300 rounded-lg
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
```

**Status badges:**
```
inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium
bg-{green|red}-100 text-{green|red}-800
```

**Focus states** — always use `focus-visible` (not `focus`), with `ring-2 ring-{color}-500 ring-offset-2`.

### Responsive Design

Mobile-first with two breakpoints:
- `md:` — tablet (2-column grid)
- `lg:` — desktop (3-column grid)

Example: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`

### Accessibility

- Skip-to-content link: `sr-only focus:not-sr-only`
- `role="alert"` and `aria-live="polite"` on error messages
- `aria-hidden` on decorative elements
- `aria-label` on interactive controls
- Proper `htmlFor` on all form labels
- `text-wrap-balance` on headings, `text-pretty` on station names
- `line-clamp-2` on address text

## 7. Project Structure

```
src/
├── components/
│   ├── admin/          # Admin-only UI (toggles, login form, bulk actions)
│   ├── layout/         # Page layout wrappers
│   ├── public/         # Public-facing UI (cards, badges)
│   └── shared/         # Cross-cutting (header, auth guard)
├── contexts/           # React contexts (AuthContext, SpbuContext)
├── data/               # Initial data + localStorage helpers
├── pages/              # Route-level page components
├── types/              # TypeScript type definitions
├── index.css           # Tailwind import only
├── main.tsx            # Entry point (AuthProvider → SpbuProvider → Router)
├── router.tsx          # Route definitions
└── vite-env.d.ts
```

### Conventions

- **One component per file**, default export
- **No barrel files** — import directly from source
- **`import type`** for type-only imports
- **Functional setState** — always `setStations(prev => ...)`
- **Indonesian UI text** — all user-facing strings in Bahasa Indonesia
- **Derived values at render time** — formatted dates computed inline, not stored in state
- **Container width** — `max-w-6xl mx-auto px-4` on all page sections

### Domain Types (`src/types/spbu.ts`)

```typescript
type FuelType = 'pertalite' | 'pertamax' | 'bio-solar' | 'pertamina-dex'
type FuelStatus = 'available' | 'empty'

interface Spbu {
  id: string
  name: string
  address: string
  mapsUrl: string
  fuels: SpbuFuelStatus[]
  lastUpdated: string // ISO 8601
}
```

`FUEL_LABELS` maps `FuelType` to Indonesian display names.
