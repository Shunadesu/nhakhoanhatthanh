import { useState } from 'react'
import { CalendarIcon, ClockIcon, UserIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'

const services = [
  { id: 'consultation', name: 'Khám và tư vấn' },
  { id: 'cleaning', name: 'Cạo vôi răng' },
  { id: 'filling', name: 'Trám răng thẩm mỹ' },
  { id: 'whitening', name: 'Tẩy trắng răng' },
  { id: 'implant', name: 'Cấy ghép Implant' },
  { id: 'orthodontics', name: 'Chỉnh nha' },
]

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
]

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    note: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ và tên'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại'
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ'
    }

    if (!formData.service) {
      newErrors.service = 'Vui lòng chọn dịch vụ'
    }

    if (!formData.date) {
      newErrors.date = 'Vui lòng chọn ngày hẹn'
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.date = 'Ngày hẹn không thể là ngày trong quá khứ'
      }
    }

    if (!formData.time) {
      newErrors.time = 'Vui lòng chọn giờ hẹn'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const getServiceName = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId)
    return service ? service.name : serviceId
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: getServiceName(formData.service),
        date: new Date(formData.date).toLocaleDateString('vi-VN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        time: formData.time,
        note: formData.note || 'Không có ghi chú',
        time_submitted: new Date().toLocaleString('vi-VN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        to_email: 'nhakhoanhatthanh1806@gmail.com',
      }

      const result = await emailjs.send(
        'service_ys3us6s',
        'template_qfls024', // Template ID cho đặt lịch hẹn
        templateParams,
        'sUL415xmNnQIopZq4'
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          date: '',
          time: '',
          note: '',
        })
        setErrors({})
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <Helmet>
        <title>Đặt lịch hẹn | Nha khoa Nhật Thanh</title>
        <meta name="description" content="Đặt hẹn Nha khoa Nhật Thanh ngay - Đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại, sứ mệnh chăm sóc nụ cười Việt." />
      </Helmet>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Đặt lịch hẹn</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Vui lòng điền thông tin bên dưới để đặt lịch hẹn với chúng tôi. Chúng tôi sẽ liên hệ lại để xác nhận lịch hẹn của bạn.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Đặt lịch hẹn thành công! Chúng tôi sẽ liên hệ lại để xác nhận lịch hẹn của bạn trong thời gian sớm nhất.
                  </p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">
                    Có lỗi xảy ra khi đặt lịch hẹn. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua điện thoại 090 987 62 87.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                Họ và tên *
              </label>
              <div className="mt-2.5">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ${
                      errors.name ? 'ring-red-300 focus:ring-red-500' : 'ring-gray-300 focus:ring-primary-600'
                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                Số điện thoại *
              </label>
              <div className="mt-2.5">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ${
                      errors.phone ? 'ring-red-300 focus:ring-red-500' : 'ring-gray-300 focus:ring-primary-600'
                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email *
              </label>
              <div className="mt-2.5">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ${
                      errors.email ? 'ring-red-300 focus:ring-red-500' : 'ring-gray-300 focus:ring-primary-600'
                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="service" className="block text-sm font-semibold leading-6 text-gray-900">
                Dịch vụ *
              </label>
              <div className="mt-2.5">
                <select
                  name="service"
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.service ? 'ring-red-300 focus:ring-red-500' : 'ring-gray-300 focus:ring-primary-600'
                  } focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                >
                  <option value="">Chọn dịch vụ</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">{errors.service}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-semibold leading-6 text-gray-900">
                Ngày hẹn *
              </label>
              <div className="mt-2.5">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ${
                      errors.date ? 'ring-red-300 focus:ring-red-500' : 'ring-gray-300 focus:ring-primary-600'
                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                  />
                </div>
                {errors.date && (
                  <p className="mt-1 text-sm text-red-600">{errors.date}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-semibold leading-6 text-gray-900">
                Giờ hẹn *
              </label>
              <div className="mt-2.5">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <ClockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <select
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ${
                      errors.time ? 'ring-red-300 focus:ring-red-500' : 'ring-gray-300 focus:ring-primary-600'
                    } focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                  >
                    <option value="">Chọn giờ</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.time && (
                  <p className="mt-1 text-sm text-red-600">{errors.time}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="note" className="block text-sm font-semibold leading-6 text-gray-900">
                Ghi chú
              </label>
              <div className="mt-2.5">
                <textarea
                  name="note"
                  id="note"
                  rows={4}
                  value={formData.note}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  placeholder="Mô tả thêm về tình trạng răng miệng hoặc yêu cầu đặc biệt..."
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={isLoading}
              className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-500'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Đang đặt lịch...
                </div>
              ) : (
                'Đặt lịch hẹn'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 