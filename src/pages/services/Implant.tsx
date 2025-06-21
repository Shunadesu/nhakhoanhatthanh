import { Link } from 'react-router-dom'
import { 

  ShieldCheckIcon, 
  ClockIcon,    
  UserGroupIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  StarIcon
} from '@heroicons/react/24/solid'
import { SEO } from '../../components'
import { images } from '../../assets/images'
const Implant = () => {
  const advantages = [
    {
      title: 'Tính ổn định cao',
      description: 'Implant được tích hợp chắc chắn vào xương hàm, tạo cảm giác như răng thật.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Tuổi thọ lâu dài',
      description: 'Với chăm sóc đúng cách, Implant có thể tồn tại suốt đời.',
      icon: StarIcon,
    },
    {
      title: 'Bảo tồn xương hàm',
      description: 'Ngăn chặn tiêu xương, duy trì cấu trúc khuôn mặt tự nhiên.',
      icon: CheckCircleIcon,
    },
    {
      title: 'Thẩm mỹ hoàn hảo',
      description: 'Răng Implant có hình dáng và màu sắc giống hệt răng thật.',
      icon: UserGroupIcon,
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Khám và lập kế hoạch',
      description: 'Khám tổng quát, chụp CT 3D để đánh giá xương hàm và lập kế hoạch điều trị.',
      duration: '60 phút'
    },
    {
      step: '02',
      title: 'Cấy ghép Implant',
      description: 'Thực hiện cấy ghép Implant với công nghệ hiện đại, ít xâm lấn.',
      duration: '90-120 phút'
    },
    {
      step: '03',
      title: 'Thời gian tích hợp',
      description: 'Implant tích hợp với xương hàm trong 3-6 tháng.',
      duration: '3-6 tháng'
    },
    {
      step: '04',
      title: 'Phục hình răng sứ',
      description: 'Gắn răng sứ lên Implant, hoàn thiện quá trình điều trị.',
      duration: '2-3 lần hẹn'
    }
  ]

  const technologies = [
    {
      name: 'CT Cone Beam 3D',
      description: 'Chụp CT 3D độ phân giải cao, cho phép lập kế hoạch chính xác.',
      image: images.services.conebean,
    },
    {
      name: 'Implant Thụy Sĩ',
      description: 'Sử dụng Implant chất lượng cao từ Thụy Sĩ, đảm bảo độ bền và tương thích.',
      image: images.services.implantThuySi,
    },
    {
      name: 'Phẫu thuật ít xâm lấn',
      description: 'Kỹ thuật phẫu thuật hiện đại, ít đau, ít sưng và hồi phục nhanh.',
      image: images.services.phauthuatitxamlan,
    }
  ]

  return (
    <div className="bg-white">
      <SEO
        title="Cấy ghép Implant | Nha khoa Nhật Thanh"
        description="Cấy ghép Implant với công nghệ hiện đại, an toàn và bền vững."
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
              Cấy ghép Implant
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Giải pháp tối ưu để phục hồi răng đã mất với công nghệ Implant hiện đại, an toàn và bền vững.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
          <img
            src="https://nhakhoanganphuong.com/wp-content/uploads/2022/03/cay-ghep-implant-1.png"
            alt="Cấy ghép Implant"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold">Công nghệ Implant tiên tiến</h2>
            <p className="text-lg opacity-90">Phục hồi răng mất hoàn hảo</p>
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Ưu điểm vượt trội</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tại sao chọn Implant?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Implant là giải pháp tối ưu để thay thế răng mất với nhiều ưu điểm vượt trội.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="flex flex-col bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                  <advantage.icon className="h-6 w-6 flex-none text-primary-600" aria-hidden="true" />
                  {advantage.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{advantage.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Process */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Quy trình điều trị</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hành trình cấy ghép Implant
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quy trình điều trị chuẩn quốc tế, đảm bảo an toàn và hiệu quả tối đa.
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
      </div>

      {/* Technologies */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Công nghệ hiện đại</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trang thiết bị tiên tiến
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sử dụng những công nghệ mới nhất trong lĩnh vực cấy ghép Implant.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div
          className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {technologies.map((tech) => (
              <div key={tech.name} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-primary-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Khôi phục nụ cười hoàn hảo với Implant
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Hãy để chúng tôi giúp bạn có lại hàm răng hoàn chỉnh. Đội ngũ bác sĩ Implant chuyên môn cao luôn sẵn sàng tư vấn.
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

export default Implant 