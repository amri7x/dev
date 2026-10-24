---
name: test-skill
description: Merencanakan, menulis, menjalankan, dan mengevaluasi pengujian perangkat lunak berdasarkan perilaku yang diharapkan dan pola yang sudah digunakan repositori. Gunakan setelah membuat fitur, memperbaiki bug, saat diminta menguji, atau ketika membutuhkan verifikasi regresi. Secara default fokus pada pengujian dan tidak mengubah kode produksi.
---

# Test Skill

## Tujuan

Menguji apakah aplikasi berperilaku sesuai persyaratan, menemukan regresi, dan melaporkan bukti pengujian secara jujur. Skill ini dapat digunakan lintas proyek, tetapi keputusan teknis harus mengikuti repositori yang sedang dibuka.

## Prinsip utama

1. **Kenali proyek sebelum bertindak.** Ikuti dokumentasi, struktur folder, konvensi kode, framework, package manager, dan pola pengujian yang sudah ada.
2. **Uji perilaku, bukan detail implementasi.** Utamakan hasil atau efek yang terlihat oleh pengguna atau kontrak antarmodul. Hindari tes rapuh yang hanya mengunci cara internal kode ditulis.
3. **Gunakan infrastruktur yang tersedia.** Jangan langsung memasang framework, dependency, browser, atau layanan baru sebelum memeriksa apa yang sudah tersedia dan apakah perubahan itu diperlukan.
4. **Jangan menebak spesifikasi.** Cari persyaratan dari tugas, dokumentasi, kode terkait, tipe, API contract, dan tes yang ada. Jika ekspektasi penting masih ambigu, tanyakan satu pertanyaan yang spesifik atau catat asumsi dengan jelas.
5. **Isolasi efek samping.** Hindari mengirim email, melakukan pembayaran nyata, memodifikasi data produksi, atau memanggil layanan eksternal yang berbiaya. Gunakan test database, sandbox, mock, atau fixture yang sesuai.
6. **Hasil harus dapat dilacak.** Bedakan tes yang lulus, gagal, dilewati, tidak dapat dijalankan, dan belum dilakukan. Jangan menyatakan seluruh fitur aman atau seluruh perilaku terverifikasi hanya karena sebagian tes lulus.
7. **Pisahkan pengujian dari perbaikan.** Default-nya, ubah atau buat file tes saja. Jangan mengubah kode produksi untuk membuat tes lulus kecuali pengguna secara eksplisit meminta perbaikan implementasi juga.

## Alur kerja

### 1. Pahami permintaan dan cakupan

- Tentukan fitur, bug, alur pengguna, kontrak API, atau risiko yang ingin diverifikasi.
- Identifikasi kriteria penerimaan yang eksplisit.
- Cari bagian aplikasi yang terdampak langsung dan perilaku penting yang berpotensi regresi.
- Tentukan file yang boleh diubah. Untuk tugas pengujian saja, anggap perubahan pada file tes dan konfigurasi tes yang benar-benar diperlukan sebagai cakupan utama; jangan mengubah kode produksi.

### 2. Periksa repositori sebelum menulis tes

Periksa seperlunya:

- `README`, dokumentasi proyek, instruksi agent, dan aturan kontribusi.
- File manifest dan lockfile untuk mengenali framework serta package manager.
- Scripts yang tersedia, konfigurasi test runner, setup global, fixtures, mocks, dan contoh tes terdekat.
- Arsitektur yang relevan: komponen UI, route, state, service/API, validasi, penyimpanan, dan otorisasi.
- Perubahan yang sudah dibuat pengguna. Jangan menimpa pekerjaan yang belum di-commit atau melakukan reset/clean secara destruktif.

Jangan mengasumsikan nama perintah seperti `npm test`, `vitest`, `jest`, `playwright`, atau `pytest`; pastikan dari file proyek dan dokumentasi yang tersedia.

### 3. Susun strategi tes sesuai risiko

Pilih lapisan terkecil yang dapat membuktikan perilaku dengan meyakinkan. Gunakan kombinasi bila memang diperlukan:

- **Unit:** logika murni, perhitungan, formatter, aturan validasi, dan fungsi terisolasi.
- **Integration:** kerja sama antarmodul, service/API, database test, auth, cache, atau kontrak data.
- **Component/UI:** interaksi pengguna, state tampilan, pesan validasi, loading, error, dan success state.
- **Browser/E2E:** alur end-to-end penting yang perlu membuktikan beberapa bagian aplikasi bekerja bersama.
- **Manual check:** hanya ketika otomasi tidak tersedia atau pengamatan langsung memang dibutuhkan. Catat langkah dan hasilnya.

Jangan membuat banyak tes di berbagai lapisan yang semuanya mengulang kasus identik tanpa nilai tambah. Prioritaskan berdasarkan risiko dan dampak jika gagal.

### 4. Buat matriks kasus tes

Untuk perilaku yang relevan, pertimbangkan:

- **Kasus normal:** input valid dan alur berhasil.
- **Batas:** nilai minimum/maksimum, batas jumlah, tanggal/waktu, panjang teks, nilai nol, dan batas pembulatan.
- **Input tidak valid:** format salah, data wajib kosong, nilai di luar rentang, atau referensi tidak ditemukan.
- **Status khusus:** loading, kosong, sukses, gagal, timeout, dan retry bila relevan.
- **Akses dan keamanan:** belum login, role tidak sesuai, akses langsung ke route, manipulasi payload, serta validasi di server bila berlaku.
- **Konsistensi state:** submit berulang, klik ganda, refresh, navigasi kembali, perubahan data setelah aksi, atau kondisi bersamaan bila relevan.
- **Regresi:** bug yang dilaporkan dan fungsi terkait yang berisiko ikut rusak.

Jangan memaksakan semua kategori ke setiap fitur. Pilih kasus yang relevan dan jelaskan alasan bila area berisiko tinggi tidak diuji.

### 5. Tulis tes sesuai konvensi proyek

- Letakkan tes dekat modul terkait atau di lokasi yang sudah distandarkan repositori.
- Gunakan nama tes yang menjelaskan kondisi dan hasil yang diharapkan.
- Gunakan data uji deterministik, fixture yang dapat dibaca, serta cleanup agar tes bisa dijalankan berulang.
- Mock hanya batas eksternal yang perlu diisolasi. Jangan mem-mock fungsi inti yang justru sedang diverifikasi.
- Pastikan assertion memeriksa hasil yang bermakna, bukan sekadar bahwa fungsi dipanggil atau komponen dirender.
- Untuk UI, uji dari sudut pandang pengguna saat memungkinkan: klik, input, submit, navigasi, dan pesan/hasil yang muncul.
- Untuk API, periksa status, bentuk respons, efek samping, serta penolakan input yang tidak valid.
- Jangan menonaktifkan tes, mengurangi assertion, memperlonggar aturan, atau mengubah konfigurasi hanya untuk membuat suite tampak lulus.

### 6. Jalankan tes dengan urutan yang efisien

1. Jalankan tes paling dekat dengan perubahan.
2. Jalankan suite integration atau browser yang relevan bila tersedia.
3. Jalankan pemeriksaan regresi atau suite lebih luas sesuai risiko, durasi, dan lingkungan.
4. Jalankan lint/type-check/build jika relevan dan perintahnya sudah tersedia; laporkan ini terpisah dari hasil tes.
5. Bila tes gagal, bedakan antara kemungkinan kegagalan produk, tes yang keliru/rapuh, fixture bermasalah, dan lingkungan yang tidak siap. Investigasi secukupnya; jangan mengubah kode produksi tanpa izin.

Jika suatu perintah gagal dijalankan, catat perintah dan alasan yang teramati. Jangan mengaku tes lulus bila prosesnya tidak berhasil dijalankan sampai selesai.

### 7. Periksa perubahan dan risiko efek samping

- Tinjau diff file tes dan konfigurasi yang diubah.
- Pastikan tidak ada secret, token, kredensial, data pribadi, atau data produksi di fixture/log.
- Pastikan test cleanup dilakukan dan tidak meninggalkan data eksternal.
- Jangan menambahkan dependency, mengubah lockfile, mengubah migrasi, atau mengubah konfigurasi aplikasi hanya demi kemudahan tes tanpa alasan kuat dan otorisasi yang sesuai.
- Bila ada tes browser dan lingkungan mendukungnya, cek error console dan request jaringan yang relevan; jangan menyebutnya telah diperiksa bila tidak dilakukan.

### 8. Laporkan hasil

Jawaban akhir harus mencakup:

- **Cakupan:** perilaku apa yang dites.
- **Perubahan:** file tes/konfigurasi yang dibuat atau diubah.
- **Perintah dan hasil:** perintah penting dan hasil sebenarnya, termasuk jumlah tes jika tersedia.
- **Keterbatasan:** tes yang tidak dapat berjalan, area yang hanya diuji manual, atau skenario yang belum tercakup.
- **Temuan:** kegagalan atau bug yang ditemukan, dengan bukti dan langkah reproduksi bila memungkinkan.

Gunakan status yang jelas:

- **Lulus:** tes berhasil diselesaikan dan assertion terkait lulus.
- **Gagal:** tes berjalan tetapi assertion atau proses yang diuji gagal.
- **Tidak dapat dijalankan:** terhalang dependency, layanan, konfigurasi, kredensial sandbox, atau lingkungan.
- **Belum diuji:** belum ada verifikasi untuk area tersebut.

Jangan menyamakan `lint`, `type-check`, atau `build` yang lulus dengan tes perilaku yang lulus. Jangan mengklaim cakupan penuh berdasarkan tes parsial.

## Batas tindakan default

- Diizinkan: membaca kode dan konfigurasi; menambahkan atau memperbaiki tes; memakai fixture dan mock yang konsisten dengan proyek; menjalankan perintah tes aman; melaporkan bug.
- Tidak diizinkan tanpa permintaan eksplisit: memperbaiki kode produksi, mengubah desain/arsitektur, menghapus atau melemahkan tes yang sudah ada, menambahkan dependency besar, mengubah pipeline CI, menjalankan tes terhadap produksi, atau melakukan tindakan eksternal yang memiliki biaya/efek nyata.
- Bila pengguna meminta implementasi fitur sekaligus tes, implementasikan hanya cakupan fitur yang diminta dan tambahkan tes yang relevan. Jangan melakukan refactor luas sebagai bagian sampingan.
- Bila pengguna meminta pengujian sekaligus perbaikan bug, jelaskan atau pisahkan temuan dari perubahan implementasi agar hasil tes awal dan hasil setelah perbaikan dapat dibedakan.

## Contoh penggunaan

- `/test-skill Buat tes untuk fitur kode diskon pada checkout. Periksa kode valid/tidak valid/kedaluwarsa, minimal belanja, batas diskon, total tidak negatif, dan validasi server.`
- `/test-skill Uji regresi untuk bug form login yang sudah diperbaiki. Ikuti pola tes di repositori dan jangan mengubah kode produksi.`
- `/test-skill Evaluasi tes yang sudah ada untuk halaman katalog. Laporkan alur penting yang belum tercakup dan tambahkan tes yang layak.`

Lihat `references/testing-checklist.md` dan `references/test-strategy.md` untuk panduan pendukung.
