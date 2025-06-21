import { Link } from "react-router-dom";
import { testimonials } from "../../data";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
  
<div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-50 to-white">
<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
  <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
</div>

<div className="mx-auto w-full md:max-w-7xl px-6 pb-24 pt-10 sm:pb-32 md:flex items-center justify-between lg:px-8 lg:py-16">
  <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-xl lg:pt-8 flex flex-col items-center justify-center text-center md:text-left md:items-start md:justify-start">
    <div>
      <a href="#" className="inline-flex space-x-6">
        <span className="rounded-full bg-primary-500/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-500/20">
          Nha khoa chất lượng cao
        </span>
      </a>
    </div>
    <h1 className="mt-6 md:mt-10 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
      Nha Khoa <br /> <span className="shiny-text">Nhật Thanh</span>
    </h1>
    <p className="mt-6 text-lg leading-8 text-gray-600">
      Chăm sóc nụ cười của bạn với đội ngũ bác sĩ chuyên môn cao và trang thiết bị hiện đại. 
      Cam kết mang đến dịch vụ nha khoa chất lượng tốt nhất.
    </p>
    <div className="mt-10 flex items-center gap-x-6">
      <Link
        to="/appointment"
        className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      >
        Đặt lịch ngay
      </Link>
      <Link
        to="/services"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Xem dịch vụ <span aria-hidden="true">→</span>
      </Link>
    </div>
  </div>

  <div className="hidden md:flex  mx-auto mt-16 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0">
    <div className="md:h-[600px] md:w-[500px] h-[400px] w-[500px] flex-none rounded-2xl bg-white/5 shadow-2xl ring-1 ring-white/10 overflow-hidden">
      <div className='w-full h-full relative bg-white/5'>
        <Swiper
          modules={[ Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
         
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          className='w-full h-full'
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="w-full h-full">
              <div className="w-full h-full flex items-center justify-center relative">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className='w-full h-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
</div>
</div>

        )}