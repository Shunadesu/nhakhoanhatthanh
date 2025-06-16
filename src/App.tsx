import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
// Layouts
import { MainLayout } from './layouts'

// Pages
import { Home, Services, Doctors, Contact, Appointment, News, OnlineConsult, NewsDetail, About } from './pages'

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="doctors" element={<Doctors />} />
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
