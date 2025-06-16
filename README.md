# Dental Clinic Website

Website phòng khám nha khoa được xây dựng với React, Vite, TypeScript, Tailwind CSS và React Router DOM.

## Tính năng

- Trang chủ với thông tin tổng quan về phòng khám
- Trang dịch vụ hiển thị các dịch vụ nha khoa
- Trang bác sĩ giới thiệu đội ngũ bác sĩ
- Trang liên hệ với form liên hệ
- Trang đặt lịch hẹn với form đặt lịch
- Responsive design cho mobile và desktop
- Tông màu xanh dương chủ đạo
- UI/UX hiện đại và thân thiện

## Yêu cầu hệ thống

- Node.js 18.0.0 trở lên
- npm 9.0.0 trở lên

## Cài đặt

1. Clone repository:
```bash
git clone https://github.com/your-username/dental-clinic.git
cd dental-clinic
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Build cho production:
```bash
npm run build
```

5. Preview bản build:
```bash
npm run preview
```

## Cấu trúc thư mục

```
dental-clinic/
├── public/              # Static files
│   ├── doctors/        # Hình ảnh bác sĩ
│   └── hero-image.jpg  # Hình ảnh hero
├── src/
│   ├── layouts/        # Layout components
│   ├── pages/          # Page components
│   ├── App.tsx         # App component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── tailwind.config.js  # Tailwind CSS config
└── README.md           # Documentation
```

## Công nghệ sử dụng

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React Router DOM](https://reactrouter.com/) - Routing
- [Heroicons](https://heroicons.com/) - Icons

## Hình ảnh

Bạn cần thay thế các file hình ảnh mẫu trong thư mục `public/` bằng hình ảnh thực tế:

- `public/hero-image.jpg`: Hình ảnh hero cho trang chủ (1920x1080px)
- `public/doctors/doctor-1.jpg` đến `doctor-4.jpg`: Hình ảnh bác sĩ (800x600px)

## Contributing

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit thay đổi (`git commit -m 'Add some amazing feature'`)
4. Push lên branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.
