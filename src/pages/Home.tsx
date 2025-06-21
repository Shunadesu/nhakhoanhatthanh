import { Link } from 'react-router-dom'
import { FeaturedServices, FeedbackThanks, TreatmentProcess, FeatureSection, Doctors, News, Gallery, Hero, FAQ } from '../components'
import { ServicesShowCase } from '../components'
import SEO from '../components/SEO'



const stats = [
  { name: 'Khách hàng hài lòng', value: '10,000+' },
  { name: 'Năm kinh nghiệm', value: '15+' },
  { name: 'Bác sĩ chuyên môn', value: '10+' },
  { name: 'Dịch vụ đa dạng', value: '30+' },
];

const Home = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="Nha Khoa Nhật Thanh - Nha Khoa Uy Tín Tại TP.HCM | Chăm Sóc Nụ Cười Việt"
        description="Nha khoa Nhật Thanh - Đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại. Chuyên cấy ghép Implant, chỉnh nha, nha khoa thẩm mỹ. Đặt lịch khám ngay!"
        keywords="nha khoa nhật thanh, nha khoa tphcm, cấy ghép implant, chỉnh nha, nha khoa thẩm mỹ, tẩy trắng răng, dán sứ veneer"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Nha Khoa Nhật Thanh",
          "url": "https://nhakhoanhatthanh.com",
          "description": "Nha khoa uy tín tại TP.HCM với đội ngũ bác sĩ chuyên môn cao",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://nhakhoanhatthanh.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Nha Khoa Nhật Thanh",
            "logo": {
              "@type": "ImageObject",
              "url": "https://nhakhoanhatthanh.com/src/assets/img/logo.jpeg"
            }
          }
        }}
      />
      {/* Add padding-top to account for fixed header */}

      <Hero />
      <FeatureSection />
      <ServicesShowCase />
      <FeaturedServices />
      <News />
      <Doctors />
      <TreatmentProcess />
      <Gallery />
      <FAQ />
      
      {/* Stats section */}
      <div className="bg-primary-50 ">
        <div className="mx-auto max-w-7xl py-8 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Niềm tin của khách hàng
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Những con số nói lên chất lượng dịch vụ của chúng tôi
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          
          <div className="relative isolate overflow-hidden bg-primary-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Đặt lịch khám ngay hôm nay
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Hãy để chúng tôi chăm sóc nụ cười của bạn. Đội ngũ bác sĩ chuyên môn cao luôn sẵn sàng phục vụ.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/appointment"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Liên hệ ngay
              </Link>
              <Link to="/services" className="text-sm font-semibold leading-6 text-white">
                Xem thêm dịch vụ <span aria-hidden="true">→</span>
              </Link>
            </div>
          
          </div>
            
        </div>
        <FeedbackThanks />
      </div>
    </div>
  )
}

export default Home;
