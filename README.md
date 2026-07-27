 Revscoll Store 👟✨

Selamat datang di repositori resmi **Revscoll Store** — Toko sepatu grosir dan eceran terpercaya yang menyediakan berbagai pilihan alas kaki berkualitas tinggi dengan harga terbaik untuk kebutuhan retail maupun grosir.

---

## 📂 Struktur Berkas Repositori (File Structure)

Repositori ini tersusun atas beberapa direktori, halaman web, berkas styling, serta aset multimedia dan produk sebagai berikut:

### 🌐 Berkas Halaman Web (HTML)
* `produk.html` — Halaman katalog utama untuk melihat seluruh daftar produk sepatu yang tersedia.
* `tentang-kami.html` — Halaman profil perusahaan yang menjelaskan latar belakang, visi, dan misi Revscoll Store.
* `adizero.html` — Halaman khusus untuk menampilkan katalog dan detail produk seri **Adizero**.
* `vans-knu.html` — Halaman khusus untuk menampilkan katalog dan detail produk seri **Vans Knu**.
* `puma_speedcat_og.html` — Halaman khusus untuk menampilkan katalog dan detail produk seri **Puma Speedcat OG**.
* `web-master.html` — Halaman manajemen / panel kontrol web master.

### 🎨 Styling & Otomasi
* `css/` — Direktori yang menyimpan kumpulan berkas gaya (*stylesheet*) untuk mempercantik tampilan antarmuka web.
* `.github/workflows/` — Direktori konfigurasi untuk otomatisasi CI/CD dan deployment GitHub Actions.

### 🖼️ Aset Visual & Branding
* `logo.jpg` & `logo-berputar.png` — Logo resmi identitas visual Revscoll Store.
* `adizero-banner.png` & `banner1-knu.png` — Banner promosi produk unggulan.
* `sertipikat-pt.jpg` — Dokumen legalitas resmi PT / toko terpercaya.
* `jinggle.mp3` — Berkas audio jingle resmi Revscoll Store.

### 📦 Koleksi Gambar Produk
* **Seri Adizero:** 
  `adizero-hitam-merah.png`, `adizero-hitam-stabilo.png`, `adizero-putih-hitam.png`, `adizero-putih-merah.png`, `adzr-htm-pth.png`, `adzr-htm-silver.png`, `sole-putih.png`
* **Seri Knu / Vans:** 
  `knu-fullblack.png`, `knu-hitam-putih.png`, `knu-sole-putih.png`, `knu-triple-black.png`, `knu1.jpeg`
* **Seri Puma:** 
  `puma-biru.png`, `puma-black-white.png`, `puma-merah.png`, `puma-pink.png`, `master-puma.png`

### 📄 Lainnya
* `LICENSE` — Lisensi resmi penggunaan repositori dan aset di dalamnya.
* `README.md` — Berkas dokumentasi utama repositori.

---

## 🌟 Keunggulan Revscoll Store

1. **Grosir & Eceran:** Melayani pembelian satuan untuk penggunaan pribadi maupun partai besar bagi para reseller/dropshipper.
2. **Produk Berkualitas:** Menyediakan model sepatu tren terkini yang nyaman dan tahan lama.
3. **Terpercaya:** Didukung oleh legalitas yang jelas dan pelayanan pelanggan yang profesional.

---

## 📝 Lisensi
Proyek ini dilindungi di bawah lisensi yang tertera pada berkas `LICENSE`.
"""

with open("README.md", "w", encoding="utf-8") as f:
    f.write(readme_content)

print("README.md created successfully!")
