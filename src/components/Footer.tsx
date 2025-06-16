import { Link } from 'react-router-dom';
import { FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRegClock, FaTooth, FaUserMd, FaComments } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const navigation = [
  { name: 'Trang chủ', href: '/', icon: <FaTooth className="inline mr-2 text-primary-400" /> },
  { name: 'Dịch vụ', href: '/services', icon: <FaTooth className="inline mr-2 text-primary-400" /> },
  { name: 'Bác sĩ', href: '/doctors', icon: <FaUserMd className="inline mr-2 text-primary-400" /> },
  { name: 'Tin tức & Blog', href: '/news', icon: <FaComments className="inline mr-2 text-primary-400" /> },
  { name: 'Tư vấn trực tuyến', href: '/online-consult', icon: <FaComments className="inline mr-2 text-primary-400" /> },
  { name: 'Liên hệ', href: '/contact', icon: <FaMapMarkerAlt className="inline mr-2 text-primary-400" /> },
];

const social = [
  { name: 'Facebook', href: 'https://facebook.com', icon: <FaFacebookF /> },
  { name: 'Zalo', href: 'https://zalo.me/0901234567', icon: <SiZalo /> },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-primary-700 via-primary-600 to-blue-500 text-white">
      {/* Sóng trang trí */}
      <div className="absolute -top-8 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8">
          <path d="M0,0V46.29c47.29,22,104.09,29,158,17.39C267.09,44.8,327.09,0,385,0s118,44.8,177,63.68C627.09,82.56,687.09,63.68,745,46.29c55.91-16.6,112.71-9.6,158,17.39V0Z" opacity=".25" className="fill-white" />
          <path d="M0,0V15.81C47.29,37.8,104.09,44.8,158,33.19C267.09,10.8,327.09,0,385,0s118,10.8,177,18.68C627.09,26.56,687.09,18.68,745,11.29c55.91-7.6,112.71-0.6,158,17.39V0Z" opacity=".5" className="fill-white" />
          <path d="M0,0V5.81C47.29,27.8,104.09,34.8,158,23.19C267.09,0.8,327.09,0,385,0s118,0.8,177,8.68C627.09,16.56,687.09,8.68,745,1.29c55.91-7.6,112.71-0.6,158,17.39V0Z" className="fill-white" />
        </svg>
      </div>
      <div className="relative z-10 container mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & slogan */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.png" alt="Nha khoa Nhật Thanh" className="h-16 w-16 mb-3 drop-shadow-lg" />
            <span className="text-2xl font-extrabold tracking-wide mb-2">Nha khoa Nhật Thanh</span>
            <p className="text-blue-100 mb-2 text-center md:text-left">
              Chăm sóc nụ cười của bạn là sứ mệnh của chúng tôi
            </p>
            <div className="flex space-x-4 mt-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white hover:text-primary-700 transition-colors text-xl shadow-md"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="flex items-center text-blue-100 hover:text-white font-medium transition-colors">
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-center"><FaMapMarkerAlt className="mr-2 text-primary-200" />37A Nguyễn Văn Đậu, Quận Bình Thạnh</li>
              <li className="flex items-center"><FaMapMarkerAlt className="mr-2 text-primary-200" />TP. Hồ Chí Minh</li>
              <li className="flex items-center"><FaPhoneAlt className="mr-2 text-primary-200" />090 987 62 87</li>
              <li className="flex items-center"><FaEnvelope className="mr-2 text-primary-200" />Thanhtu231082@gmail.com</li>
            </ul>
          </div>
          {/* Working hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Giờ làm việc</h3>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-center"><FaRegClock className="mr-2 text-primary-200" />Thứ 2 - Thứ 6: 8:00 - 20:00</li>
              <li className="flex items-center"><FaRegClock className="mr-2 text-primary-200" />Thứ 7: 8:00 - 17:00</li>
              <li className="flex items-center"><FaRegClock className="mr-2 text-primary-200" />Chủ nhật: 8:00 - 12:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-blue-200/30 text-center text-blue-100 text-sm">
          <p>&copy; {new Date().getFullYear()} Nha khoa Nhật Thanh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 