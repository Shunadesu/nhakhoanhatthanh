import { Link } from 'react-router-dom';
import { FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRegClock, FaTooth, FaUserMd, FaComments } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import { images } from '../assets/images';

const navigation = [
  { name: 'Trang chủ', href: '/', icon: <FaTooth className="inline mr-2 text-primary-400" /> },
  { name: 'Dịch vụ', href: '/services', icon: <FaTooth className="inline mr-2 text-primary-400" /> },
  { name: 'Bác sĩ', href: '/doctors', icon: <FaUserMd className="inline mr-2 text-primary-400" /> },
  { name: 'Tin tức & Blog', href: '/news', icon: <FaComments className="inline mr-2 text-primary-400" /> },
  { name: 'Tư vấn trực tuyến', href: '/online-consult', icon: <FaComments className="inline mr-2 text-primary-400" /> },
  { name: 'Liên hệ', href: '/contact', icon: <FaMapMarkerAlt className="inline mr-2 text-primary-400" /> },
];

const social = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100025979333223', icon: <FaFacebookF /> },
  { name: 'Zalo', href: 'https://zalo.me/0909876287', icon: <SiZalo /> },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary-400 via-primary-600 to-blue-500 text-white">
     
     
      <div className="relative z-10 container mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & slogan */}
          <div className="flex flex-col items-center md:items-start">
            <img src={images.logoWhite} alt="Nha khoa Nhật Thanh" className="h-16 w-16 mb-3 drop-shadow-lg" />
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