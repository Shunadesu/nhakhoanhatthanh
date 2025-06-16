import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Giới thiệu', href: '/about' },
  { name: 'Dịch vụ', href: '/services' },
  { name: 'Đội ngũ', href: '/doctors' },
  { name: 'Tin tức & Blog', href: '/news' },
  { name: 'Tư vấn trực tuyến', href: '/online-consult' },
  { name: 'Liên hệ', href: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      {/* Top bar */}
      <div className="bg-primary-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="tel:02812345678" className="flex items-center text-sm text-white hover:text-yellow-300">
                <PhoneIcon className="h-4 w-4 mr-1 text-white" />
                028 1234 5678
              </a>
              <span className="hidden sm:block text-white">|</span>
              <a href="mailto:info@nhakhoanhatthanh.com" className="hidden sm:flex items-center text-sm text-white hover:text-yellow-300">
                info@nhakhoanhatthanh.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm text-white hover:text-yellow-300">Đặt lịch hẹn</a>
              <span className="hidden sm:block text-white">|</span>
              <a href="#" className="hidden sm:block text-sm text-white hover:text-yellow-300">Tư vấn trực tuyến</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-[1440px]">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
             
              <div className="ml-3 hidden sm:block">
                <div className="text-xl font-bold text-gray-900">Nha khoa Nhật Thanh</div>
                <div className="text-sm text-primary-600">Nụ cười của bạn là niềm vui của chúng tôi</div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors duration-200"
            >
              Đặt lịch ngay
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-4 pb-3 pt-2 bg-white shadow-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/appointment"
            className="block rounded-md bg-primary-600 px-3 py-2 text-base font-medium text-white hover:bg-primary-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Đặt lịch ngay
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 