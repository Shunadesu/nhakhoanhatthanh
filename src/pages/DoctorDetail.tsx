import { PhoneIcon, ClockIcon, AcademicCapIcon, TrophyIcon, LanguageIcon } from '@heroicons/react/24/outline'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { getDoctorById } from '../data/doctor'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'

export default function DoctorDetail() {
  const { id } = useParams<{ id: string }>()
  const doctor = getDoctorById(id || '')

  if (!doctor) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Không tìm thấy bác sĩ</h1>
            <p className="mt-4 text-gray-600">Bác sĩ bạn đang tìm kiếm không tồn tại.</p>
            <Link
              to="/doctors"
              className="mt-6 inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Quay lại danh sách bác sĩ
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <Helmet>
        <title>{doctor.name} - {doctor.role} | Nha khoa Nhật Thanh</title>
        <meta name="description" content={doctor.description} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="flex items-center space-x-4 text-white mb-6">
            <Link
              to="/doctors"
              className="inline-flex items-center text-sm font-medium hover:text-primary-200"
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Quay lại danh sách bác sĩ
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <img
                className="w-64 h-64 mx-auto lg:mx-0 rounded-full object-cover shadow-lg"
                src={doctor.image}
                alt={doctor.name}
              />
            </div>
            
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-white mb-4">{doctor.name}</h1>
              <p className="text-xl text-primary-100 mb-6">{doctor.role}</p>
              <p className="text-lg text-white mb-6">{doctor.description}</p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-white">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  <span>{doctor.phone}</span>
                </div>
                <div className="flex items-center text-white">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  <span>{doctor.experience}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Giới thiệu</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="leading-relaxed">{doctor.detailedDescription}</p>
              </div>
            </section>

            {/* Specialties Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Chuyên môn</h2>
              <div className="flex flex-wrap gap-3">
                {doctor.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="inline-flex items-center rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </section>

            {/* Achievements Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Thành tựu</h2>
              <ul className="space-y-4">
                {doctor.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-600">{achievement}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Certifications Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Chứng chỉ & Bằng cấp</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {doctor.certifications.map((certification, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <AcademicCapIcon className="h-6 w-6 text-primary-600 mr-3" />
                      <span className="text-gray-700 font-medium">{certification}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Card */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Thông tin liên hệ</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">{doctor.phone}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">{doctor.workingHours}</span>
                </div>
                <div className="flex items-center">
                  <LanguageIcon className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">{doctor.languages.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Học vấn</h3>
              <div className="flex items-start">
                <AcademicCapIcon className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <p className="text-gray-700">{doctor.education}</p>
              </div>
            </div>

            {/* Awards Card */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Giải thưởng</h3>
              <ul className="space-y-3">
                {doctor.awards.map((award, index) => (
                  <li key={index} className="flex items-start">
                    <TrophyIcon className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700 text-sm">{award}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Book Appointment Button */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Đặt lịch khám</h3>
              <p className="text-primary-700 text-sm mb-4">
                Đặt lịch khám với {doctor.name} để được tư vấn và điều trị tốt nhất.
              </p>
              <Link
                to="/appointment"
                className="w-full inline-flex justify-center items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
              >
                Đặt lịch ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 