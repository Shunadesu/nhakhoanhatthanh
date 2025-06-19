import { Link } from "react-router-dom";
import { services } from "../../data";

const ServicesShowCase = () => {
  return (
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
    <dl className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-4">
      {services.map((service) => (
        <div key={service.name} className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
          <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
            <service.icon className="h-10 w-10 flex-none text-primary-600" aria-hidden="true" />
          </dt>
          <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900 mt-4">
            {service.name}
          </dt>
          <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 items-center justify-center text-center">
            <p className="flex-auto">{service.description}</p>
            <p className="mt-6 flex justify-center">
              <Link to={service.href} className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500">
                Tìm hiểu thêm
              </Link>
            </p>
          </dd>
        </div>
      ))}
    </dl>
        </div>
      </div>
    </div>
  )
}

export default ServicesShowCase