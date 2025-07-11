import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
// Layouts
import { MainLayout } from './layouts'

// Components
import { ScrollToTop } from './components'

// Pages
import { Home, Services, Doctors, DoctorDetail, Contact, Appointment, News, OnlineConsult, NewsDetail, About } from './pages'
import General from './pages/services/General'
import Cosmetic from './pages/services/Cosmetic'
import Implant from './pages/services/Implant'
import Orthodontics from './pages/services/Orthodontics'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/general" element={<General />} />
            <Route path="services/cosmetic" element={<Cosmetic />} />
            <Route path="services/implant" element={<Implant />} />
            <Route path="services/orthodontics" element={<Orthodontics />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="doctors/:id" element={<DoctorDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="news" element={<News />} />
            <Route path="online-consult" element={<OnlineConsult />} />
            <Route path="news/:slug" element={<NewsDetail />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
