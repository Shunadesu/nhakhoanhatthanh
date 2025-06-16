import { Outlet, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const navigation = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Dịch vụ', href: '/services' },
  { name: 'Bác sĩ', href: '/doctors' },
  { name: 'Tin tức & Blog', href: '/news' },
  { name: 'Tư vấn trực tuyến', href: '/online-consult' },
  { name: 'Liên hệ', href: '/contact' },
]

export default function MainLayout() {

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-grow pt-[120px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
} 