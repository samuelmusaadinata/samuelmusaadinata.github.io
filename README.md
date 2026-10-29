# musa.dev — Technology Portfolio

Portofolio statis berbasis HTML, CSS, dan JavaScript yang dirancang untuk GitHub Pages.

## Fitur
- Desain responsif untuk desktop dan mobile
- Galeri proyek dengan pencarian dan filter kategori
- Halaman detail proyek berdasarkan parameter URL
- Kontak melalui `mailto:` (tanpa backend)
- Metadata SEO dasar, Open Graph, `robots.txt`, dan `sitemap.xml`

## Publikasi GitHub Pages
1. Buat repositori publik bernama **`samuelmusaadinata.github.io`** pada akun GitHub `samuelmusaadinata`.
2. Ekstrak isi ZIP ini dan unggah semua file/folder ke root repositori. Pastikan `index.html` berada langsung di root.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu Save.
5. Tunggu proses deployment. Situs utama akan tersedia di `https://samuelmusaadinata.github.io/`.

## Kustomisasi wajib sebelum publikasi
- Periksa nama, bio, status, teknologi, dan deskripsi setiap proyek di `assets/js/projects.js`.
- Ganti tautan GitHub generik pada tiap proyek dengan URL repositori yang benar.
- Ganti tautan YouTube contoh pada `contact.html` dengan channel yang benar atau hapus jika tidak diperlukan.
- Ganti `GANTI_DENGAN_EMAIL_KAMU@example.com` di `assets/js/main.js` dengan alamat email yang memang ingin dipublikasikan.
- Ganti gambar SVG placeholder dengan foto proyek asli, dan sesuaikan teks alt.
- Jika mengubah URL situs atau domain, perbarui canonical URL, Open Graph URL, `robots.txt`, dan `sitemap.xml`.

## Catatan penting
- Form kontak hanya membuka aplikasi email pengunjung; situs ini tidak mengirim atau menyimpan pesan di server.
- Search/filter bekerja di sisi browser dan hanya menelusuri data proyek yang dimasukkan ke `assets/js/projects.js`.
- Untuk SEO, setiap proyek penting sebaiknya memiliki URL halaman HTML unik yang bisa dirayapi Google. Versi awal ini menggunakan `project.html?id=...` untuk detail proyek; setelah situs terbit, pertimbangkan membuat halaman HTML terpisah untuk proyek utama.
- GitHub Pages adalah hosting statis. Fitur login, database, dan dashboard admin dinamis membutuhkan layanan backend terpisah.
