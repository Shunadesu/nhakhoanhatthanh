import { Link } from 'react-router-dom'
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: string;
  image: string;
}

const servicesData: Service[] = [
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
    image: '/services/consultation.jpg',
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
    image: '/services/cleaning.jpg',
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
    image: '/services/filling.jpg',
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
    image: '/services/whitening.jpg',
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
    image: '/services/implant.jpg',
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
    image: '/services/orthodontics.jpg',
  },
  {
    id: 'wisdom',
    name: 'Nhổ răng khôn',
    description: 'Nhổ răng khôn an toàn, không đau với công nghệ hiện đại.',
    features: [
      'Nhổ răng khôn không đau',
      'Sử dụng máy siêu âm',
      'Hạn chế biến chứng',
      'Chăm sóc sau nhổ răng',
    ],
    price: '2.000.000đ - 5.000.000đ',
    image: '/services/wisdom.jpg',
  },
  {
    id: 'root-canal',
    name: 'Điều trị tủy răng',
    description: 'Điều trị tủy răng chuyên sâu, bảo tồn răng thật tối đa.',
    features: [
      'Điều trị tủy không đau',
      'Sử dụng máy định vị chóp',
      'Trám bít ống tủy 3D',
      'Bảo hành 2 năm',
    ],
    price: '1.500.000đ - 3.000.000đ',
    image: '/services/root-canal.jpg',
  },
  {
    id: 'veneer',
    name: 'Dán sứ Veneer',
    description: 'Dán sứ veneer siêu mỏng, bảo tồn răng thật, thẩm mỹ tự nhiên.',
    features: [
      'Dán sứ siêu mỏng 0.3mm',
      'Không mài răng',
      'Thẩm mỹ tự nhiên',
      'Bảo hành 5 năm',
    ],
    price: '5.000.000đ - 8.000.000đ/răng',
    image: '/services/veneer.jpg',
  },
  {
    id: 'periodontal',
    name: 'Điều trị nha chu',
    description: 'Điều trị viêm nha chu chuyên sâu, bảo vệ răng và nướu.',
    features: [
      'Điều trị viêm nướu',
      'Làm sạch túi nha chu',
      'Ghép nướu thẩm mỹ',
      'Tư vấn chăm sóc tại nhà',
    ],
    price: '2.000.000đ - 8.000.000đ',
    image: '/services/periodontal.jpg',
  }
]

export { servicesData as services };

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

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
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 cursor-pointer hover:ring-primary-600 transition-all"
              onClick={() => setSelectedService(service)}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{service.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{service.description}</p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-primary-600 font-medium">Chi tiết</li>
                  )}
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-2xl font-semibold leading-8 text-gray-900">{service.price}</p>
                <Link
                  to="/appointment"
                  className="mt-6 block rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  onClick={(e) => e.stopPropagation()}
                >
                  Đặt lịch ngay
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {selectedService && (
        <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    onClick={() => setSelectedService(null)}
                  >
                    <span className="sr-only">Đóng</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-2xl font-semibold leading-6 text-gray-900 mb-4">
                      {selectedService.name}
                    </h3>
                    <div className="mt-2">
                      <div className="mb-6">
                        <img
                          src={selectedService.image}
                          alt={selectedService.name}
                          className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-lg text-gray-600 mb-6">{selectedService.description}</p>
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Chi tiết dịch vụ</h4>
                        <ul className="space-y-4">
                          {selectedService.features.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                              <CheckIcon className="h-6 w-5 flex-none text-primary-600 mt-1" aria-hidden="true" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Chi phí</h4>
                        <p className="text-2xl font-semibold text-primary-600">{selectedService.price}</p>
                      </div>
                      <div className="mt-8">
                        <Link
                          to="/appointment"
                          className="block w-full rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                        >
                          Đặt lịch ngay
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 