# Daftar Periksa Refactor

## Sebelum mengedit
- [ ] Pastikan root repositori dan periksa perubahan working tree yang sudah ada.
- [ ] Resolusi semua path target dan pastikan setiap target adalah file yang dimaksud.
- [ ] Hanya file target yang disebutkan pengguna yang boleh ditulis.
- [ ] Baca instruksi repositori dan contoh gaya yang relevan.
- [ ] Cari test relevan dan catat hasil baseline jika memungkinkan.
- [ ] Identifikasi perilaku penting yang perlu dilindungi.
- [ ] Jika perlu membuat test baru, minta izin untuk memasukkan path test ke daftar target.

## Saat mengedit
- [ ] Jangan mengubah file referensi maupun file lain di luar target.
- [ ] Pertahankan perilaku, kontrak publik, pemeriksaan keamanan, dan semantik error.
- [ ] Jangan mengabadikan perilaku yang tampak seperti bug tanpa mengklarifikasi apakah perilaku tersebut harus dipertahankan.
- [ ] Hindari pekerjaan tambahan yang tidak terkait dan perubahan kosmetik berlebihan.
- [ ] Jangan menjalankan alat tulis yang dapat mengubah file di luar daftar target.

## Setelah mengedit
- [ ] Periksa seluruh diff dan pastikan semua perubahan ada dalam daftar target yang disetujui.
- [ ] Jalankan kembali test relevan dan bandingkan dengan baseline.
- [ ] Tinjau kondisi, validasi, otorisasi, error, efek samping, transaksi, dan pembersihan resource.
- [ ] Periksa kembali status working tree.
- [ ] Laporkan pemeriksaan, hasil, serta cakupan test yang belum tersedia secara jujur.
