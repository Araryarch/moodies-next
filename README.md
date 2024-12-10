# Moodies

Moodies adalah template chatbot modern berbasis **Next.js 15** yang dirancang untuk memberikan pengalaman interaksi yang cepat dan responsif. Dengan dukungan teknologi terkini, Moodies cocok untuk membangun chatbot atau aplikasi interaktif lainnya.

## Tech Stack

Moodies dibangun menggunakan teknologi berikut:

- **[Next.js 15.0.4](https://nextjs.org/)**: Framework React dengan fitur Server Components dan App Router.
- **[ShadCN UI](https://ui.shadcn.dev/)**: Komponen UI elegan yang dapat disesuaikan.
- **[Framer Motion](https://www.framer.com/motion/)**: Animasi tingkat lanjut untuk pengalaman pengguna yang halus.
- **[Bun.js](https://bun.sh/)**: Runtime JavaScript yang cepat.
- **[Prisma ORM](https://www.prisma.io/)**: ORM modern untuk pengelolaan database yang efisien.
- **[Supabase](https://supabase.com/)**: Backend-as-a-Service untuk autentikasi, database, dan lainnya.

## Fitur Utama

- **Integrasi Komponen UI**: Komponen yang disesuaikan untuk kebutuhan chatbot modern.
- **Animasi Interaktif**: Transisi dan animasi yang hidup berkat Framer Motion.
- **Performa Cepat**: Didukung oleh Bun.js dan Next.js untuk performa optimal.
- **Database Modern**: Menggunakan Prisma ORM dengan backend Supabase.
- **Pengembangan Fleksibel**: Mudah diperluas dan disesuaikan dengan kebutuhan.

## Prasyarat

Pastikan Anda telah menginstal:

- **Node.js** (dengan Bun.js sebagai runtime)
- **Bun.js**: [Panduan Instalasi](https://bun.sh/)
- **Database**: Pastikan Anda memiliki Supabase atau database lain yang dikonfigurasi.

## Instalasi

1. Clone repositori:

   ```bash
   git clone https://github.com/Araryarch/moodies-next.git
   cd moodies-next
   ```

2. Instal dependensi menggunakan Bun.js:

   ```bash
   bun install
   ```

3. Konfigurasi environment:
   Buat file `.env` di root proyek Anda dan tambahkan variabel berikut:

   ```
   DATABASE_URL=your_supabase_database_url
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Migrasi database:

   ```bash
   npx prisma migrate dev
   ```

5. Jalankan aplikasi:

   ```bash
   bun dev
   ```

6. Akses aplikasi di `http://localhost:3000`.

## Struktur Proyek

```plaintext
moodies-next/
├── prisma/         # Skema database
├── public/         # File statis
├── src/
│   ├── app/        # Routing berbasis App Router Next.js
│   ├── components/ # Komponen UI
│   ├── lib/        # Helper dan utilitas
│   ├── styles/     # Gaya global
│   └── types/      # Tipe TypeScript
├── .env            # Variabel lingkungan
└── ...
```

## Kontribusi

Kontribusi sangat diterima! Silakan buka issue atau buat pull request jika Anda memiliki ide atau perbaikan.

## Lisensi

Proyek ini dilisensikan di bawah lisensi **MIT**. Lihat [LICENSE](./LICENSE) untuk informasi lebih lanjut.
