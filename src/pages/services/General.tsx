import { Link } from 'react-router-dom'
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon,
  CheckCircleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/solid'

const General = () => {
  const benefits = [
    {
      title: 'Khám tổng quát răng miệng',
      description: 'Kiểm tra toàn diện sức khỏe răng miệng, phát hiện sớm các vấn đề tiềm ẩn.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Vệ sinh răng miệng chuyên nghiệp',
      description: 'Làm sạch cao răng, mảng bám và tư vấn cách chăm sóc răng miệng đúng cách.',
      icon: HeartIcon,
    },
    {
      title: 'Điều trị sâu răng',
      description: 'Trám răng thẩm mỹ, điều trị sâu răng với công nghệ hiện đại, không đau.',
      icon: CheckCircleIcon,
    },
    {
      title: 'Điều trị viêm nướu',
      description: 'Chữa trị các bệnh về nướu, viêm lợi và các vấn đề về mô mềm.',
      icon: UserGroupIcon,
    },
  ]

  const procedures = [
    {
      step: '01',
      title: 'Khám và chẩn đoán',
      description: 'Bác sĩ sẽ khám tổng quát và chụp X-quang để đánh giá tình trạng răng miệng.',
      duration: '30 phút'
    },
    {
      step: '02',
      title: 'Tư vấn điều trị',
      description: 'Bác sĩ sẽ giải thích chi tiết về tình trạng và đưa ra phương án điều trị phù hợp.',
      duration: '20 phút'
    },
    {
      step: '03',
      title: 'Thực hiện điều trị',
      description: 'Quá trình điều trị được thực hiện với trang thiết bị hiện đại, đảm bảo an toàn.',
      duration: '60-90 phút'
    },
    {
      step: '04',
      title: 'Hướng dẫn chăm sóc',
      description: 'Hướng dẫn chi tiết cách chăm sóc răng miệng sau điều trị.',
      duration: '15 phút'
    }
  ]

  return (
    <div className="bg-white">
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
              Nha khoa tổng quát
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Chăm sóc sức khỏe răng miệng toàn diện với đội ngũ bác sĩ chuyên môn cao và trang thiết bị hiện đại.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
            alt="Nha khoa tổng quát"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold">Chăm sóc răng miệng toàn diện</h2>
            <p className="text-lg opacity-90">Đội ngũ bác sĩ giàu kinh nghiệm</p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Dịch vụ của chúng tôi</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Những gì chúng tôi cung cấp
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Chúng tôi cung cấp đầy đủ các dịch vụ nha khoa tổng quát, từ khám định kỳ đến điều trị các vấn đề phức tạp.
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

      {/* Process */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Quy trình điều trị</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hành trình chăm sóc răng miệng
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quy trình điều trị chuẩn quốc tế, đảm bảo an toàn và hiệu quả tối đa.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {procedures.map((procedure, index) => (
                <div key={procedure.step} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 mb-4">
                      <span className="text-2xl font-bold text-primary-600">{procedure.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{procedure.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{procedure.description}</p>
                    <div className="flex items-center gap-1 text-sm text-primary-600">
                      <ClockIcon className="h-4 w-4" />
                      <span>{procedure.duration}</span>
                    </div>
                  </div>
                  {index < procedures.length - 1 && (
                    <div className="absolute top-8 left-1/2 -ml-px h-0.5 w-full bg-primary-100 lg:block" />
                  )}
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
              Đặt lịch khám ngay hôm nay
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Hãy để chúng tôi chăm sóc sức khỏe răng miệng của bạn. Đội ngũ bác sĩ chuyên môn cao luôn sẵn sàng phục vụ.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/appointment"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Đặt lịch khám
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-white">
                Liên hệ tư vấn <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default General 