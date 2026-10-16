---
name: refactor-skill
description: Refactor satu atau beberapa file yang ditentukan secara eksplisit agar mengikuti gaya penulisan kode yang sudah digunakan di repositori aktif, dengan mempertahankan perilaku dan membatasi perubahan hanya pada file target. Gunakan saat pengguna meminta standardisasi, perapian, atau penyesuaian gaya kode tanpa perubahan desain besar.
---

# Skill Refactor

Refactor file yang secara eksplisit diberikan pengguna agar mengikuti konvensi yang sudah berlaku di **repositori yang sedang aktif**. Skill ini dapat digunakan kembali pada berbagai repositori, bahasa pemrograman, framework, dan struktur proyek.

## Prinsip utama

1. **Pelajari gaya dari repositori; jangan berasumsi.** Periksa file sumber yang nyata dan representatif sebelum mengedit.
2. **Batasi cakupan dengan ketat.** Hanya file yang disebutkan pengguna untuk pemanggilan ini yang boleh diubah. File referensi dan semua file lainnya hanya boleh dibaca.
3. **Pertahankan perilaku.** Ini adalah refactor, bukan penambahan fitur, perbaikan bug, desain ulang, atau migrasi arsitektur.
4. **Gunakan test sebagai pagar pengaman.** Periksa test yang tersedia dan gunakan atau usulkan characterisation test untuk melindungi perilaku penting sebelum refactor.
5. **Lakukan perubahan sekecil mungkin.** Utamakan perubahan lokal dan terarah daripada penulisan ulang secara luas.
6. **Verifikasi dengan jujur.** Jalankan pemeriksaan yang relevan jika memungkinkan dan laporkan dengan tepat apa yang sudah maupun belum diverifikasi.

## Cara pemanggilan

Contoh penggunaan:

- `/refactor-skill path/ke/file`
- `/refactor-skill path/ke/file-a path/ke/file-b`
- `/refactor-skill path/ke/file --style-reference path/ke/referensi`
- `/refactor-skill path/ke/file --style-references path/ke/referensi-a path/ke/referensi-b`

Anggap semua path yang disebut sebagai target sebagai satu-satunya file yang boleh diubah. Opsi referensi gaya menambahkan contoh yang hanya boleh dibaca; opsi tersebut tidak memberi izin untuk mengedit file referensi. Jika format pemanggilan ambigu, ajukan satu pertanyaan singkat sebelum mengedit.

Jika lingkungan pengguna menggunakan nama skill sebagai perintah pemanggilan, gunakan `/refactor-skill`; jangan mengganti namanya secara diam-diam.

## Alur kerja

### 1. Pastikan repositori dan file target

- Pastikan root repositori aktif dan periksa status working tree.
- Resolusi setiap path target relatif terhadap repositori, kecuali pengguna dengan jelas memberikan path absolut.
- Pastikan setiap target ada dan merupakan file. Jika target tidak ditemukan, ambigu, berada di luar repositori aktif, atau merupakan symlink yang mengarah ke luar repositori, hentikan proses dan minta klarifikasi alih-alih menebak.
- Catat status/diff awal agar perubahan pengguna yang sudah ada tidak dianggap sebagai hasil pekerjaanmu.
- Jangan menimpa, membatalkan, menyimpan sementara, atau mengganggu perubahan pengguna yang sudah ada.
- Jangan otomatis menambah daftar target, meskipun ada file terkait yang tampaknya perlu diubah.

### 2. Temukan gaya penulisan kode yang berlaku

Gunakan urutan prioritas berikut:

1. Path referensi gaya yang diberikan secara eksplisit oleh pengguna.
2. File di modul atau fitur yang sama dan memiliki peran serupa.
3. Contoh yang sudah mapan di bagian lain repositori dengan bahasa, framework, dan lapisan arsitektur yang sama.
4. Instruksi dan konfigurasi tingkat repositori, seperti `AGENTS.md`, konfigurasi formatter/linter, konvensi bahasa, dan panduan kontribusi.

Periksa hanya file secukupnya untuk memahami konvensi yang relevan. Jika memungkinkan, gunakan beberapa contoh representatif. Perhatikan:

- Penamaan dan pengorganisasian file/modul
- Import dan arah dependensi
- Format, spasi, panjang baris, serta gaya tanda kutip
- Ukuran dan pemecahan fungsi/kelas
- Penanganan error dan validasi
- Logging dan komentar
- Tipe, interface, serta konvensi nilai balik
- Pola async, pembersihan resource, dan alur kontrol
- Konvensi pengujian dan mocking jika relevan

Jangan menganggap satu contoh mewakili seluruh codebase jika contoh lain berbeda. Utamakan contoh terdekat yang memiliki peran serupa dan ikuti aturan repositori yang terdokumentasi. Jika gaya benar-benar ambigu dan pilihan tersebut berdampak signifikan pada hasil, tanyakan kepada pengguna sebelum melanjutkan.

Jika gaya yang dapat diandalkan tidak bisa ditentukan, jelaskan ketidakpastiannya dan minta referensi atau lakukan hanya perubahan konsistensi yang tidak kontroversial serta berisiko rendah.

### 3. Periksa perlindungan test sebelum refactor

Sebelum mengedit kode target:

- Cari test yang sudah ada dan relevan dengan fungsi, modul, API, atau alur yang akan direfactor.
- Jalankan test terkait sebelum perubahan jika lingkungan memungkinkan. Catat kegagalan baseline yang sudah terjadi; jangan menganggapnya disebabkan oleh refactor.
- Identifikasi perilaku yang perlu dipertahankan, terutama perilaku yang terlihat dari luar: nilai balik, respons API, efek samping, validasi, penanganan error, urutan operasi, dan aturan akses.
- Gunakan test yang sudah ada jika cakupannya memadai.

**Characterisation test** adalah test yang merekam perilaku aktual sistem yang sudah ada, terutama ketika perilaku tersebut belum terdokumentasi dengan baik. Test ini menjadi pagar pengaman saat struktur internal kode diubah.

Jika cakupan test belum memadai:

1. Tentukan apakah ada perilaku penting atau berisiko yang belum terlindungi.
2. Usulkan characterisation test untuk menangkap perilaku saat ini sebelum refactor.
3. Patuhi batas perubahan: jangan membuat atau mengubah file test yang belum secara eksplisit masuk daftar target.
4. Jika test baru diperlukan, minta izin pengguna untuk menambahkan path file test yang tepat ke daftar target. Setelah diizinkan, buat test dan jalankan sebelum refactor jika memungkinkan, lalu jalankan kembali sesudah refactor.
5. Jika pengguna tidak mengizinkan perluasan target, jangan mengubah file test. Untuk refactor berisiko tinggi atau perilaku yang tidak dapat dipastikan, berhenti dan minta keputusan pengguna. Untuk perubahan berisiko rendah, lanjutkan secara konservatif hanya bila wajar dan jelaskan keterbatasan perlindungan test.

Jangan menganggap semua perilaku aktual sebagai perilaku yang benar. Jika perilaku yang ditemukan tampak seperti bug atau bertentangan dengan kebutuhan yang diketahui, jangan langsung mengabadikannya dalam test; jelaskan ambiguitasnya dan tanyakan apakah perilaku itu harus dipertahankan atau diperbaiki.

Test yang lulus hanya memberi bukti untuk perilaku yang tercakup, bukan jaminan bahwa seluruh perilaku tetap setara.

### 4. Tetapkan batas perubahan yang diizinkan

Sebelum mengedit, tetapkan daftar path target secara persis dan jangan mengubah daftar itu selama tugas berlangsung.

- Hanya path tersebut yang boleh diubah.
- File referensi gaya, konfigurasi, pengujian, lockfile, file hasil generate, dan dokumentasi bersifat hanya-baca kecuali secara eksplisit dimasukkan sebagai target.
- Jangan menjalankan perintah yang otomatis menulis ulang file di luar target, termasuk formatter seluruh repositori, codemod, autofix, atau generator.
- Pemeriksaan mungkin membuat artefak sementara; sedapat mungkin hindari efek samping permanen di luar target dan bersihkan hanya artefak yang dibuat oleh proses ini.
- Jika pemeriksaan yang diperlukan akan mengubah file di luar cakupan, jangan jalankan dalam mode tulis. Pilih mode pemeriksaan saja atau cara lain yang hanya membaca.

### 5. Rencanakan refactor

Identifikasi perbedaan konkret antara setiap target dan gaya yang telah dipelajari. Buat rencana singkat yang berfokus pada gaya dan kemudahan pemeliharaan, misalnya:

- Menyesuaikan penamaan atau struktur agar selaras dengan contoh serupa.
- Menyederhanakan alur kontrol yang terlalu rumit tanpa mengubah hasil.
- Menyelaraskan penanganan error dan validasi dengan pola yang berlaku.
- Mengurangi duplikasi hanya jika ekstraksinya lokal, jelas, dan mempertahankan perilaku.
- Menyesuaikan komentar dan tipe hanya jika meningkatkan konsistensi serta tetap akurat.

Jangan menambahkan fitur, mengubah interface publik, mengganti aturan bisnis, mengubah format data, mengubah perilaku keamanan, atau menambahkan dependensi baru kecuali pengguna secara eksplisit memintanya. Jika perubahan gaya yang diminta tampaknya membutuhkan perubahan perilaku, hentikan dan tanyakan kepada pengguna.

### 6. Edit secara terarah

- Edit hanya file target yang disebutkan secara eksplisit.
- Pertahankan perubahan pengguna yang tidak terkait dan hindari memformat ulang bagian yang tidak perlu.
- Pertahankan API publik, simbol yang diekspor, signature fungsi, efek samping yang dapat diamati, semantik error, dan kompatibilitas kecuali pengguna mengizinkan perubahan tersebut.
- Pertahankan pemeriksaan keamanan, aturan otorisasi, validasi, batas transaksi, dan pembersihan resource.
- Jangan menonaktifkan pengujian, melemahkan aturan lint, atau mengubah konfigurasi hanya agar refactor lolos pemeriksaan.
- Hindari perubahan kosmetik berlebihan yang membuat review lebih sulit daripada manfaatnya.

### 7. Verifikasi hasil

Gunakan pemeriksaan yang paling minim dampak:

1. Periksa diff dan pastikan semua path yang berubah termasuk dalam daftar target yang telah disetujui.
2. Jalankan kembali test yang relevan, termasuk characterisation test baseline, setelah refactor.
3. Tinjau diff untuk mendeteksi perubahan logika yang tidak disengaja, guard yang terhapus, kondisi yang berubah, penanganan error yang berubah, dan pemformatan yang tidak terkait.
4. Jalankan pemeriksaan hanya-baca tambahan atau pengujian terarah yang relevan jika memungkinkan.
5. Jika pengujian atau formatter dapat menulis file, pastikan terlebih dahulu bahwa file di luar target tidak akan berubah.
6. Periksa kembali status repositori setelah verifikasi.

Jika pemeriksaan gagal, bedakan kegagalan yang disebabkan refactor dari kegagalan yang sudah ada atau masalah lingkungan. Jangan pernah menyatakan pengujian, lint, pemeriksaan tipe, atau build berhasil jika proses itu tidak benar-benar dijalankan dan sukses.

Jika perbaikan yang diperlukan mengharuskan perubahan pada file yang tidak terdaftar sebagai target, jangan mengubahnya. Laporkan masalahnya dan minta pengguna menambahkan file tersebut ke daftar target jika memang ingin file itu diubah.

### 8. Laporkan hasil

Ringkas:

- File target yang diubah.
- Konvensi gaya utama yang diterapkan.
- Perilaku penting yang dilindungi oleh test.
- Test yang dijalankan sebelum dan sesudah refactor beserta hasil sebenarnya.
- Test yang belum tersedia atau cakupan yang masih terbatas.
- Pemeriksaan yang dijalankan beserta hasil sebenarnya.
- Ambiguitas, risiko, atau tindak lanjut yang masih memerlukan file target tambahan.

Sampaikan secara ringkas. Jangan mengklaim kesetaraan perilaku secara penuh hanya karena pengujian berhasil.

## Hentikan proses dan tanyakan sebelum mengedit jika

- File target tidak dapat ditentukan dengan yakin.
- Target berada di luar repositori aktif atau symlink-nya mengarah ke luar repositori.
- Tidak ada referensi gaya yang dapat diandalkan dan gaya yang diharapkan tidak bisa disimpulkan dengan aman.
- Pengguna meminta aturan gaya yang saling bertentangan.
- Refactor yang diminta membutuhkan perubahan file di luar daftar target.
- Perubahan yang tampak hanya berkaitan dengan gaya ternyata akan mengubah perilaku saat runtime atau kontrak publik.

## Referensi

Untuk daftar periksa ringkas saat menjalankan skill, baca `references/refactor-checklist.md`.
