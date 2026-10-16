---
description: Skill development lintas-repositori untuk memperbaiki bug,
  melakukan code review, dan maintenance dengan aman berdasarkan
  inspeksi serta dokumentasi proyek yang sedang aktif. Gunakan saat
  pengguna memanggil /project-dev dengan masalah teknis atau meminta
  pemeriksaan kode.
name: project-dev
---

# Project Dev

## Tujuan

Bekerja secara aman pada repositori apa pun tanpa mengasumsikan
framework, struktur direktori, atau arsitektur tertentu. Gunakan
dokumentasi proyek sebagai peta awal, verifikasi terhadap kode aktual,
dan lakukan perubahan sekecil mungkin untuk menyelesaikan tugas.

## Cara pemanggilan

`/project-dev <penjelasan masalah atau tugas>`

Contoh: -
`/project-dev Login gagal setelah sesi kedaluwarsa. Cari akar masalah dan perbaiki dengan tes regresi.` -
`/project-dev Tinjau perubahan ini untuk bug, risiko keamanan, dan regresi.` -
`/project-dev Build gagal setelah perubahan dependency. Diagnosis dan perbaiki tanpa upgrade paket yang tidak diperlukan.`

Jika masalah belum cukup jelas, ajukan satu pertanyaan terpenting
sebelum melakukan perubahan berisiko.

## Prosedur wajib

### 1. Kenali repositori dan instruksi yang berlaku

-   Pastikan direktori kerja/repositori yang sedang aktif.
-   Baca instruksi agent dan dokumentasi relevan yang ada, misalnya
    `AGENTS.md`, `README.md`, panduan kontribusi, atau padanannya.
-   Periksa status Git dan diff sebelum mengedit. Jangan menghapus atau
    menimpa perubahan pengguna yang tidak terkait.
-   Identifikasi manifest dan lockfile, konfigurasi
    runtime/build/test/lint, CI, entry point, serta tes relevan.
-   Jangan mengasumsikan nama file, framework, perintah, atau tool
    tertentu pasti tersedia.

### 2. Gunakan PROJECT_MAP.md

Cari `PROJECT_MAP.md` di root repositori.

**Jika file tersedia:** - Baca bagian yang relevan dengan masalah. -
Verifikasi file dan hubungan modul yang akan disentuh terhadap kode
aktual. - Jangan memperlakukan peta sebagai sumber kebenaran mutlak;
kode, konfigurasi, dan tes aktual dapat menunjukkan bahwa dokumentasi
sudah kedaluwarsa. - Perbarui peta hanya bila ada perubahan struktur
atau pengetahuan penting yang benar-benar perlu dicatat.

**Jika file tidak tersedia:** - Buat peta awal berdasarkan inspeksi yang
terarah. - Gunakan format di `references/project-map-template.md`. -
Simpan sebagai `PROJECT_MAP.md` di root repositori hanya jika direktori
kerja memang repositori proyek dan penulisan dokumentasi diizinkan. -
Jangan memasukkan secret, token, password, data pribadi, atau isi file
environment yang sensitif. - Jika pembuatan file permanen tidak sesuai
lingkup tugas atau tidak diizinkan, lakukan inspeksi tanpa menulis file
dan jelaskan bahwa peta belum disimpan.

Jangan membuat inventaris seluruh file tanpa kebutuhan. Peta harus
ringkas dan menonjolkan struktur, alur, serta area yang membantu
pekerjaan pemeliharaan.

### 3. Tangkap guardrail khusus proyek

Cari bukti dari kode, dokumentasi, manifest, lockfile, konfigurasi, dan
tes mengenai:

-   Arsitektur dan batas antarmodul.
-   Runtime, versi minimum, dan batasan platform/deployment.
-   Dependency yang dikunci dan kompatibilitas.
-   Autentikasi, otorisasi, routing, validasi input, pengelolaan sesi,
    dan kontrol keamanan lain yang relevan.
-   Skema data, migrasi, kontrak API, dan kompatibilitas mundur.
-   Perintah pengujian, build, lint, type-check, dan CI yang benar-benar
    tersedia.
-   File generated, konfigurasi produksi, atau area berisiko tinggi.
-   Konvensi kode dan pola error handling yang digunakan proyek.

Bedakan fakta yang terbukti, dugaan, dan hal yang belum diverifikasi.
Jangan mengubah rekomendasi umum menjadi larangan khusus proyek tanpa
bukti.

### 4. Diagnosis masalah

-   Rumuskan perilaku yang diharapkan dan perilaku aktual.
-   Telusuri alur kode yang relevan dan reproduksi masalah jika aman
    serta memungkinkan.
-   Gunakan log dan tes sebagai bukti; hindari mengekspos secret atau
    data pribadi.
-   Uji hipotesis untuk menemukan akar masalah, bukan hanya menutupi
    gejala.
-   Minta informasi tambahan jika bukti tidak cukup untuk memilih solusi
    dengan aman.

Jangan menjalankan operasi destruktif, menghapus data, mengubah layanan
produksi, atau menyentuh sistem eksternal tanpa kebutuhan dan otorisasi
yang sesuai.

### 5. Rencanakan dan terapkan perubahan minimal

Sebelum mengedit, pahami file terdampak, risiko regresi, kontrak modul,
dan tes yang relevan.

-   Ikuti pola proyek yang sudah ada.
-   Ubah hanya bagian yang diperlukan untuk menyelesaikan masalah.
-   Hindari dependency baru, upgrade versi, refactor luas, atau
    perubahan format massal jika tidak dibutuhkan.
-   Jangan menonaktifkan tes, validasi, autentikasi, atau kontrol
    keamanan untuk membuat hasil terlihat berhasil.
-   Jangan mengubah kontrak API, skema data, atau konfigurasi deployment
    tanpa menilai dampaknya.
-   Untuk tindakan yang sulit dibatalkan, minta konfirmasi jika
    otorisasi atau dampaknya tidak jelas.
-   Jangan melakukan reset, clean, rebase, atau operasi destruktif lain
    tanpa izin yang jelas.

### 6. Verifikasi

Gunakan perintah yang ditemukan dalam dokumentasi atau konfigurasi
proyek. Pilih pemeriksaan sesuai perubahan, misalnya:

1.  Tes terarah untuk kasus yang gagal.
2.  Tes regresi terkait.
3.  Lint, type-check, build, atau pemeriksaan statis yang tersedia.
4.  Pemeriksaan keamanan yang relevan.
5.  Pemeriksaan akhir diff untuk menemukan perubahan tak disengaja,
    secret, debug code, atau artefak yang tidak semestinya.

Jangan mengklaim tes berhasil jika tidak dijalankan. Jika tes tidak
dapat dijalankan, jelaskan alasannya dan risiko yang belum
terverifikasi. Pisahkan kegagalan akibat perubahan dari kegagalan
lingkungan atau layanan eksternal.

### 7. Perbarui PROJECT_MAP.md

Perbarui peta setelah perubahan yang memengaruhi struktur direktori,
tanggung jawab modul, alur penting, perintah pengujian, atau guardrail
yang terdokumentasi.

-   Jaga agar peta singkat dan faktual.
-   Jangan memperbarui peta untuk perubahan kecil yang tidak mengubah
    pemahaman arsitektur.
-   Jangan menyalin seluruh file tree atau memasukkan file
    sementara/build/dependency yang bising.
-   Jika peta tidak dapat diverifikasi sepenuhnya, tandai bagian
    tersebut sebagai belum diverifikasi alih-alih menebak.

### 8. Laporkan hasil

Sampaikan: - **Temuan:** akar masalah atau risiko dan tingkat
kepastiannya. - **Perubahan:** file/area yang diubah beserta alasan. -
**Verifikasi:** perintah yang benar-benar dijalankan dan hasilnya. -
**Peta proyek:** apakah `PROJECT_MAP.md` dibuat, diperbarui, atau tidak
diubah. - **Sisa risiko:** pengujian atau kondisi yang belum
terverifikasi.

Untuk code review, prioritaskan temuan berdasarkan tingkat dampak,
sertakan lokasi spesifik bila tersedia, dan jangan mengubah kode kecuali
diminta.

## Mode kerja

-   **Perbaikan bug:** reproduksi → diagnosis → perubahan minimal → tes
    regresi.
-   **Code review:** analisis diff dan konteks → temuan konkret
    berprioritas → saran; tidak mengedit kecuali diminta.
-   **Maintenance:** evaluasi kompatibilitas dan dampak → perubahan
    terbatas → verifikasi.
-   **Inspeksi keamanan:** telusuri batas kepercayaan dan alur data;
    bedakan temuan terbukti dari hipotesis. Jangan menguji sistem
    produksi/eksternal tanpa izin.

## Batasan

-   Ikuti instruksi repositori dan kebijakan lingkungan yang berlaku.
-   Jangan membawa asumsi atau catatan khusus dari repositori lain.
-   Jangan menyimpan secret atau data sensitif dalam dokumentasi.
-   Jangan membuat perubahan permanen di luar lingkup tugas tanpa alasan
    yang jelas.
-   Jika dokumentasi bertentangan dengan kode atau tes, investigasi
    konflik sebelum mengambil keputusan.
