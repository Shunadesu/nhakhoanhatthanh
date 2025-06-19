import nhakhoanhatthanh from './img/nhakhoanhatthanh.jpg'

import customer1 from './img/customer/customer-1.jpg'
import customer2 from './img/customer/customer-2.jpg'
import customer3 from './img/customer/customer-3.jpg'
import customer4 from './img/customer/customer-4.jpg'
import customer5 from './img/customer/customer-5.jpg'
import customer6 from './img/customer/customer-6.jpg'
import customer7 from './img/customer/customer-7.jpg'
import customer8 from './img/customer/customer-8.jpg'
import customer9 from './img/customer/customer-9.jpg'
import customer10 from './img/customer/customer-10.jpg'
import customer11 from './img/customer/customer-11.jpg'
import customer12 from './img/customer/customer-12.jpg'
import customerVip from './img/customer/customer-vip.jpg'

import feedbackThanks from './img/common/img-fb-txt.png'

// Doctor
import doctor1 from './img/doctor/Doctor_nah.png'
import doctor2 from './img/doctor/Doctor_ThanhTu.png'
import doctor3 from './img/doctor/Doctor_xinhdep.png'
import doctor4 from './img/doctor/Doctor_xinhdep-1.png'
import doctor5 from './img/doctor/Doctor_xinhdep-2.png'

// Import tất cả ảnh trong dự án
export const images = {
  // Hero image
  nhakhoanhatthanh,
  common: {
    feedbackThanks,
  },
  // Doctor images
  doctors: {
    doctor1,
    doctor2,
    doctor3,
    doctor4,
    doctor5,
  },
  
  // Customer images
  customers: {
    customer1,
    customer2,
    customer3,
    customer4,
    customer5,
    customer6,
    customer7,
    customer8,
    customer9,
    customer10,
    customer11,
    customer12,
    customerVip
  },
  
  // Service images (nếu có)
  services: {
    general: '/services/general-dentistry.jpg',
    cosmetic: '/services/cosmetic-dentistry.jpg',
    orthodontics: '/services/orthodontics.jpg',
    surgery: '/services/oral-surgery.jpg',
    implant: '/services/dental-implant.jpg',
    whitening: '/services/teeth-whitening.jpg',
  },
  
  // Logo và icons
  logo: '/logo.png',
  favicon: '/favicon.ico',
  
  // Background images
  backgrounds: {
    pattern: '/backgrounds/pattern.jpg',
    texture: '/backgrounds/texture.jpg',
  }
} as const

// Type cho images
export type ImageKey = keyof typeof images
export type DoctorImageKey = keyof typeof images.doctors
export type CustomerImageKey = keyof typeof images.customers
export type ServiceImageKey = keyof typeof images.services 