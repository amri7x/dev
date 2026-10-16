# Panduan Investigasi Project Dev

Gunakan panduan ini sebagai referensi saat tugas memerlukan penelusuran
lebih dalam.

## Urutan investigasi yang disarankan

1.  Baca instruksi repositori dan `PROJECT_MAP.md` jika ada.
2.  Periksa status Git dan diff agar perubahan pengguna terlindungi.
3.  Identifikasi gejala, hasil yang diharapkan, dan langkah reproduksi.
4.  Telusuri jalur kode serta konfigurasi yang relevan; gunakan
    pencarian terarah.
5.  Bandingkan dengan tes yang ada dan cari kasus regresi.
6.  Formulasikan akar masalah berdasarkan bukti.
7.  Pilih perbaikan terkecil dan tentukan verifikasi sebelum mengedit.
8.  Jalankan tes yang sesuai, tinjau diff, lalu laporkan keterbatasan.
9.  Perbarui `PROJECT_MAP.md` hanya jika pemahaman struktur atau
    guardrail proyek berubah.

## Prioritas sumber informasi

Tidak ada satu sumber yang selalu benar untuk semua kasus. Bandingkan
bukti dari: - Perilaku kode aktual. - Tes otomatis dan konfigurasi CI. -
Konfigurasi runtime/build/deployment. - Dokumentasi proyek. - Riwayat
perubahan yang relevan.

Jika sumber bertentangan, jangan diam-diam memilih satu. Catat konflik
dan verifikasi.

## Keamanan operasional

-   Jangan mencetak secret atau file environment sensitif.
-   Hindari tindakan destruktif dan operasi pada produksi tanpa
    otorisasi.
-   Jangan menurunkan validasi atau kontrol keamanan untuk membuat tes
    lolos.
-   Jangan mengubah file yang tidak terkait.
-   Jangan mengklaim sesuatu telah diuji jika belum dijalankan.
