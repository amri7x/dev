# Panduan Memilih Strategi Tes

## 1. Pilih lapisan berdasarkan bukti yang dibutuhkan

| Pertanyaan | Lapisan yang biasanya sesuai | Contoh |
|---|---|---|
| Apakah aturan/perhitungan benar? | Unit | Menghitung diskon atau memvalidasi input |
| Apakah beberapa modul bekerja bersama? | Integration | Service memanggil database test atau API mock |
| Apakah interaksi dan status UI benar? | Component/UI | Form menampilkan error dan hasil submit |
| Apakah alur penting berfungsi dari awal sampai akhir? | Browser/E2E | Pengguna memilih barang lalu menyelesaikan checkout sandbox |
| Apakah perilaku visual atau perangkat membutuhkan pengamatan langsung? | Manual check | Memeriksa responsivitas di perangkat yang tersedia |

Pilih lapisan termurah yang cukup kuat membuktikan perilaku. Naikkan lapisan tes bila risiko integrasi, navigasi, rendering, autentikasi, atau browser memang perlu dibuktikan.

## 2. Contoh matriks: kode diskon checkout

Sesuaikan aturan bisnis dan penamaan berdasarkan proyek; jangan menganggap contoh ini sebagai spesifikasi otomatis.

| Area | Contoh kondisi | Hasil yang perlu diverifikasi |
|---|---|---|
| Keberhasilan | Kode aktif dan memenuhi syarat | Diskon dan total dihitung sesuai aturan |
| Penolakan | Kode tidak dikenal, salah format, atau kedaluwarsa | Kode ditolak dengan hasil/pesan yang sesuai |
| Syarat pembelian | Belanja di bawah dan tepat di batas minimum | Syarat diterapkan konsisten pada batasnya |
| Batas diskon | Diskon melebihi nilai barang atau memiliki cap maksimum | Nilai diskon dibatasi sesuai aturan dan total tidak negatif |
| Perubahan keranjang | Jumlah barang atau subtotal berubah setelah kode diterapkan | Kelayakan dan total dihitung ulang dengan konsisten |
| Pengulangan | Tombol tertekan dua kali atau kode diterapkan ulang | Diskon tidak dihitung ganda tanpa aturan yang membolehkan |
| Kegagalan integrasi | Validasi kode/API gagal atau timeout | Error ditangani; total tidak berubah secara keliru |
| Keamanan | Payload dimanipulasi atau frontend dilewati | Server memvalidasi kode, syarat, diskon, dan total akhir |
| Checkout | Harga atau kuantitas berubah sebelum pembayaran | Total akhir divalidasi ulang di sisi server |

### Pembagian lapisan yang mungkin

- **Unit:** aturan diskon, minimum belanja, cap, rounding, dan perhitungan total.
- **Integration:** endpoint validasi kode, akses database test, aturan tanggal/status, serta validasi total di server.
- **UI/component:** memasukkan kode, menampilkan status, mencegah hasil lama menimpa hasil baru, dan memperbarui ringkasan pembayaran.
- **E2E:** satu atau dua alur checkout bernilai tinggi menggunakan sandbox/test data, jika infrastruktur tersedia.

Jangan hanya menguji tampilan diskon di frontend. Harga, kelayakan, dan total yang dipercaya untuk transaksi harus divalidasi server-side.

## 3. Saat tes gagal

1. Simpan pesan error, nama tes, perintah, dan kondisi reproduksi.
2. Pastikan apakah perilaku yang diharapkan benar-benar didukung oleh spesifikasi atau kontrak proyek.
3. Periksa apakah penyebabnya ada pada kode, asumsi tes, fixture, urutan tes, dependency, atau lingkungan.
4. Hindari retry berkali-kali tanpa hipotesis baru.
5. Jika tugas hanya menguji, jangan langsung mengubah kode produksi. Laporkan temuan dan usulkan perbaikan terpisah.
6. Jika pengguna juga meminta perbaikan, catat hasil sebelum perbaikan bila tersedia, lakukan perubahan yang relevan, lalu jalankan tes yang sama kembali.

## 4. Cara menyampaikan hasil

Contoh format laporan:

```text
Cakupan
- Perhitungan diskon: unit test
- Validasi endpoint: integration test
- Alur checkout browser: belum dapat dijalankan karena environment E2E tidak tersedia

Perubahan
- Dibuat/diubah: path file test yang relevan

Verifikasi
- `perintah-yang-benar-benar-dijalankan`: lulus/gagal, jumlah tes bila tersedia
- `perintah-lain`: tidak dapat dijalankan — alasan yang teramati

Temuan dan batasan
- Temuan utama dengan langkah reproduksi
- Area yang belum diuji
```

Ganti placeholder dengan informasi aktual. Jangan menampilkan contoh perintah atau jumlah tes seolah-olah benar-benar dijalankan.
