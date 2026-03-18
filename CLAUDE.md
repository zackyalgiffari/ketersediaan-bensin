# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — TypeScript check + production build
- `npm run lint` — ESLint
- `npm run preview` — Preview production build

## Architecture

BBM (fuel) availability monitor for SPBU gas stations in Kabupaten Solok, Indonesia. Public dashboard (read-only) + admin panel (toggle fuel status).

### Provider Chain & Data Flow

```
main.tsx: AuthProvider → SpbuProvider → RouterProvider
```

AuthProvider wraps outermost because ProtectedRoute (inside the router) needs auth state. SpbuProvider wraps the router so both public and admin pages share the same SPBU data.

### State → Persistence Flow

All localStorage access is isolated in `src/data/storage.ts` (versioned keys: `spbu-data:v1`, `auth:v1`). This is the single migration point when moving to a backend API.

- **SpbuContext**: lazy-inits from localStorage, auto-persists via `useEffect` on every `stations` change. Listens for `storage` events to sync state across browser tabs (e.g. admin changes reflected in public tab).
- **AuthContext**: credentials validated against `VITE_ADMIN_USERNAME` / `VITE_ADMIN_PASSWORD` env vars

### Routing

| Path | Guard | Layout |
|------|-------|--------|
| `/` | none | PublicLayout |
| `/admin/login` | none | standalone |
| `/admin` | ProtectedRoute (redirects to `/admin/login`) | AdminLayout |
| `*` | none | NotFound |

ProtectedRoute checks `useAuth().isAuthenticated` — if false, renders `<Navigate to="/admin/login" replace />`.

### Domain Types

Core types in `src/types/spbu.ts`:
- `FuelType`: `'pertalite' | 'pertamax' | 'bio-solar' | 'pertamina-dex'`
- `FuelStatus`: `'available' | 'empty'`
- `Spbu`: station object with `id`, `name`, `address`, `mapsUrl`, `fuels: SpbuFuelStatus[]`, `lastUpdated` (ISO 8601)

`FUEL_LABELS` maps FuelType to Indonesian display names.

## Conventions

- **No barrel files** — import directly from source files
- **`type` imports** — use `import type` for type-only imports
- **Functional setState** — always `setStations(prev => ...)`, never read state directly in updaters
- **Lazy state init** — `useState(() => loadFromStorage())`
- **Derived values at render time** — formatted dates computed inline via `Intl.DateTimeFormat('id-ID')`, not stored in state
- **One component per file** — no inline component definitions
- **Default exports** for components, named exports for hooks (`useSpbu`, `useAuth`) and utilities
- **Tailwind only** — no CSS modules, no CSS-in-JS, no component libraries
- **Indonesian UI text** — all user-facing strings in Bahasa Indonesia

## Environment Setup

Copy `.env.example` to `.env` and set admin credentials:
```
VITE_ADMIN_USERNAME=...
VITE_ADMIN_PASSWORD=...
```
