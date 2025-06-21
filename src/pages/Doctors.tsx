import { Helmet } from 'react-helmet-async'
import { doctors } from '../data'
import { Link } from 'react-router-dom'

export default function Doctors() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Helmet>
        <title>Đội ngũ Bác Sĩ | Nha khoa Nhật Thanh</title>
        <meta name="description" content="Nha khoa Nhật Thanh - Đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại, sứ mệnh chăm sóc nụ cười Việt." />
      </Helmet>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Đội ngũ bác sĩ</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Đội ngũ bác sĩ của chúng tôi là những chuyên gia giàu kinh nghiệm, được đào tạo bài bản và thường xuyên cập nhật kiến thức.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {doctors.map((doctor) => (
            <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
              <img className="aspect-[3/2] w-full rounded-2xl object-contain" src={doctor.image} alt={doctor.name} />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{doctor.name}</h3>
              <p className="text-base leading-7 text-primary-600">{doctor.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{doctor.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-900">Chuyên môn</h4>
                <ul role="list" className="mt-2 flex flex-wrap gap-2">
                  {doctor.specialties.map((specialty) => (
                    <li
                      key={specialty}
                      className="rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-600"
                    >
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
              
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
} 