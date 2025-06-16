import React from 'react';

const zaloNumber = '0901 234 567';
const zaloQR = '/zalo-qr.png'; // Đặt file ảnh QR code Zalo vào public hoặc assets

const OnlineConsult = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-16 px-4 flex flex-col items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary-700 mb-4 text-center">Tư vấn trực tuyến qua Zalo</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Đội ngũ tư vấn của Nha khoa Nhật Thanh luôn sẵn sàng hỗ trợ bạn 24/7 qua Zalo. Hãy kết nối với chúng tôi để được tư vấn nhanh chóng và tận tình!
        </p>
        <div className="mb-6 flex flex-col items-center">
          <img
            src={zaloQR}
            alt="QR Zalo Nha khoa Nhật Thanh"
            className="w-48 h-48 rounded-xl border-4 border-primary-100 shadow-lg mb-4"
          />
          <div className="text-center">
            <div className="text-base text-gray-600">Quét mã QR hoặc liên hệ trực tiếp qua Zalo:</div>
            <div className="text-xl font-semibold text-primary-700 mt-2">{zaloNumber}</div>
          </div>
        </div>
        <a
          href={`https://zalo.me/${zaloNumber.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 rounded-full bg-primary-600 px-8 py-3 text-lg font-semibold text-white shadow-md hover:bg-primary-500 transition-colors"
        >
          Nhắn Zalo ngay
        </a>
        <div className="mt-8 text-gray-500 text-sm text-center">
          Nếu bạn gặp khó khăn khi quét mã, hãy mở ứng dụng Zalo và tìm kiếm số điện thoại <b>090 987 62 87</b> để kết nối với chúng tôi.<br/>
          Hoặc liên hệ trực tiếp tại: <br/>
          37A Nguyễn Văn Đậu, Quận Bình Thạnh, TP. Hồ Chí Minh<br/>
          Email: Thanhtu231082@gmail.com
        </div>
      </div>
    </div>
  );
};

export default OnlineConsult; 