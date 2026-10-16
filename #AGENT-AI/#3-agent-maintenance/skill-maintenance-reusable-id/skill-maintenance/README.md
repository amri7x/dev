# skill-maintenance

Skill reusable untuk mengevaluasi dan meningkatkan agent-skill berdasarkan pengalaman penggunaan dan bukti yang tersedia.

## Instalasi

Salin direktori `skill-maintenance/` ke direktori skill yang didukung oleh coding agent. Pertahankan `SKILL.md` dan direktori `references/` dalam satu paket.

## Penggunaan

```text
/skill-maintenance
/skill-maintenance path/ke/SKILL.md
/skill-maintenance --audit

contoh :

/skill-maintenance

Evaluasi penggunaan /project-dev dan /refactor-skill pada project ini.

Identifikasi:
1. Masalah atau keterbatasan yang benar-benar ditemukan.
2. Pola kerja yang terbukti efektif dan bisa digunakan ulang.
3. Perbaikan yang relevan untuk semua project.
4. Aturan yang seharusnya tetap khusus untuk project ini.

Ajukan perubahan dalam bahasa Indonesia. Tampilkan alasan, dampak, dan patch yang diusulkan. Jangan mengubah file skill sebelum saya menyetujuinya.
```

Skill ini mengusulkan perubahan terlebih dahulu dan meminta persetujuan sebelum mengedit. Jika tidak tersedia riwayat penggunaan, skill hanya melakukan evaluasi berdasarkan file dan bukti yang bisa diakses.

## Prinsip penting

Skill tidak berkembang otomatis hanya karena sering dipakai. Perbaikan permanen memerlukan pembaruan instruksi atau referensi yang ditinjau dan disetujui.
