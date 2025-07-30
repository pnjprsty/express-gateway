# Express Gateway
[![GitHub](https://img.shields.io/github/license/express-gateway/express-gateway.svg)](https://github.com/express-gateway/express-gateway)
[![GitHub](https://img.shields.io/github/forks/express-gateway/express-gateway.svg)](https://github.com/express-gateway/express-gateway/fork)
[![GitHub](https://img.shields.io/github/stars/express-gateway/express-gateway.svg)](https://github.com/express-gateway/express-gateway/stargazers)

## Deskripsi
Proyek ini adalah contoh implementasi Express Gateway sebagai API Gateway untuk mengatur trafik API.

## Fitur
* Menggunakan Express.js sebagai framework utama
* Menggunakan http-proxy-middleware untuk mengatur routing
* Menggunakan express-rate-limit untuk mengatur limit request

## Instalasi
1. Clone repository ini
2. Jalankan perintah `npm install` untuk menginstal dependencies
3. Jalankan perintah `node gateway.js` untuk menjalankan gateway

## Konfigurasi
Konfigurasi routing dapat dilihat di file `./config/routes.js`. Anda dapat menambahkan atau mengubah routing sesuai dengan kebutuhan.

## Contoh Penggunaan
* Jalankan perintah `curl http://localhost:3000/api/user` untuk mengakses API user
* Jalankan perintah `curl http://localhost:3000/api/product` untuk mengakses API product

## Middleware
* Rate Limiting: Menggunakan express-rate-limit untuk mengatur limit request
* Proxy: Menggunakan http-proxy-middleware untuk mengatur routing

## Dependensi
* express: ^5.1.0
* http-proxy-middleware: ^3.0.5

## Lisensi
Proyek ini dilisensikan di bawah lisensi ISC. Lihat file `LICENSE` untuk detail.

## Kontribusi
Silakan kontribusikan pada proyek ini dengan membuat pull request atau melaporkan issue.

## Acknowledgement
Terima kasih kepada semua kontributor dan pendukung proyek ini.

## Cara Berkontribusi
1. Fork repository ini
2. Buat branch baru untuk perubahan Anda
3. Buat perubahan dan commit
4. Buat pull request ke branch utama

## Code of Conduct
Lihat file `CODE_OF_CONDUCT.md` untuk detail.

## Security Policy
Lihat file `SECURITY.md` untuk detail.

## Changelog
Lihat file `CHANGELOG.md` untuk detail perubahan.

## FAQ
* Q: Bagaimana cara menginstal proyek ini?
A: Jalankan perintah `npm install`
* Q: Bagaimana cara menjalankan proyek ini?
A: Jalankan perintah `node gateway.js`