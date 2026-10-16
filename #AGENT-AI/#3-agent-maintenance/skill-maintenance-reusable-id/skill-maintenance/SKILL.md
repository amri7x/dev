---
name: skill-maintenance
description: Mengevaluasi dan mengembangkan agent-skill secara terkontrol berdasarkan pengalaman penggunaan, hasil evaluasi, dan pola yang terbukti berguna. Mengusulkan perubahan terlebih dahulu dan tidak mengubah skill tanpa persetujuan pengguna.
---

# Skill Maintenance

Skill ini membantu mengevaluasi, memperbaiki, dan mengembangkan agent-skill yang sudah ada agar semakin jelas, aman, konsisten, dan berguna lintas project.

Gunakan skill ini setelah menyelesaikan project, setelah menemukan masalah berulang saat memakai skill, atau ketika pengguna meminta audit maupun peningkatan skill.

## Prinsip utama

1. **Perbaikan berdasarkan bukti.** Bedakan masalah yang benar-benar ditemukan dari dugaan atau preferensi yang belum dikonfirmasi.
2. **Usulan dahulu, perubahan kemudian.** Jangan mengubah file skill sebelum pengguna menyetujui usulan yang spesifik.
3. **Pisahkan aturan umum dan aturan khusus project.** Jangan memasukkan detail arsitektur, path, rahasia, kredensial, atau konfigurasi khusus project ke skill reusable.
4. **Pertahankan tujuan asli skill.** Hindari memperluas cakupan secara berlebihan atau membuat dua skill saling bertentangan.
5. **Bahasa Indonesia sebagai default.** Tulis instruksi, penjelasan, dan dokumentasi skill dalam bahasa Indonesia, kecuali pengguna meminta bahasa lain. Pertahankan istilah teknis, nama perintah, nama file, identifier, dan sintaks yang memang harus tetap persis.
6. **Perubahan minimal dan dapat ditinjau.** Usulkan patch sekecil mungkin yang menyelesaikan masalah.
7. **Jujur tentang validasi.** Jangan mengklaim perubahan sudah diuji jika belum benar-benar diperiksa.

## Cara pemanggilan

Contoh:

- `/skill-maintenance`
- `/skill-maintenance skill-a/SKILL.md skill-b/SKILL.md`
- `/skill-maintenance --evaluate-after-project`
- `/skill-maintenance --audit`

Jika tidak ada path yang diberikan, temukan skill yang relevan dari konteks kerja aktif atau lokasi skill yang diketahui. Jangan menebak lokasi atau mengedit file yang belum dapat ditemukan. Jika tidak ada bukti penggunaan atau umpan balik yang tersedia, lakukan audit statis dan jelaskan keterbatasannya.

## Alur kerja

### 1. Tentukan sasaran evaluasi

- Identifikasi skill yang ingin dievaluasi dan lokasi file instruksinya.
- Jika pengguna menyebut skill tertentu, fokus pada skill tersebut; jangan mengaudit seluruh koleksi tanpa alasan.
- Baca `SKILL.md` beserta referensi yang dirujuknya jika tersedia.
- Cari masukan yang tersedia: kegagalan berulang, koreksi pengguna, hasil kerja, checklist, atau contoh penggunaan.
- Jangan mengklaim memiliki riwayat penggunaan yang tidak tersedia dalam konteks atau catatan yang dapat diakses.

### 2. Kumpulkan dan klasifikasikan temuan

Kelompokkan temuan menjadi:

- **Masalah teramati:** instruksi ambigu, langkah terlewat, batasan dilanggar, atau hasil yang perlu diperbaiki.
- **Peningkatan terdukung:** pola yang berulang kali terbukti efektif.
- **Preferensi pengguna:** aturan yang secara eksplisit diinginkan pengguna.
- **Saran spekulatif:** ide yang belum memiliki bukti cukup.

Jangan mengubah saran spekulatif menjadi aturan wajib. Jika bukti tidak cukup, tandai sebagai pertanyaan atau eksperimen opsional.

### 3. Pisahkan informasi berdasarkan tempatnya

Gunakan prinsip berikut:

- **Skill reusable:** aturan yang berguna lintas repository dan tugas.
- **Dokumentasi project:** struktur folder, arsitektur, perintah build/test, keputusan teknis, dan konvensi khusus satu repository.
- **Preferensi pengguna:** standar kerja atau coding style yang ingin digunakan kembali, selama cocok dengan kebutuhan teknis.
- **Catatan evaluasi:** temuan sementara yang belum layak menjadi instruksi permanen.

Jangan menyalin rahasia, token, kredensial, data pribadi, isi file sensitif, atau detail internal yang tidak diperlukan ke dalam skill.

### 4. Periksa konflik dan dampak

Sebelum mengusulkan perubahan:

- Pastikan perubahan tidak bertentangan dengan tujuan utama skill.
- Periksa apakah aturan baru menduplikasi atau bertentangan dengan skill lain.
- Pertimbangkan dampak pada kompatibilitas, keselamatan, batas cakupan, dan penggunaan lintas project.
- Pertahankan nama skill dan perintah pemanggilan kecuali pengguna meminta perubahan.
- Jangan mengubah bahasa default dari bahasa Indonesia tanpa instruksi pengguna.
- Jangan memasukkan aturan project tertentu ke skill reusable hanya karena aturan itu muncul pada satu project.

### 5. Sajikan usulan sebelum mengedit

Tampilkan:

1. Temuan dan bukti pendukung.
2. Skill serta bagian yang terdampak.
3. Perubahan yang diusulkan.
4. Alasan dan manfaat yang diharapkan.
5. Risiko, trade-off, dan potensi konflik.
6. Patch/diff atau teks revisi yang dapat ditinjau.

Minta persetujuan pengguna sebelum menerapkan perubahan. Persetujuan harus cukup jelas untuk mengidentifikasi usulan yang disetujui. Jika pengguna menyetujui hanya sebagian, terapkan hanya bagian tersebut.

### 6. Terapkan perubahan setelah disetujui

- Ubah hanya file skill dan referensi yang termasuk dalam usulan yang disetujui.
- Pertahankan bagian yang tidak terkait.
- Jangan mengedit file project aktif kecuali pengguna secara eksplisit memasukkannya ke dalam cakupan perubahan.
- Jangan menghapus aturan keselamatan atau melemahkan batasan hanya untuk membuat instruksi lebih ringkas.
- Jika diperlukan perubahan tambahan di luar usulan, berhenti dan minta persetujuan baru.
- Jika memungkinkan, simpan perubahan melalui version control atau berikan diff agar pengguna dapat meninjau dan membatalkannya.

### 7. Validasi hasil

- Periksa format dan struktur file skill.
- Pastikan nama, deskripsi, cara pemanggilan, serta referensi konsisten.
- Pastikan semua path referensi yang disebutkan benar-benar ada.
- Periksa instruksi yang saling bertentangan, duplikasi, dan batasan yang tidak jelas.
- Pastikan perubahan hanya menyentuh file yang disetujui.
- Laporkan pemeriksaan yang benar-benar dilakukan dan hal yang belum dapat diverifikasi.

### 8. Laporkan hasil

Ringkas:

- Skill yang dievaluasi.
- Temuan paling penting.
- Perubahan yang diusulkan atau sudah disetujui dan diterapkan.
- File yang berubah.
- Pemeriksaan yang dilakukan.
- Hal yang masih memerlukan keputusan pengguna.

Jangan menyatakan skill akan belajar otomatis dari penggunaan. Perubahan permanen hanya terjadi ketika instruksi, referensi, atau mekanisme pencatatan memang diperbarui.

## Mode audit

Jika pengguna meminta audit saja, jangan mengedit file. Laporkan masalah dan rekomendasi berdasarkan prioritas:

- **Tinggi:** risiko keselamatan, pelanggaran batas perubahan, instruksi yang berpotensi merusak data, atau klaim verifikasi yang menyesatkan.
- **Sedang:** ambiguitas berulang, konflik instruksi, atau kesulitan penggunaan lintas project.
- **Rendah:** perbaikan redaksi, pengorganisasian, dan pengurangan duplikasi.

## Referensi

Gunakan `references/evaluation-checklist.md` untuk daftar periksa evaluasi dan peningkatan skill.
