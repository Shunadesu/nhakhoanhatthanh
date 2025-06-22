import { Link } from 'react-router-dom'
import { 
  AdjustmentsHorizontalIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  StarIcon
} from '@heroicons/react/24/solid'
import { SEO } from '../../components'

const Orthodontics = () => {
  const treatments = [
    {
      title: 'Mắc cài kim loại',
      description: 'Mắc cài truyền thống với dây cung kim loại, hiệu quả cao và chi phí hợp lý.',
      icon: AdjustmentsHorizontalIcon,
      duration: '18-24 tháng',
      price: 'Từ 15,000,000đ'
    },
    {
      title: 'Mắc cài sứ',
      description: 'Mắc cài sứ thẩm mỹ, ít lộ hơn mắc cài kim loại, phù hợp người lớn.',
      icon: StarIcon,
      duration: '18-24 tháng',
      price: 'Từ 25,000,000đ'
    },
    {
      title: 'Mắc cài tự buộc',
      description: 'Công nghệ mắc cài tự buộc, ít đau, ít phải điều chỉnh hơn.',
      icon: ShieldCheckIcon,
      duration: '15-20 tháng',
      price: 'Từ 35,000,000đ'
    },
    {
      title: 'Khay trong suốt',
      description: 'Khay chỉnh nha trong suốt, tháo lắp được, thẩm mỹ tối đa.',
      icon: CheckCircleIcon,
      duration: '12-18 tháng',
      price: 'Từ 45,000,000đ'
    },
  ]

  const benefits = [
    {
      title: 'Cải thiện thẩm mỹ',
      description: 'Răng đều đẹp, nụ cười tự tin hơn.',
      icon: StarIcon,
    },
    {
      title: 'Cải thiện chức năng',
      description: 'Khớp cắn tốt hơn, ăn nhai dễ dàng.',
      icon: CheckCircleIcon,
    },
    {
      title: 'Dễ vệ sinh',
      description: 'Răng đều giúp vệ sinh răng miệng dễ dàng hơn.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Ngăn ngừa bệnh',
      description: 'Giảm nguy cơ sâu răng và bệnh nướu.',
      icon: UserGroupIcon,
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Khám và chẩn đoán',
      description: 'Khám tổng quát, chụp X-quang và phân tích khớp cắn.',
      duration: '60 phút'
    },
    {
      step: '02',
      title: 'Lập kế hoạch điều trị',
      description: 'Bác sĩ sẽ lập kế hoạch chi tiết và thông báo thời gian điều trị.',
      duration: '30 phút'
    },
    {
      step: '03',
      title: 'Gắn mắc cài',
      description: 'Gắn mắc cài và dây cung, bắt đầu quá trình chỉnh nha.',
      duration: '90 phút'
    },
    {
      step: '04',
      title: 'Theo dõi định kỳ',
      description: 'Tái khám định kỳ để điều chỉnh mắc cài.',
      duration: '30 phút/lần'
    }
  ]

  return (
    <div className="bg-white">
      <SEO
        title="Chỉnh nha | Nha khoa Nhật Thanh"
        description="Chỉnh nha với các phương pháp hiện đại, đảm bảo nụ cười đẹp và hoàn hảo."
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
              Chỉnh nha
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Điều trị các vấn đề về khớp cắn, răng mọc lệch lạc với các phương pháp chỉnh nha hiện đại.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
          <img
            src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Chỉnh nha"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold">Nụ cười hoàn hảo</h2>
            <p className="text-lg opacity-90">Công nghệ chỉnh nha tiên tiến</p>
          </div>
        </div>
      </div>

      {/* Treatments */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Phương pháp điều trị</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Các loại mắc cài chỉnh nha
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Từ mắc cài truyền thống đến khay trong suốt, chúng tôi có đầy đủ các phương pháp chỉnh nha.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {treatments.map((treatment) => (
              <div key={treatment.title} className="flex flex-col bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                  <treatment.icon className="h-6 w-6 flex-none text-primary-600" aria-hidden="true" />
                  {treatment.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto mb-4">{treatment.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1 text-primary-600">
                      <ClockIcon className="h-4 w-4" />
                      <span>{treatment.duration}</span>
                    </div>
                    <span className="font-semibold text-primary-600">{treatment.price}</span>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Lợi ích chỉnh nha</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tại sao nên chỉnh nha?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Chỉnh nha không chỉ cải thiện thẩm mỹ mà còn mang lại nhiều lợi ích sức khỏe.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    <benefit.icon className="h-6 w-6 flex-none text-primary-600" aria-hidden="true" />
                    {benefit.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Quy trình điều trị</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hành trình chỉnh nha
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quy trình chỉnh nha chuẩn quốc tế, đảm bảo kết quả tối ưu.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 mb-4">
                    <span className="text-2xl font-bold text-primary-600">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  <div className="flex items-center gap-1 text-sm text-primary-600">
                    <ClockIcon className="h-4 w-4" />
                    <span>{step.duration}</span>
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

      {/* CTA */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-primary-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bắt đầu hành trình chỉnh nha ngay hôm nay
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Hãy để chúng tôi giúp bạn có nụ cười hoàn hảo. Đội ngũ bác sĩ chỉnh nha chuyên môn cao luôn sẵn sàng tư vấn.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/appointment"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Tư vấn miễn phí
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-white">
                Xem thêm thông tin <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orthodontics 