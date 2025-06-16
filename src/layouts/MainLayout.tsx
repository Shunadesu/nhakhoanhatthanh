import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

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