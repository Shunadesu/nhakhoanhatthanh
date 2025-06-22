import { Link } from "react-router-dom";
import { doctors } from "../../data";
import { AcademicCapIcon, StarIcon } from "@heroicons/react/24/outline";

export default function Doctors() {
  return (
<div className="bg-gray-50 py-24 sm:py-28">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-base font-semibold leading-7 text-primary-600">Đội ngũ bác sĩ</h2>
    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Gặp gỡ đội ngũ chuyên gia của chúng tôi
    </p>
    <p className="mt-6 text-sm lg:text-lg leading-8 text-gray-600">
      Đội ngũ bác sĩ giàu kinh nghiệm, được đào tạo chuyên sâu và luôn tận tâm với nghề.
    </p>
  </div>
  <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    {doctors.map((doctor) => (
      <Link to={`/doctors/${doctor.id}`} key={doctor.id} className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="absolute inset-0 h-full w-full object-contain"
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
      </Link>
    ))}
  </div>
</div>
</div>
)
}