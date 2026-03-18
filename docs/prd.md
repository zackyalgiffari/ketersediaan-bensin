# PRD: Monitor BBM Pertamina Solok (Admin-Managed)

| Komponen | Spesifikasi |
| :--- | :--- |
| **Nama Produk** | Monitor BBM Solok |
| **Model Data** | **Manual Admin Update** (Single Source of Truth) |
| **Target Objek** | SPBU Reguler Pertamina di Kabupaten Solok |
| **Platform** | Web (Mobile Responsive) |

---

## 1. Ringkasan Eksekutif

Website dashboard sederhana yang menampilkan status ketersediaan BBM (Pertalite, Bio Solar, Pertamax, Pertamina Dex) di seluruh SPBU Reguler Kabupaten Solok. Data diperbarui secara eksklusif oleh **Admin** (pengelola) berdasarkan informasi valid dari lapangan.

## 2. Fitur Utama (Functional Requirements)

### A. Tampilan Pengguna (Public View)

1. **List SPBU Terpusat:** Daftar 6 SPBU Reguler di Kabupaten Solok dalam bentuk kartu (card) dengan responsive grid (1 kolom mobile, 2 tablet, 3 desktop).
2. **Indikator Stok Visual:**
   - 🟢 **Tersedia:** Stok ada (badge hijau).
   - 🔴 **Kosong:** Stok sedang habis/dalam perjalanan (badge merah).
3. **Detail Produk:** Menampilkan status untuk setiap jenis BBM: Pertalite, Pertamax, Bio Solar, Pertamina Dex.
4. **Integrasi Navigasi:** Tombol "Buka di Maps" yang langsung mengarahkan ke lokasi SPBU via Google Maps (membuka di tab baru).
5. **Timestamp Admin:** Keterangan *"Terakhir diperbarui: [Waktu/Tanggal] WIB"* dalam format Indonesia (`id-ID`, timezone `Asia/Jakarta`).

### B. Panel Admin (Restricted Access)

1. **Login Admin:** Halaman login (`/admin/login`) dengan username dan password.
2. **Dashboard Update Cepat** (`/admin`):
   - Daftar SPBU dengan tombol **toggle** (saklar) per jenis BBM untuk mengubah status dari "Tersedia" ke "Kosong" atau sebaliknya.
   - Tombol **"Update Semua Timestamp"** untuk memperbarui timestamp seluruh SPBU secara massal.
3. **Logout:** Tombol logout di header admin.
4. **Protected Route:** Halaman admin hanya bisa diakses setelah login; redirect otomatis ke `/admin/login` jika belum autentikasi.

---

## 3. Struktur Konten (Data Display)

Setiap kartu SPBU menampilkan informasi berikut:

| Nama Kolom | Contoh Data |
| :--- | :--- |
| **Nama SPBU** | SPBU Lubuk Selasih |
| **Alamat/Area** | Simpang arah Padang - Solok - Muara Labuh |
| **Status Pertalite** | 🟢 Tersedia |
| **Status Pertamax** | 🔴 Kosong |
| **Status Bio Solar** | 🟢 Tersedia |
| **Status Pertamina Dex** | 🔴 Kosong |
| **Link Maps** | Tombol "Buka di Maps" |
| **Last Update** | 18 Maret 2026, 14.00 WIB |

---

## 4. Daftar SPBU (Dataset Awal)

6 SPBU Reguler di Kabupaten Solok:

1. **SPBU Lubuk Selasih** — Simpang arah Padang - Solok - Muara Labuh
2. **SPBU Koto Baru** — Kec. Kubung - Jalur Utama
3. **SPBU Saok Laweh** — Arah Kota Solok
4. **SPBU Alahan Panjang** — Kec. Lembah Gumanti
5. **SPBU Sumani** — Kec. X Koto Singkarak
6. **SPBU Talang** — Kec. Gunung Talang

---

## 5. Arsitektur Teknis

Lihat [architecture.md](./architecture.md) untuk detail teknis lengkap.

| Layer | Teknologi |
| :--- | :--- |
| **Frontend** | React 19 + TypeScript + Vite |
| **Styling** | Tailwind CSS v4 |
| **Routing** | React Router v7 (library mode) |
| **State** | React Context API |
| **Persistence** | localStorage (versioned, siap migrasi ke API) |

---

## 6. Alur Kerja (Workflow)

1. Admin menerima informasi stok (via telepon/grup koordinasi/petugas lapangan).
2. Admin login ke `/admin/login` dengan username & password.
3. Admin toggle status BBM di SPBU terkait (perubahan langsung tersimpan).
4. Admin opsional tekan "Update Semua Timestamp" untuk refresh waktu.
5. Website publik (`/`) langsung menampilkan data terbaru (shared state via Context).

---

## 7. Desain Antarmuka (UI/UX)

- **Simpel & Kontras:** Background putih, teks hitam, indikator warna hijau/merah yang sangat kontras — mudah dibaca di bawah sinar matahari.
- **Mobile-First Responsive:** Grid 1 kolom di mobile, 2 di tablet, 3 di desktop.
- **Tanpa Iklan/Pop-up:** Kecepatan akses maksimal.
- **Navigasi Minimal:** Public view hanya header + grid kartu. Admin view hanya header + toggles.

---
