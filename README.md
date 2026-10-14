# SIMETRI 2026 Website

Website resmi **SIMETRI (Sistem Informasi Mengajar Teknologi Informasi) 2026**, program pengabdian masyarakat Departemen Social Development HMSI ITS. Tahun ini mengusung tema petualangan fantasi **Arksivara**, dengan grand theme *"Build Your Personal Website From Zero to Hero."*

Website terdiri dari 4 halaman statis (HTML + Tailwind CSS + JavaScript) tanpa backend.

---

## Struktur Folder

```
.
├── .vscode/            # Pengaturan editor (tidak ikut di-hosting)
├── Home/               # Halaman beranda
│   ├── homepage.html
│   └── images/
├── Tema/               # Halaman tema & dunia Arksivara
│   ├── pages/Tema.html
│   └── assets/
├── Materi/             # Halaman materi & jadwal 4 hari
│   ├── Materi.html
│   └── images/
├── Asik/               # Halaman ASIK
│   ├── asik.html
│   └── ...
└── README.md
```

> Sesuaikan struktur di atas dengan isi folder aslinya kalau ada perbedaan.

## Halaman

| Halaman | File | Isi |
|---|---|---|
| Home | `Home/homepage.html` | Hero, tentang SIMETRI, dokumentasi, testimoni, footer |
| Tema | `Tema/pages/Tema.html` | Lore Arksivara, 10 kerajaan, dan arc cerita |
| Materi | `Materi/Materi.html` | Materi dan jadwal Day 1 sampai Day 4 |
| Asik | `Asik/asik.html` | Halaman ASIK |

## Teknologi

- HTML5
- [Tailwind CSS](https://tailwindcss.com/) lewat CDN (`cdn.tailwindcss.com`)
- JavaScript (vanilla) untuk menu mobile, carousel, dan FAQ
- Font *The Wild Breath of Zelda* dari `fonts.cdnfonts.com`

## Menjalankan di Lokal

1. Clone repo ini.
2. Buka folder di VS Code.
3. Jalankan dengan ekstensi **Live Server** (klik kanan `Home/homepage.html`, lalu *Open with Live Server*).

Jangan membuka file dengan klik dua kali (`file://`) karena beberapa path dan font bisa gagal dimuat. Pakai server lokal supaya hasilnya sama dengan saat di-hosting.

---

## Checklist Sebelum Hosting

Server hosting (GitHub Pages, Netlify, Vercel) berjalan di Linux, jadi ada beberapa hal yang lolos di Windows tapi bisa rusak setelah online.

### 1. Ganti backslash `\` jadi slash `/` di semua link

Link navbar dan footer saat ini memakai backslash:

```html
<!-- sebelum -->
<a href="..\Home\homepage.html">Home</a>
<a href="..\Tema\pages\Tema.html">Tema</a>

<!-- sesudah -->
<a href="../Home/homepage.html">Home</a>
<a href="../Tema/pages/Tema.html">Tema</a>
```

Lakukan di keempat halaman (navbar, mobile menu, dan footer). Di VS Code: `Ctrl+Shift+H` (Replace in Files), cari `..\` lalu ganti dengan `../`, dan rapikan `\` sisanya jadi `/`.

### 2. Samakan huruf besar-kecil nama file dan folder

Linux membedakan `Tema.html` dan `tema.html`, sedangkan Windows tidak. Pastikan penulisan di `href` dan `src` **persis sama** dengan nama aslinya, misalnya `Asik/asik.html`, `Materi/Materi.html`, dan nama gambar seperti `Foto4.jpeg` atau `Salinan DSCF0054.JPG`.

### 3. Hindari spasi di nama file

Beberapa gambar punya spasi, misalnya `Salinan DSCF0054.JPG`, `Group 1410136690.png`, `Logo SI.png`. Ini masih bisa jalan, tapi lebih aman diganti jadi `salinan-dscf0054.jpg` atau `logo-si.png`. Kalau diganti, perbarui juga `src` di HTML-nya.

### 4. Pastikan semua path gambar benar

Cek tab **Network** di DevTools (`F12`), filter **Img**, lalu muat ulang halaman. Gambar yang gagal akan berstatus `404`. Perhatikan juga path relatif seperti `../assets/images/...` atau `images/...`, karena path-nya bergantung pada lokasi file HTML.

### 5. Cek filter `#tint` di mobile menu

Ikon sosmed di mobile menu memakai `filter: url(#tint)`. Pastikan definisi SVG filter dengan `id="tint"` ada di halaman tersebut. Kalau tidak ada, efeknya tidak muncul.

### 6. Tailwind via CDN hanya untuk tahap awal

`cdn.tailwindcss.com` cukup untuk acara dan demo, tapi tidak direkomendasikan untuk produksi karena ukurannya besar dan bisa muncul peringatan di console. Untuk acara jangka pendek, boleh dibiarkan. Kalau ingin lebih ringan, build Tailwind dengan CLI lalu pakai file CSS hasilnya.

### 7. Tambahkan halaman root (`index.html`)

Hosting biasanya membuka `index.html` di root. Karena belum ada, buat file `index.html` di root repo yang mengarahkan ke Home:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=Home/homepage.html">
  <title>SIMETRI 2026</title>
</head>
<body>
  <a href="Home/homepage.html">Klik di sini jika tidak dialihkan otomatis</a>
</body>
</html>
```

### 8. Tambahan yang disarankan

- Tambahkan `<meta name="description">` dan favicon di setiap halaman.
- Tambahkan tag Open Graph (`og:title`, `og:image`) supaya link rapi saat dibagikan di WhatsApp dan Instagram.
- Kompres gambar besar (dokumentasi `.JPG`) ke ukuran web, idealnya di bawah 300 KB per gambar.
- Uji di HP asli dan di lebar layar 360px, 768px, 1024px, dan 1440px.
- Buka semua link navbar, footer, dan tombol sosmed satu per satu.

---

## Deploy

### GitHub Pages (gratis)

1. Push semua file ke branch `main`.
2. Buka **Settings**, lalu **Pages**.
3. Pada **Source**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Klik **Save**, tunggu 1 sampai 2 menit.
5. Website bisa dibuka di:
   `https://<username>.github.io/<nama-repo>/`

> Di GitHub Pages situs berada di sub-path `/<nama-repo>/`. Jangan pakai path yang diawali `/` (misalnya `/Home/images/a.png`), pakai path relatif (`images/a.png` atau `../Home/...`).

### Netlify atau Vercel (alternatif)

1. Login, lalu **Add new site**, lalu **Import from GitHub**.
2. Pilih repo ini.
3. Build command dikosongkan, publish directory diisi `.` (root).
4. Klik **Deploy**.

---

## Tim

Dikembangkan oleh tim Website SIMETRI 2026, Departemen Social Development HMSI ITS.

## Link Penting

- Instagram: [@simetri.hmsiits](https://www.instagram.com/simetri.hmsiits)
- X: [@hmsi_its](https://x.com/hmsi_its)
- TikTok: [@hmsi_its](https://www.tiktok.com/@hmsi_its)
- YouTube: [@layarhmsi](https://youtube.com/@layarhmsi)
