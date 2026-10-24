# Checklist Pengujian

Gunakan sebagai panduan selektif. Centang hanya hal yang relevan dengan fitur dan risiko yang sedang diuji.

## Sebelum menulis tes

- [ ] Persyaratan atau perilaku yang diharapkan sudah ditemukan atau asumsi telah dicatat.
- [ ] Instruksi proyek, manifest, scripts, framework, dan pola tes terdekat telah diperiksa.
- [ ] Cakupan file yang boleh diubah jelas.
- [ ] Dampak ke alur pengguna, API, data, autentikasi, dan izin akses telah dipertimbangkan.
- [ ] Lingkungan tes tidak terhubung ke data atau layanan produksi.

## Kasus perilaku

- [ ] Alur normal berhasil.
- [ ] Input kosong/tidak valid ditangani dengan benar.
- [ ] Nilai batas dan kasus ekstrem yang relevan diperiksa.
- [ ] Error, timeout, atau kegagalan layanan ditangani bila relevan.
- [ ] Loading, empty, success, dan error state UI diperiksa bila relevan.
- [ ] Submit berulang, klik ganda, atau perubahan state diperiksa bila relevan.
- [ ] Akses yang tidak sah atau role yang tidak sesuai ditolak bila relevan.
- [ ] Bug yang dilaporkan memiliki tes regresi.
- [ ] Efek samping dan konsistensi data diperiksa sesuai risiko.

## Kualitas tes

- [ ] Nama tes menyebut kondisi dan hasil yang diharapkan.
- [ ] Assertion memeriksa hasil/kontrak penting, bukan detail implementasi yang rapuh.
- [ ] Fixture deterministik, cleanup jelas, dan tes dapat diulang.
- [ ] Mock ditempatkan pada batas eksternal yang tepat.
- [ ] Tes mengikuti konvensi folder, penamaan, dan framework yang telah digunakan proyek.
- [ ] Tidak ada assertion yang dilemahkan atau tes yang dilewati hanya agar suite lulus.

## Verifikasi

- [ ] Tes terkait dijalankan sampai selesai.
- [ ] Tes integration/browser relevan dijalankan jika tersedia dan layak.
- [ ] Lint, type-check, atau build dilaporkan terpisah dari tes.
- [ ] Diff diperiksa dan tidak ada perubahan produksi yang tidak diminta.
- [ ] Tidak ada kredensial, secret, atau data nyata di fixture/log.
- [ ] Tes yang gagal, tidak dapat dijalankan, dan belum diuji ditulis eksplisit.
- [ ] Kesimpulan akhir sesuai bukti aktual, tanpa klaim cakupan penuh yang belum dibuktikan.
