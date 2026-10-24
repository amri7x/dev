# refactor-skill

Skill reusable untuk merapikan kode pada file yang ditentukan secara eksplisit agar mengikuti konvensi penulisan kode di repositori aktif.

## Instalasi

Salin direktori `refactor-skill/` ke direktori skill yang didukung oleh coding agent yang digunakan. Pastikan `SKILL.md` dan direktori `references/` tetap berada dalam satu paket.

## Penggunaan

```text
/refactor-skill path/ke/file.ts
/refactor-skill path/ke/file-pertama.ts path/ke/file-kedua.ts
/refactor-skill path/ke/file.ts --style-reference path/ke/contoh.ts
```

Skill akan mencari konvensi secara dinamis dari repositori aktif. Tidak ada folder proyek tertentu yang di-hardcode.

## Aturan keselamatan

Hanya file yang secara eksplisit disebut sebagai target yang boleh diubah. File referensi gaya, konfigurasi, pengujian, dokumentasi, lockfile, dan file lain tetap hanya-baca kecuali secara terpisah dimasukkan sebagai target. Refactor harus mempertahankan perilaku runtime dan kontrak publik. Characterisation testing mencakup perilaku kode dan, jika terdampak, web/app behavior melalui browser/E2E atau pemeriksaan manual bila memungkinkan. Jangan menyatakan perilaku browser sudah terverifikasi hanya berdasarkan unit test atau pemeriksaan kode.


## Characterisation test

Sebelum refactor, skill memeriksa test relevan dan menjalankan test sebagai baseline bila memungkinkan. Jika perilaku penting belum terlindungi, skill mengusulkan characterisation test yang merekam perilaku aktual sebelum perubahan.

Batas cakupan tetap berlaku: file test baru atau yang akan diubah tidak boleh ditulis kecuali secara eksplisit ditambahkan sebagai target setelah mendapat izin pengguna. Setelah refactor, jalankan kembali test relevan dan laporkan hasil sebenarnya. Test yang lulus tidak menjamin semua perilaku bebas regresi.
