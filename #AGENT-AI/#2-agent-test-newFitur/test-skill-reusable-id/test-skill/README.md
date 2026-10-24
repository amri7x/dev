# test-skill

Skill reusable untuk merencanakan, menulis, menjalankan, dan mengevaluasi tes perangkat lunak. Seluruh instruksi ditulis dalam bahasa Indonesia.

## Isi paket

- `SKILL.md` — instruksi utama dan alur kerja skill.
- `references/testing-checklist.md` — checklist sebelum, selama, dan setelah pengujian.
- `references/test-strategy.md` — panduan memilih lapisan tes dan contoh matriks fitur kode diskon checkout.

## Penggunaan

Panggil skill di repositori yang ingin diuji, misalnya:

`/test-skill Uji fitur kode diskon checkout dan tambahkan tes regresi mengikuti pola tes yang sudah ada. Jangan ubah kode produksi.`

Skill ini membaca konvensi proyek yang sedang dibuka; jangan menganggap framework atau package manager tertentu sudah terpasang.

## Lokasi pemasangan

Untuk memakai bersama skill lain, letakkan folder `test-skill/` di lokasi skills yang didukung oleh agent yang digunakan, contohnya:

- `.agents/skills/test-skill/` untuk setup Codex/VS Code yang membaca format skill ini.
- `.cline/skills/test-skill/` bila konfigurasi Cline di proyek menggunakan lokasi tersebut.

Periksa dokumentasi versi agent yang digunakan, karena lokasi pemuatan skill dapat berbeda antarproduk dan versi. Jika ingin memakai di beberapa agent, salin folder yang sama ke lokasi masing-masing dan jaga salinannya tetap konsisten.

## Prinsip keselamatan

Secara default skill hanya menambah atau memperbaiki tes, tidak mengubah kode produksi, tidak melemahkan assertion, dan tidak menjalankan tes terhadap sistem produksi. Perubahan kode produksi memerlukan permintaan pengguna yang jelas.
