import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const doctors = [
  {
    name: 'Bác sĩ Nguyễn Văn A',
    role: 'Giám đốc chuyên môn',
    imageUrl: '/doctors/doctor-1.jpg',
    bio: 'Bác sĩ Nguyễn Văn A có hơn 20 năm kinh nghiệm trong lĩnh vực nha khoa. Ông tốt nghiệp Đại học Y Dược TP.HCM và có chứng chỉ chuyên sâu về Implant từ Đại học Harvard.',
    specialties: ['Implant', 'Phẫu thuật nha khoa', 'Chỉnh nha'],
    contact: {
      email: 'doctor.a@dentalclinic.com',
      phone: '(028) 1234 5678',
    },
  },
  {
    name: 'Bác sĩ Trần Thị B',
    role: 'Bác sĩ chuyên khoa',
    imageUrl: '/doctors/doctor-2.jpg',
    bio: 'Bác sĩ Trần Thị B là chuyên gia về nha khoa thẩm mỹ với hơn 15 năm kinh nghiệm. Bà đã thực hiện thành công hàng nghìn ca điều trị thẩm mỹ răng.',
    specialties: ['Nha khoa thẩm mỹ', 'Tẩy trắng răng', 'Trám răng thẩm mỹ'],
    contact: {
      email: 'doctor.b@dentalclinic.com',
      phone: '(028) 1234 5679',
    },
  },
  {
    name: 'Bác sĩ Lê Văn C',
    role: 'Bác sĩ chuyên khoa',
    imageUrl: '/doctors/doctor-3.jpg',
    bio: 'Bác sĩ Lê Văn C là chuyên gia về chỉnh nha với hơn 10 năm kinh nghiệm. Ông đã giúp hàng nghìn bệnh nhân có được nụ cười đẹp và khỏe mạnh.',
    specialties: ['Chỉnh nha', 'Niềng răng', 'Điều trị hô móm'],
    contact: {
      email: 'doctor.c@dentalclinic.com',
      phone: '(028) 1234 5680',
    },
  },
  {
    name: 'Bác sĩ Phạm Thị D',
    role: 'Bác sĩ chuyên khoa',
    imageUrl: '/doctors/doctor-4.jpg',
    bio: 'Bác sĩ Phạm Thị D là chuyên gia về nha khoa tổng quát với hơn 12 năm kinh nghiệm. Bà luôn tận tâm trong việc chăm sóc sức khỏe răng miệng cho bệnh nhân.',
    specialties: ['Nha khoa tổng quát', 'Điều trị tủy', 'Nhổ răng khôn'],
    contact: {
      email: 'doctor.d@dentalclinic.com',
      phone: '(028) 1234 5681',
    },
  },
]

export default function Doctors() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Đội ngũ bác sĩ</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Đội ngũ bác sĩ của chúng tôi là những chuyên gia giàu kinh nghiệm, được đào tạo bài bản và thường xuyên cập nhật kiến thức.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {doctors.map((doctor) => (
            <li key={doctor.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={doctor.imageUrl} alt={doctor.name} />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{doctor.name}</h3>
              <p className="text-base leading-7 text-primary-600">{doctor.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{doctor.bio}</p>
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
              <div className="mt-6 flex gap-x-4">
                <a
                  href={`mailto:${doctor.contact.email}`}
                  className="rounded-full bg-white p-2.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={`tel:${doctor.contact.phone}`}
                  className="rounded-full bg-white p-2.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <span className="sr-only">Phone</span>
                  <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 