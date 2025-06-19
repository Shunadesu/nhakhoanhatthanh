import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface ImageModalProps {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = ({ images, initialIndex = 0, isOpen, onClose }: ImageModalProps) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
      >
        <XMarkIcon className="w-8 h-8" />
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-4 z-10 text-white text-lg font-medium">
        {activeIndex + 1} / {images.length}
      </div>

      {/* Swiper container */}
      <div className="w-full h-full max-w-6xl max-h-[90vh] p-4">
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          initialSlide={initialIndex}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
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
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !text-white !bg-black/50 !w-12 !h-12 !rounded-full !shadow-lg hover:!bg-black/70 transition-colors">
            <ChevronLeftIcon className="w-6 h-6" />
          </div>
          <div className="swiper-button-next !text-white !bg-black/50 !w-12 !h-12 !rounded-full !shadow-lg hover:!bg-black/70 transition-colors">
            <ChevronRightIcon className="w-6 h-6" />
          </div>
        </Swiper>
      </div>

      {/* Keyboard instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
        Sử dụng phím mũi tên hoặc click để điều hướng • ESC để đóng
      </div>
    </div>
  );
};

export default ImageModal; 