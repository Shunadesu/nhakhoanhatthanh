import { Link } from 'react-router-dom'
import { 
  SparklesIcon, 
  StarIcon, 
  ClockIcon, 
  UserGroupIcon,
  CheckCircleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/solid'
import { SEO } from '../../components'
import { images } from '../../assets/images'

const Cosmetic = () => {
  const services = [
    {
      title: 'Tẩy trắng răng',
      description: 'Tẩy trắng răng chuyên nghiệp với công nghệ hiện đại, an toàn và hiệu quả cao.',
      icon: SparklesIcon,
      duration: '60-90 phút',
      price: 'Từ 500,000đ'
    },
    {
      title: 'Bọc răng sứ',
      description: 'Bọc răng sứ thẩm mỹ, phục hồi hình dáng và màu sắc răng hoàn hảo.',
      icon: StarIcon,
      duration: '2-3 lần hẹn',
      price: 'Từ 2,000,000đ'
    },
    {
      title: 'Dán sứ Veneer',
      description: 'Dán sứ Veneer mỏng, tạo nụ cười đẹp tự nhiên với độ bền cao.',
      icon: CheckCircleIcon,
      duration: '2-3 lần hẹn',
      price: 'Từ 3,500,000đ'
    },
    {
      title: 'Chỉnh nha thẩm mỹ',
      description: 'Chỉnh nha với mắc cài sứ hoặc khay trong suốt, đảm bảo thẩm mỹ.',
      icon: UserGroupIcon,
      duration: '12-24 tháng',
      price: 'Từ 15,000,000đ'
    },
  ]

  const beforeAfter = [
    {
      title: 'Tẩy trắng răng',
      before: images.services.taytrangrang1,
      after: images.services.taytrangrang1,
      description: 'Kết quả tẩy trắng răng sau 1 lần điều trị'
    },
    {
      title: 'Bọc răng sứ',
      before: images.services.bocrangsuco,
      after: images.services.bocrangsuco,
      description: 'Phục hồi răng sứ thẩm mỹ hoàn hảo'
    }
  ]

  return (
    <div className="bg-white">
      <SEO
        title="Nha khoa thẩm mỹ | Nha khoa Nhật Thanh"
        description="Nha khoa thẩm mỹ với các dịch vụ chuyên sâu, đảm bảo nụ cười đẹp và hoàn hảo."
      />
      {/* Header */}
      <div className="bg-gradient-to-b from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-500 mb-6"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Quay lại trang chủ
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Nha khoa thẩm mỹ
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tạo nụ cười đẹp hoàn hảo với các dịch vụ thẩm mỹ nha khoa tiên tiến nhất.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
          <img
            src="https://cdnphoto.dantri.com.vn/m4ZoTJ8mNQpplnrZX_lAHh3X7NA=/thumb_w/1020/2022/09/16/meo-hay-de-co-duoc-nu-cuoi-hoan-hao-docx-1663344861381.jpeg"
            alt="Nha khoa thẩm mỹ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold">Nụ cười hoàn hảo</h2>
            <p className="text-lg opacity-90">Công nghệ thẩm mỹ nha khoa tiên tiến</p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Dịch vụ thẩm mỹ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Các dịch vụ chúng tôi cung cấp
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Từ tẩy trắng răng đến bọc sứ, chúng tôi mang đến những giải pháp thẩm mỹ toàn diện.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                  <service.icon className="h-6 w-6 flex-none text-primary-600" aria-hidden="true" />
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto mb-4">{service.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1 text-primary-600">
                      <ClockIcon className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                    <span className="font-semibold text-primary-600">{service.price}</span>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Before After */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Kết quả điều trị</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trước và sau điều trị
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Những kết quả thực tế từ các ca điều trị thẩm mỹ tại Nha khoa Nhật Thanh.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {beforeAfter.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-2">Trước</p>
                        <img
                          src={item.before}
                          alt="Trước điều trị"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-2">Sau</p>
                        <img
                          src={item.after}
                          alt="Sau điều trị"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-primary-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tạo nụ cười hoàn hảo ngay hôm nay
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Hãy để chúng tôi giúp bạn có nụ cười đẹp tự tin. Đội ngũ bác sĩ thẩm mỹ chuyên môn cao luôn sẵn sàng tư vấn.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/appointment"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Tư vấn miễn phí
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-white">
                Xem thêm kết quả <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cosmetic 