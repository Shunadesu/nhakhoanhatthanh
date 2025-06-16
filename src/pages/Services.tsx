import { Link } from 'react-router-dom'
import { CheckIcon } from '@heroicons/react/20/solid'

const services = [
  {
    id: 'consultation',
    name: 'Khám và tư vấn',
    description: 'Khám tổng quát và tư vấn điều trị phù hợp với tình trạng răng miệng.',
    features: [
      'Khám tổng quát răng miệng',
      'Chụp X-quang nếu cần thiết',
      'Tư vấn điều trị chi tiết',
      'Lên kế hoạch điều trị',
    ],
    price: 'Miễn phí',
  },
  {
    id: 'cleaning',
    name: 'Cạo vôi răng',
    description: 'Làm sạch mảng bám và vôi răng, giúp răng chắc khỏe và trắng sáng.',
    features: [
      'Cạo vôi răng bằng máy siêu âm',
      'Đánh bóng răng',
      'Hướng dẫn chăm sóc răng miệng',
      'Kiểm tra sức khỏe nướu',
    ],
    price: '500.000đ - 1.000.000đ',
  },
  {
    id: 'filling',
    name: 'Trám răng thẩm mỹ',
    description: 'Phục hồi răng bị sâu, mẻ với vật liệu thẩm mỹ cao cấp.',
    features: [
      'Trám răng bằng composite',
      'Điều trị sâu răng',
      'Phục hồi thẩm mỹ',
      'Bảo hành 2 năm',
    ],
    price: '800.000đ - 2.000.000đ',
  },
  {
    id: 'whitening',
    name: 'Tẩy trắng răng',
    description: 'Làm trắng răng an toàn với công nghệ hiện đại.',
    features: [
      'Tẩy trắng răng tại phòng khám',
      'Tẩy trắng răng tại nhà',
      'Không ê buốt',
      'Hiệu quả lâu dài',
    ],
    price: '2.000.000đ - 5.000.000đ',
  },
  {
    id: 'implant',
    name: 'Cấy ghép Implant',
    description: 'Phục hồi răng đã mất với công nghệ Implant hiện đại.',
    features: [
      'Cấy ghép Implant',
      'Phục hình răng sứ',
      'Bảo hành trọn đời',
      'Không đau, không sưng',
    ],
    price: '15.000.000đ - 30.000.000đ',
  },
  {
    id: 'orthodontics',
    name: 'Chỉnh nha',
    description: 'Điều chỉnh răng lệch lạc, hô móm với các phương pháp chỉnh nha hiện đại.',
    features: [
      'Niềng răng mắc cài',
      'Niềng răng trong suốt',
      'Điều trị hô móm',
      'Tư vấn miễn phí',
    ],
    price: '25.000.000đ - 80.000.000đ',
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Dịch vụ của chúng tôi</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Chăm sóc toàn diện cho răng miệng
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Chúng tôi cung cấp đầy đủ các dịch vụ nha khoa từ cơ bản đến chuyên sâu, đáp ứng mọi nhu cầu của bạn.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{service.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{service.description}</p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-2xl font-semibold leading-8 text-gray-900">{service.price}</p>
                <Link
                  to="/appointment"
                  className="mt-6 block rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Đặt lịch ngay
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 