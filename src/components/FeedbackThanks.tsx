import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Keyboard } from 'swiper/modules';
import { testimonials } from '../data/testimonials';
import { images } from '../assets/images';
import { XMarkIcon } from '@heroicons/react/24/outline';

const CustomerThanksSwiper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setCurrentSlideIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="bg-primary-200 w-full relative p-4 md:p-8 flex items-center md:items-stretch justify-between gap-6 overflow-hidden">
        <div className="w-full h-[200px] md:h-full md:w-1/5 flex items-center md:items-start justify-center text-center md:text-left">
          <img src={images.common.feedbackThanks} alt="feedback-thanks" className='w-full h-full object-contain' />
        </div>
        {/* CTA section */}
        <div className="w-full md:w-4/5 flex-shrink-0 flex items-center max-w-4xl mx-auto relative">
          <Swiper
            spaceBetween={24}
            slidesPerView={4}
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            
            className="w-full"
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={testimonial.image}
                  alt={`Khách hàng ${idx + 1}`}
                  className="rounded-lg border-4 border-white shadow-lg object-cover w-full h-56 cursor-pointer transition-transform duration-300"
                  onClick={() => handleImageClick(idx)}
                />
              </SwiperSlide>
            ))}
            
           
          </Swiper>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,0V46.29c47.29,22,104.09,29,158,17.39C267.09,44.8,327.09,0,385,0s118,44.8,177,63.68C627.09,82.56,687.09,63.68,745,46.29c55.91-16.6,112.71-9.6,158,17.39V0Z" opacity=".25" className="fill-white" />
            <path d="M0,0V15.81C47.29,37.8,104.09,44.8,158,33.19C267.09,10.8,327.09,0,385,0s118,10.8,177,18.68C627.09,26.56,687.09,18.68,745,11.29c55.91-7.6,112.71-0.6,158,17.39V0Z" opacity=".5" className="fill-white" />
            <path d="M0,0V5.81C47.29,27.8,104.09,34.8,158,23.19C267.09,0.8,327.09,0,385,0s118,0.8,177,8.68C627.09,16.56,687.09,8.68,745,1.29c55.91-7.6,112.71-0.6,158,17.39V0Z" className="fill-white" />
          </svg>
        </div>
      </div>
     
      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={closeModal}>
          <div className="w-full h-full max-w-6xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 z-10 text-white text-lg font-medium bg-black/50 px-3 py-1 rounded-full">
              {currentSlideIndex + 1} / {testimonials.length}
            </div>

            {/* Swiper for modal */}
            <Swiper
              modules={[ Pagination, Keyboard]}
              
              initialSlide={selectedImageIndex}
              
              pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 5
              }}
              keyboard={{
                enabled: true,
                onlyInViewport: true,
              }}
              loop={true}
              className="w-full h-full"
              onSlideChange={(swiper) => {
                setCurrentSlideIndex(swiper.realIndex);
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={`Khách hàng ${index + 1}`}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
         
        </div>
      )}
    </>
  );
};

export default CustomerThanksSwiper;