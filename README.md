# ArX Link

[![GitHub stars](https://img.shields.io/github/stars/arxdev40/arxlink?style=flat-square)](https://github.com/arxdev40/arxlink/stargazers)
[![GitHub license](https://img.shields.io/github/license/arxdev40/arxlink?style=flat-square)](LICENSE)

**ArX Link** adalah aplikasi web _Link-in-Bio_ (tautan profil) personal yang dirancang dengan desain minimalis, modern, bersih, dan berkinerja tinggi. Aplikasi ini digunakan untuk merangkum dan membagikan tautan media sosial serta kontak resmi secara terpusat.

Dibangun dengan prinsip _Semantic HTML5_, aksesibilitas ketat (ARIA), integrasi SEO, dan optimasi pemuatan halaman yang cepat.

---

## Fitur Utama

- **Desain Modern Minimalis (Glassmorphism):** Tampilan visual yang bersih dengan perpaduan latar belakang gradien halus, efek _blur_ kaca transparan (`backdrop-filter`), dan mikro-animasi hover interaktif.
- **Performa Tinggi & Portabel:** Pemuatan font yang optimal (menghapus `@import` di CSS) dan penggunaan _relative path_ untuk memastikan situs dapat berjalan di subdirektori (seperti GitHub Pages) maupun _root_ domain tanpa konfigurasi tambahan.
- **Fitur Berbagi Cerdas (Smart Share):** Mengintegrasikan Web Share API untuk berbagi langsung di perangkat mobile. Jika tidak didukung (seperti pada desktop), sistem akan menyalin URL secara otomatis ke _clipboard_ dan menampilkan umpan balik teks "Disalin!" secara interaktif.
- **Aksesibilitas Ketat (Strict ARIA):** Elemen interaktif dilengkapi dengan atribut ARIA berbahasa Indonesia (`aria-label`, `aria-hidden`) agar ramah bagi pengguna pembaca layar (_screen reader_).
- **SEO & Data Terstruktur:** Dilengkapi dengan deskripsi meta, tag Open Graph lengkap untuk pratinjau media sosial yang kaya, serta Data Terstruktur JSON-LD bertipe `ProfilePage` (`Person`).
- **Responsif & Mobile-First:** Tampilan yang dioptimalkan secara khusus untuk perangkat seluler namun tetap proporsional dan elegan di layar desktop.

---

## Teknologi yang Digunakan

Aplikasi ini dibangun menggunakan pustaka dan teknologi web standar industri berikut:

- **HTML5 & CSS3:** Struktur dokumen semantik dan skema warna dengan _CSS Custom Properties_ (Variables).
- **Bootstrap v5.3.8:** Kerangka kerja CSS untuk tata letak responsif dan utilitas modern.
- **Alpine.js v3.x.x (defer):** Pustaka JavaScript deklaratif yang ringan untuk mengelola logika interaktif (_state management_).
- **AOS (Animate On Scroll) v2.3.4:** Untuk animasi transisi masuk elemen yang halus saat halaman digulir.
- **Bootstrap Icons v1.11.3:** Pustaka ikon vektor yang ringan dan mudah disesuaikan.
- **Poppins (Google Fonts):** Tipografi sans-serif modern yang bersih untuk kenyamanan membaca.

---

## Struktur Proyek

Berikut adalah struktur direktori dan file dari proyek ArX Link:

```text
arxlink/
├── css/
│   └── style.css            # Kustomisasi stylesheet & efek Glassmorphism
├── js/
│   └── app.js               # Logika aplikasi (Alpine.js, AOS, & Share API)
├── img/                     # Folder aset gambar & logo media sosial (.webp)
│   ├── facebook.webp
│   ├── github.webp
│   ├── gmail.webp
│   ├── instagram.webp
│   ├── threads.webp
│   └── x.webp
├── 404.html                 # Halaman error 404 kustom yang dinamis
├── favicon.ico              # Favicon standard
├── icon.png                 # Logo aplikasi untuk Apple Touch
├── icon.svg                 # Logo vektor aplikasi
├── index.html               # Halaman utama aplikasi (Link-in-Bio)
├── LICENSE                  # Berkas lisensi open-source (MIT)
├── README.md                # Dokumentasi proyek (berkas ini)
├── robots.txt               # Aturan perayapan mesin pencari (SEO)
└── site.webmanifest         # Manifest PWA untuk instalasi homescreen
```

---

## Cara Menjalankan Secara Lokal

Anda dapat menjalankan proyek ini secara lokal dengan beberapa metode mudah:

### Metode 1: Menggunakan Live Server di VS Code (Sangat Direkomendasikan)

1. Buka folder proyek `arxlink` di **Visual Studio Code**.
2. Pastikan ekstensi **Live Server** (oleh Ritwick Dey) telah terpasang.
3. Klik kanan pada file `index.html` dan pilih **Open with Live Server** (atau klik tombol **Go Live** di sudut kanan bawah).
4. Halaman akan otomatis terbuka di browser pada alamat `http://127.0.0.1:5500/`.

### Metode 2: Menggunakan Python HTTP Server

Jika Anda memiliki Python terpasang di komputer Anda, jalankan perintah berikut di terminal/command prompt pada direktori proyek:

```bash
python -m http.server 8000
```

Buka browser dan akses alamat `http://localhost:8000/`.

---

## Panduan Deploy ke GitHub Pages

Proyek ini telah dikonfigurasi secara portabel dan siap dideploy ke **GitHub Pages**:

1. Buat repositori baru di GitHub (misalnya: `arxlink`).
2. Hubungkan proyek lokal Anda dan dorong (_push_) kode ke repositori tersebut:
    ```bash
    git init
    git add .
    git commit -m "Initial commit - Refactored codebase"
    git branch -M main
    git remote add origin https://github.com/USERNAME/arxlink.git
    git push -u origin main
    ```
3. Di halaman repositori GitHub Anda, buka tab **Settings** -> **Pages**.
4. Di bagian **Build and deployment**, pilih _source_ sebagai **Deploy from a branch**, lalu pilih branch `main` dan folder `/ (root)`. Klik **Save**.
5. Situs Anda akan aktif di alamat `https://USERNAME.github.io/arxlink/`.

> [!NOTE]
> Berkat penerapan script resolusi `<base>` tag dinamis pada halaman 404, semua aset pada halaman error akan tetap termuat dengan benar meskipun pengguna mengakses sub-path yang dalam saat di-deploy ke GitHub Pages.

---

## Aturan Penulisan Kode (Coding Standards)

Proyek ini mematuhi standar penamaan teknis industri yang ketat demi menjaga kualitas dan konsistensi kode:

- **kebab-case:** Digunakan untuk penamaan kelas CSS, ID elemen HTML (`scroll-to-top`, `base-tag`), atribut kustom (`data-*`), nama file, dan label/ID ARIA.
- **camelCase:** Digunakan untuk semua penamaan variabel, fungsi, metode, dan properti objek dalam file JavaScript/Alpine.js (`shareLink`, `shareData`, `isScrollToTop`, `copied`).
- **PascalCase:** Digunakan untuk penamaan Class, Interface, Komponen, atau Konstruktor pada JavaScript (jika ada).
- **UPPERCASE_SNAKE_CASE:** Digunakan khusus untuk konstanta global atau konfigurasi statis.
- **Bahasa Indonesia:** Digunakan untuk konten situs, locale, serta seluruh label ARIA.
- **Bahasa Inggris:** Digunakan untuk seluruh penamaan teknis dalam kode (nama variabel, fungsi, kelas CSS, ID, dll.).

---

## Lisensi

Proyek ini dilisensikan di bawah lisensi **MIT**. Silakan baca file [LICENSE](LICENSE) untuk informasi lebih lanjut.

