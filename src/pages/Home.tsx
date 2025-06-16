import { Link } from 'react-router-dom'
import { CheckCircleIcon, UserGroupIcon, DevicePhoneMobileIcon, ShieldCheckIcon, WrenchScrewdriverIcon, HomeModernIcon, CheckBadgeIcon, SparklesIcon, WrenchIcon, AdjustmentsHorizontalIcon, HeartIcon, CalendarIcon, ClockIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, AcademicCapIcon, StarIcon } from '@heroicons/react/24/solid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Header from '../components/Header'

import { images } from '../assets/images'

const features = [
  {
    name: 'Đội ngũ bác sĩ chuyên môn cao',
    description: 'Đội ngũ bác sĩ giàu kinh nghiệm, được đào tạo chuyên sâu tại các trường đại học danh tiếng trong và ngoài nước.',
    icon: UserGroupIcon,
  },
  {
    name: 'Trang thiết bị hiện đại',
    description: 'Đầu tư trang thiết bị nha khoa hiện đại, nhập khẩu từ các nước phát triển, đảm bảo an toàn và hiệu quả điều trị.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Quy trình chuẩn quốc tế',
    description: 'Áp dụng quy trình điều trị theo tiêu chuẩn quốc tế, đảm bảo an toàn và hiệu quả tối đa cho khách hàng.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Dịch vụ toàn diện',
    description: 'Cung cấp đầy đủ các dịch vụ nha khoa từ cơ bản đến nâng cao, đáp ứng mọi nhu cầu của khách hàng.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Không gian thoải mái',
    description: 'Phòng khám được thiết kế hiện đại, tạo cảm giác thoải mái và thư giãn cho khách hàng trong quá trình điều trị.',
    icon: HomeModernIcon,
  },
  {
    name: 'Chính sách bảo hành',
    description: 'Cam kết bảo hành dài hạn cho các dịch vụ, đảm bảo quyền lợi tối đa cho khách hàng.',
    icon: CheckBadgeIcon,
  },
]

const stats = [
  { name: 'Khách hàng hài lòng', value: '10,000+' },
  { name: 'Năm kinh nghiệm', value: '15+' },
  { name: 'Bác sĩ chuyên môn', value: '20+' },
  { name: 'Dịch vụ đa dạng', value: '30+' },
];

const services = [
  {
    name: 'Nha khoa tổng quát',
    description: 'Khám và điều trị các vấn đề răng miệng cơ bản, vệ sinh răng miệng chuyên nghiệp.',
    icon: HeartIcon,
    href: '/services/general',
  },
  {
    name: 'Nha khoa thẩm mỹ',
    description: 'Tẩy trắng răng, bọc răng sứ, dán sứ veneer, chỉnh nha thẩm mỹ.',
    icon: SparklesIcon,
    href: '/services/cosmetic',
  },
  {
    name: 'Cấy ghép Implant',
    description: 'Phục hồi răng đã mất bằng công nghệ Implant hiện đại, an toàn và bền vững.',
    icon: WrenchIcon,
    href: '/services/implant',
  },
  {
    name: 'Chỉnh nha',
    description: 'Điều trị các vấn đề về khớp cắn, răng mọc lệch lạc bằng các phương pháp chỉnh nha hiện đại.',
    icon: AdjustmentsHorizontalIcon,
    href: '/services/orthodontics',
  },
]

// Dữ liệu mẫu cho slider khách hàng
const testimonials = [
  {
    id: 1,
    name: 'Chị Nguyễn Thị Hương',
    role: 'Khách hàng thân thiết',
    content: 'Tôi đã điều trị tại Nha khoa Nhật Thanh được 2 năm. Đội ngũ bác sĩ rất chuyên nghiệp, tận tâm. Kết quả điều trị vượt ngoài mong đợi!',
    image: '/testimonials/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Anh Trần Văn Minh',
    role: 'Khách hàng mới',
    content: 'Lần đầu đến đây, tôi rất ấn tượng với cơ sở vật chất hiện đại và thái độ phục vụ chu đáo. Bác sĩ tư vấn rất kỹ lưỡng và nhiệt tình.',
    image: '/testimonials/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Chị Lê Thị Mai',
    role: 'Khách hàng thân thiết',
    content: 'Sau khi bọc răng sứ tại đây, tôi tự tin hơn hẳn với nụ cười của mình. Cảm ơn đội ngũ Nha khoa Nhật Thanh!',
    image: '/testimonials/testimonial-3.jpg',
  },
]

const doctors = [
  {
    name: 'BS. Nguyễn Văn A',
    role: 'Giám đốc chuyên môn',
    image: '/doctors/doctor-1.jpg',
    specialties: ['Nha khoa tổng quát', 'Cấy ghép Implant'],
    experience: '15 năm kinh nghiệm',
    education: 'Tiến sĩ Nha khoa - Đại học Y Hà Nội',
    description: 'Chuyên gia hàng đầu trong lĩnh vực cấy ghép Implant với hơn 15 năm kinh nghiệm.',
  },
  {
    name: 'BS. Trần Thị B',
    role: 'Bác sĩ chuyên khoa',
    image: '/doctors/doctor-2.jpg',
    specialties: ['Chỉnh nha', 'Nha khoa thẩm mỹ'],
    experience: '10 năm kinh nghiệm',
    education: 'Thạc sĩ Chỉnh nha - Đại học Y Dược TP.HCM',
    description: 'Chuyên gia về chỉnh nha và nha khoa thẩm mỹ, đã điều trị thành công cho hàng nghìn khách hàng.',
  },
  {
    name: 'BS. Lê Văn C',
    role: 'Bác sĩ chuyên khoa',
    image: '/doctors/doctor-3.jpg',
    specialties: ['Nha khoa tổng quát', 'Điều trị tủy'],
    experience: '8 năm kinh nghiệm',
    education: 'Bác sĩ Nha khoa - Đại học Y Dược Huế',
    description: 'Chuyên gia về điều trị tủy và nha khoa tổng quát, luôn tận tâm với từng ca điều trị.',
  },
];

const gallery = [
  {
    id: 1,
    image: '/gallery/gallery-1.jpg',
    title: 'Phòng khám hiện đại',
    description: 'Không gian phòng khám được thiết kế theo tiêu chuẩn quốc tế',
  },
  {
    id: 2,
    image: '/gallery/gallery-2.jpg',
    title: 'Trang thiết bị tiên tiến',
    description: 'Máy móc và thiết bị nhập khẩu từ các nước phát triển',
  },
  {
    id: 3,
    image: '/gallery/gallery-3.jpg',
    title: 'Quy trình điều trị',
    description: 'Quy trình điều trị chuẩn quốc tế, an toàn và hiệu quả',
  },
  {
    id: 4,
    image: '/gallery/gallery-4.jpg',
    title: 'Đội ngũ chuyên môn',
    description: 'Đội ngũ bác sĩ giàu kinh nghiệm, tận tâm với nghề',
  },
  {
    id: 5,
    image: '/gallery/gallery-5.jpg',
    title: 'Kết quả điều trị',
    description: 'Những nụ cười đẹp sau khi điều trị tại phòng khám',
  },
  {
    id: 6,
    image: '/gallery/gallery-6.jpg',
    title: 'Không gian chờ',
    description: 'Không gian chờ thoáng đãng, tiện nghi',
  },
];

const process = [
  {
    id: 1,
    name: 'Tư vấn & Khám tổng quát',
    description: 'Bác sĩ sẽ khám tổng quát và tư vấn chi tiết về tình trạng răng miệng của bạn.',
    icon: UserGroupIcon,
  },
  {
    id: 2,
    name: 'Chụp X-quang & Chẩn đoán',
    description: 'Sử dụng máy chụp X-quang hiện đại để chẩn đoán chính xác tình trạng.',
    icon: DevicePhoneMobileIcon,
  },
  {
    id: 3,
    name: 'Lập kế hoạch điều trị',
    description: 'Bác sĩ sẽ lập kế hoạch điều trị chi tiết và thông báo chi phí.',
    icon: CalendarIcon,
  },
  {
    id: 4,
    name: 'Thực hiện điều trị',
    description: 'Quá trình điều trị được thực hiện bởi đội ngũ bác sĩ chuyên môn cao.',
    icon: WrenchScrewdriverIcon,
  },
  {
    id: 5,
    name: 'Theo dõi & Chăm sóc',
    description: 'Hướng dẫn chăm sóc và theo dõi sau điều trị để đảm bảo kết quả tốt nhất.',
    icon: HeartIcon,
  },
];

const news = [
  {
    id: 1,
    title: 'Công nghệ mới trong điều trị nha khoa',
    date: '2024-03-20',
    image: '/news/news-1.jpg',
    excerpt: 'Khám phá những công nghệ tiên tiến nhất đang được áp dụng tại Nha khoa Nhật Thanh...',
    category: 'Công nghệ',
  },
  {
    id: 2,
    title: 'Chăm sóc răng miệng đúng cách',
    date: '2024-03-15',
    image: '/news/news-2.jpg',
    excerpt: 'Hướng dẫn chi tiết về cách chăm sóc răng miệng đúng cách để có hàm răng khỏe đẹp...',
    category: 'Chăm sóc',
  },
  {
    id: 3,
    title: 'Lễ kỷ niệm 15 năm thành lập',
    date: '2024-03-10',
    image: '/news/news-3.jpg',
    excerpt: 'Nha khoa Nhật Thanh kỷ niệm 15 năm thành lập với nhiều chương trình ưu đãi đặc biệt...',
    category: 'Sự kiện',
  },
];

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      {/* Add padding-top to account for fixed header */}
      <div className="pt-[20px]">
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-50 to-white">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>
          
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex items-center justify-between lg:px-8 lg:py-40">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-primary-500/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-500/20">
                    Nha khoa chất lượng cao
                  </span>
                </a>
              </div>
              <h1 className="mt-10 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                Nha Khoa Nhật Thanh
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Chăm sóc nụ cười của bạn với đội ngũ bác sĩ chuyên môn cao và trang thiết bị hiện đại. 
                Cam kết mang đến dịch vụ nha khoa chất lượng tốt nhất.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#contact"
                  className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Đặt lịch ngay
                </a>
                <a href="#services" className="text-sm font-semibold leading-6 text-gray-900">
                  Xem dịch vụ <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="mx-auto mt-16 flex sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0">
              <div className="h-[700px] w-[500px] flex-none rounded-2xl bg-white/5 shadow-2xl ring-1 ring-white/10 overflow-hidden">
                <div className='w-full h-full relative bg-white/5'>
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    pagination={{
                      clickable: true,
                      bulletClass: 'swiper-pagination-bullet !bg-primary-600',
                      bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary-800'
                    }}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false
                    }}
                    className='w-full h-full'
                  >
                    {testimonials.map((testimonial) => (
                      <SwiperSlide key={testimonial.id} className="w-full h-full">
                        <div className="w-full h-full flex items-center justify-center relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className='w-full h-full object-cover'
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Dịch vụ của chúng tôi</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Mọi thứ bạn cần cho nụ cười hoàn hảo
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Chúng tôi cung cấp đầy đủ các dịch vụ nha khoa từ cơ bản đến nâng cao, 
                đảm bảo mang đến cho bạn trải nghiệm chăm sóc răng miệng tốt nhất.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Services showcase */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Dịch vụ nổi bật</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Giải pháp toàn diện cho nụ cười của bạn
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Chúng tôi cung cấp đầy đủ các dịch vụ nha khoa chất lượng cao, 
                được thực hiện bởi đội ngũ bác sĩ giàu kinh nghiệm.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {services.map((service) => (
                  <div key={service.name} className="flex flex-col bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                      <service.icon className="h-6 w-6 flex-none text-primary-600" aria-hidden="true" />
                      {service.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{service.description}</p>
                      <p className="mt-6">
                        <a href={service.href} className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500">
                          Tìm hiểu thêm <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Khách hàng nói gì về chúng tôi</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Niềm tin của khách hàng là động lực của chúng tôi
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex flex-col bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="mt-6 flex items-center gap-x-4">
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-primary-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
          </div>
        </div>

        {/* Why choose us section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Tại sao chọn chúng tôi</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Cam kết chất lượng dịch vụ hàng đầu
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                      <feature.icon className="h-6 w-6 flex-none text-primary-600" aria-hidden="true" />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-primary-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Đặt lịch khám ngay hôm nay
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
                Hãy để chúng tôi chăm sóc nụ cười của bạn. Đội ngũ bác sĩ chuyên môn cao luôn sẵn sàng phục vụ.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#contact"
                  className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Liên hệ ngay
                </a>
                <a href="#services" className="text-sm font-semibold leading-6 text-white">
                  Xem thêm dịch vụ <span aria-hidden="true">→</span>
                </a>
              </div>
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
              >
                <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
                <defs>
                  <radialGradient id="gradient">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Latest news section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Tin tức & Blog</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Cập nhật mới nhất từ chúng tôi
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {news.map((item) => (
                <div key={item.id} className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-primary-600">
                        <time dateTime={item.date}>
                          {new Date(item.date).toLocaleDateString('vi-VN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </p>
                      <a href="/news" className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                        <p className="mt-3 text-base text-gray-500">{item.excerpt}</p>
                      </a>
                    </div>
                    <div className="mt-6">
                      <a href="/news" className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500">
                        Đọc thêm <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Câu hỏi thường gặp</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Giải đáp thắc mắc của bạn
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="space-y-8">
                {[
                  {
                    question: 'Quy trình khám và điều trị tại Nha khoa Nhật Thanh như thế nào?',
                    answer: 'Chúng tôi tuân thủ quy trình khám và điều trị chuẩn quốc tế, bao gồm: khám tổng quát, chụp X-quang (nếu cần), tư vấn điều trị, thực hiện điều trị và hướng dẫn chăm sóc sau điều trị.',
                  },
                  {
                    question: 'Chi phí điều trị có được bảo hiểm y tế chi trả không?',
                    answer: 'Một số dịch vụ nha khoa cơ bản có thể được bảo hiểm y tế chi trả. Tuy nhiên, các dịch vụ thẩm mỹ và nâng cao thường không được bảo hiểm chi trả. Chúng tôi sẽ tư vấn chi tiết về chi phí trước khi điều trị.',
                  },
                  {
                    question: 'Thời gian điều trị mất bao lâu?',
                    answer: 'Thời gian điều trị phụ thuộc vào loại dịch vụ và tình trạng cụ thể của từng khách hàng. Chúng tôi sẽ thông báo thời gian dự kiến sau khi khám và tư vấn.',
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300">
                    <dt className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</dt>
                    <dd className="mt-4 text-base leading-7 text-gray-600">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Doctors section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Đội ngũ bác sĩ</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Gặp gỡ đội ngũ chuyên gia của chúng tôi
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Đội ngũ bác sĩ giàu kinh nghiệm, được đào tạo chuyên sâu và luôn tận tâm với nghề.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {doctors.map((doctor) => (
                <div key={doctor.name} className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-x-2">
                        <AcademicCapIcon className="h-5 w-5 text-primary-600" />
                        <p className="text-sm font-medium text-primary-600">{doctor.role}</p>
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-gray-900">{doctor.name}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {doctor.specialties.map((specialty) => (
                          <span key={specialty} className="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-600">
                            {specialty}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-sm text-gray-500">{doctor.description}</p>
                      <div className="mt-4 flex items-center gap-x-4 text-sm text-gray-500">
                        <div className="flex items-center gap-x-1">
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                          <span>{doctor.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Treatment Process section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Quy trình điều trị</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Hành trình đến với nụ cười hoàn hảo
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Quy trình điều trị chuẩn quốc tế, đảm bảo an toàn và hiệu quả tối đa cho khách hàng.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                {process.map((step, index) => (
                  <div key={step.id} className="relative">
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                        <step.icon className="h-8 w-8 text-primary-600" />
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-900">{step.name}</h3>
                        <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    {index < process.length - 1 && (
                      <div className="absolute top-8 left-1/2 -ml-px h-0.5 w-full bg-primary-100 lg:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Thư viện ảnh</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Khám phá không gian phòng khám
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Hình ảnh thực tế về cơ sở vật chất và không gian phòng khám của chúng tôi.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {gallery.map((item) => (
                <div key={item.id} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info section */}
        <div className="bg-primary-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Liên hệ</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Hãy liên hệ với chúng tôi
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg">
                  <MapPinIcon className="h-8 w-8 text-primary-600" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">Địa chỉ</h3>
                  <p className="mt-2 text-center text-gray-600">
                    123 Đường ABC, Quận XYZ<br />
                    TP. Hồ Chí Minh
                  </p>
                </div>
                <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg">
                  <PhoneIcon className="h-8 w-8 text-primary-600" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">Điện thoại</h3>
                  <p className="mt-2 text-center text-gray-600">
                    028 1234 5678<br />
                    0901 234 567
                  </p>
                </div>
                <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg">
                  <EnvelopeIcon className="h-8 w-8 text-primary-600" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">Email</h3>
                  <p className="mt-2 text-center text-gray-600">
                    info@nhakhoanhatthanh.com<br />
                    support@nhakhoanhatthanh.com
                  </p>
                </div>
                <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg">
                  <ClockIcon className="h-8 w-8 text-primary-600" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">Giờ làm việc</h3>
                  <p className="mt-2 text-center text-gray-600">
                    Thứ 2 - Thứ 7: 8:00 - 20:00<br />
                    Chủ nhật: 8:00 - 17:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
