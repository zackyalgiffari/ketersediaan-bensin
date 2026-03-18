# Arsitektur Teknis — Monitor BBM Solok

## Tech Stack

| Teknologi | Versi | Fungsi |
| :--- | :--- | :--- |
| React | 19 | UI library |
| TypeScript | 5.9 | Type safety |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | 4 | Utility-first styling (via `@tailwindcss/vite` plugin) |
| React Router | 7 | Client-side routing (library mode, `createBrowserRouter`) |

---

## Struktur Project

```
src/
  main.tsx                    # Entry point: providers + RouterProvider
  index.css                   # @import "tailwindcss"
  router.tsx                  # createBrowserRouter config

  types/
    spbu.ts                   # FuelType, FuelStatus, Spbu, FUEL_LABELS
    auth.ts                   # AuthState, LoginCredentials

  data/
    initial-spbu-data.ts      # 6 SPBU seed data
    storage.ts                # Versioned localStorage helpers

  contexts/
    SpbuContext.tsx            # SPBU state + toggleFuelStatus, updateAllTimestamps
    AuthContext.tsx            # Auth state + login/logout

  components/
    layout/
      PublicLayout.tsx         # Header + Outlet (public pages)
      AdminLayout.tsx          # Admin header + logout + Outlet
    public/
      SpbuCard.tsx             # Kartu SPBU (nama, alamat, badges, maps, timestamp)
      SpbuCardList.tsx         # Responsive grid of SpbuCard
      FuelStatusBadge.tsx      # Pill badge hijau/merah per jenis BBM
      MapsButton.tsx           # Link "Buka di Maps" (Google Maps)
      LastUpdatedText.tsx      # Format timestamp Indonesia (id-ID, WIB)
    admin/
      LoginForm.tsx            # Form username/password + error handling
      SpbuAdminCard.tsx        # Kartu SPBU + toggle switches
      SpbuAdminList.tsx        # Grid of SpbuAdminCard
      FuelToggle.tsx           # Toggle switch per jenis BBM
      UpdateAllButton.tsx      # Bulk timestamp update
    shared/
      Header.tsx               # Branding "Monitor BBM Solok"
      ProtectedRoute.tsx       # Auth guard → Navigate to /admin/login

  pages/
    PublicDashboard.tsx        # Halaman utama publik
    AdminLogin.tsx             # Halaman login admin
    AdminDashboard.tsx         # Halaman dashboard admin
    NotFound.tsx               # 404
```

---

## Routing

| Path | Component | Guard |
| :--- | :--- | :--- |
| `/` | PublicLayout → PublicDashboard | — |
| `/admin/login` | AdminLogin | — |
| `/admin` | ProtectedRoute → AdminLayout → AdminDashboard | Auth required |
| `*` | NotFound | — |

---

## State Management

### SpbuContext (`src/contexts/SpbuContext.tsx`)

Core state untuk data SPBU. Menyediakan:

- `stations: Spbu[]` — array 6 SPBU dengan fuel status
- `toggleFuelStatus(stationId, fuelType)` — toggle status satu jenis BBM di satu SPBU
- `updateAllTimestamps()` — set semua `lastUpdated` ke waktu sekarang

**Pattern:**
- Lazy state initialization: `useState(() => loadFromStorage())`
- Functional setState: `setStations(prev => ...)`
- Auto-persist via `useEffect` ke localStorage setiap kali `stations` berubah

### AuthContext (`src/contexts/AuthContext.tsx`)

State autentikasi admin:

- `isAuthenticated: boolean`
- `login(credentials)` — validasi dan return boolean
- `logout()` — clear auth state

**Credentials:** Dikonfigurasi via environment variables `VITE_ADMIN_USERNAME` dan `VITE_ADMIN_PASSWORD` (lihat `.env.example`)

---

## Data Persistence

### localStorage (via `src/data/storage.ts`)

Semua akses localStorage di-wrap dalam satu file dengan versioning:

| Key | Isi | Format |
| :--- | :--- | :--- |
| `spbu-data:v1` | Array SPBU + fuel status | JSON |
| `auth:v1` | Auth state | `"true"` or absent |

**Fitur:**
- Versioned keys (prefix `v1`) — siap migrasi tanpa konflik
- Try-catch di setiap operasi — graceful fallback jika storage penuh/unavailable
- Satu-satunya file yang akses localStorage langsung — migration point tunggal saat pindah ke API

---

## Data Model

### Spbu

```typescript
interface Spbu {
  id: string;           // e.g. "spbu-lubuk-selasih"
  name: string;         // e.g. "SPBU Lubuk Selasih"
  address: string;      // e.g. "Simpang arah Padang - Solok - Muara Labuh"
  mapsUrl: string;      // Google Maps URL
  fuels: SpbuFuelStatus[];
  lastUpdated: string;  // ISO 8601
}
```

### SpbuFuelStatus

```typescript
interface SpbuFuelStatus {
  type: FuelType;    // 'pertalite' | 'pertamax' | 'bio-solar' | 'pertamina-dex'
  status: FuelStatus; // 'available' | 'empty'
}
```

---

## Key Patterns

- **No barrel files** — semua import langsung ke source file
- **Lazy state init** — `useState(() => loadFromStorage())`
- **Functional setState** — `setStations(prev => ...)`
- **Derived state saat render** — formatted dates dihitung inline via `Intl.DateTimeFormat`, bukan di state/effect
- **No inline component definitions** — setiap komponen file sendiri
- **Versioned localStorage** — wrapped try-catch, siap migrasi ke API

---

## Migrasi ke Backend (Roadmap)

Saat backend siap, perubahan minimal:

1. **Ganti `src/data/storage.ts`** — dari localStorage ke API calls (`fetch`)
2. **Update `SpbuContext.tsx`** — lazy init dari API, persist via API
3. **Update `AuthContext.tsx`** — login/logout via API, token-based auth
4. **Tidak perlu ubah komponen UI** — semua consume via Context hooks

---

## Scripts

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Type check + production build
npm run lint      # ESLint
npm run preview   # Preview production build
```
