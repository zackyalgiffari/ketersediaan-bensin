# PRD: Monitor BBM Pertamina Solok (Admin-Managed)

| Komponen | Spesifikasi |
| :--- | :--- |
| **Nama Produk** | Monitor BBM Solok |
| **Model Data** | **Manual Admin Update** (Single Source of Truth) |
| **Target Objek** | SPBU Reguler Pertamina di Kabupaten Solok |
| **Platform** | Web (Mobile Responsive) |

---

## 1. Ringkasan Eksekutif
Website ini adalah dashboard sederhana yang menampilkan status ketersediaan BBM (Pertalite, Bio Solar, Pertamax, dll) di seluruh SPBU Reguler Kabupaten Solok. Data diperbarui secara eksklusif oleh **Admin** (pengelola) berdasarkan informasi valid dari lapangan.

## 2. Fitur Utama (Functional Requirements)

### A. Tampilan Pengguna (Public View)
1.  **List SPBU Terpusat:** Daftar semua SPBU Reguler di Kabupaten Solok dalam bentuk kartu (card).
2.  **Indikator Stok Visual:**
    * 🟢 **Tersedia:** Stok ada.
    * 🔴 **Kosong:** Stok sedang habis/dalam perjalanan.
3.  **Detail Produk:** Menampilkan status untuk setiap jenis BBM (Pertalite, Pertamax, Bio Solar, Dexlite).
4.  **Integrasi Navigasi:** Tombol "Buka di Maps" yang langsung mengarahkan ke lokasi SPBU via Google Maps.
5.  **Timestamp Admin:** Keterangan *"Terakhir diperbarui oleh Admin: [Waktu/Tanggal]"* untuk memberi kepastian pada pengguna.

### B. Panel Admin (Restricted Access)
1.  **Login Admin:** Halaman masuk aman menggunakan *username* dan *password*.
2.  **Dashboard Update Cepat:**
    * Daftar SPBU dengan tombol *toggle* (saklar) sederhana untuk mengubah status BBM dari "Tersedia" ke "Kosong" atau sebaliknya.
    * Tombol "Update All" untuk memperbarui *timestamp* secara massal.

---

## 3. Struktur Konten (Data Display)

Setiap kartu SPBU akan menampilkan informasi berikut secara konsisten:

| Nama Kolom | Contoh Data |
| :--- | :--- |
| **Nama SPBU** | SPBU 14.273.111 Lubuk Selasih |
| **Alamat/Area** | Jalur Lintas Sumatera - Kec. Gunung Talang |
| **Status Pertalite** | 🟢 Tersedia |
| **Status Bio Solar** | 🔴 Kosong |
| **Status Pertamax** | 🟢 Tersedia |
| **Link Maps** | [Link Google Maps Resmi] |
| **Last Update** | 18 Maret 2026, 14:00 WIB |

---

## 4. Daftar SPBU Prioritas (Dataset Awal)
Berikut adalah titik SPBU Reguler di Kabupaten Solok yang akan masuk ke sistem:
1.  **SPBU Lubuk Selasih** (Simpang arah Padang - Solok - Muara Labuh).
2.  **SPBU Koto Baru** (Kec. Kubung - Jalur utama).
3.  **SPBU Saok Laweh** (Arah Kota Solok).
4.  **SPBU Alahan Panjang** (Kec. Lembah Gumanti).
5.  **SPBU Sumani** (Kec. X Koto Singkarak).
6.  **SPBU Talang** (Kec. Gunung Talang).

---

## 5. Arsitektur Teknis (Simple Stack)
* **Frontend:** HTML5, Tailwind CSS (untuk tampilan yang bersih di HP).
* **Backend:** PHP atau Node.js sederhana untuk memproses login admin.
* **Database:** MySQL atau Google Sheets (sebagai database sederhana) untuk menyimpan status stok.
* **Keamanan:** Enkripsi password admin dan proteksi folder `/admin` agar tidak bisa diakses publik.

---

## 6. Alur Kerja (Workflow)
1.  Admin menerima informasi stok (via telepon/grup koordinasi/petugas lapangan).
2.  Admin login ke `/admin`.
3.  Admin mengubah status BBM di SPBU terkait.
4.  Admin menekan "Simpan".
5.  Website publik secara otomatis langsung menampilkan data terbaru.

---

## 7. Desain Antarmuka (UI/UX)
* **Simpel & Kontras:** Background putih, teks hitam, dengan indikator warna (Merah/Hijau) yang sangat kontras agar mudah dibaca di bawah sinar matahari saat di jalan.
* **Tanpa Iklan/Pop-up:** Menjamin kecepatan akses (loading speed) yang maksimal.

---
