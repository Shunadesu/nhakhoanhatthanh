import { Link } from "react-router-dom";
import { blogPosts } from "../../data";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function News() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Tin tức & Blog</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cập nhật mới nhất từ chúng tôi
          </p>
        </div>
        
        <div className="mt-16 relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="news-swiper"
          >
            {blogPosts.map((item) => (
              <SwiperSlide key={item.slug}>
                <Link to={`/news/${item.slug}`} className="flex flex-col bg-white rounded-2xl overflow-hidden  transition-shadow duration-300 h-full">
                  <div className="relative h-32 lg:h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-primary-100 px-1 lg:px-2.5 py-0.5 text-xs font-medium text-primary-800">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-2 lg:p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-primary-600">
                        <time dateTime={item.date}>
                          {new Date(item.date).toLocaleDateString('vi-VN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </p>
                      <p className="text-xl font-semibold text-gray-900 line-clamp-1">{item.title}</p>
                      <p className="mt-3 text-base text-gray-500 line-clamp-2">{item.description}</p>
                    </div>
                    <div className="mt-6">
                      <span className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500">
                        Đọc thêm <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          
       
        </div>
      </div>
      
      {/* Custom CSS for Swiper */}
      
    </div>
  );
}