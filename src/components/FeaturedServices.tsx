import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FaTooth } from 'react-icons/fa';
import { services } from '../pages/Services';

export default function FeaturedServices() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary-700 mb-10 uppercase">Các dịch vụ nổi bật</h2>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={32}
          initialSlide={Math.floor(services.length / 2)}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          loop={true}
          
          modules={[EffectCoverflow]}
          className="w-full"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="flex flex-col items-center">
                <div className="w-full h-72 rounded-t-2xl overflow-hidden shadow-lg">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                </div>
                <div className="relative w-full bg-primary-700 rounded-b-2xl px-6 pt-6 pb-8 flex flex-col items-start shadow-lg min-h-[220px]">
                  <div className="text-xs font-semibold text-white uppercase mb-1 tracking-widest">{service.name}</div>
                  <div className="text-base font-medium text-yellow-300 mb-2">{service.description}</div>
                  <div className="text-white text-sm mb-2 line-clamp-2">{service.features && service.features.join(' • ')}</div>
                  <div className="text-lg font-bold text-white mb-2">{service.price}</div>
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md border-4 border-yellow-300">
                    <FaTooth className="text-yellow-400 text-3xl" />
                  </div>
                  <div className="absolute right-6 -top-8 bg-white rounded-full border-4 border-white shadow-md">
                    <img src={service.image} alt={service.name} className="w-16 h-16 object-cover rounded-full" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 