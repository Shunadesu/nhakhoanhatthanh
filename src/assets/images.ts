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
import logo from './img/logo.jpeg'
import logoWhite from './img/logo-removebg-preview.png'
import favicon from './img/logo.jpeg'

import feedbackThanks from './img/common/img-fb-txt.png'

// Doctor
import doctor1 from './img/doctor/Doctor_nah.png'
import doctor2 from './img/doctor/Doctor_ThanhTu.png'
import doctor3 from './img/doctor/Doctor_xinhdep.png'
import doctor4 from './img/doctor/Doctor_xinhdep-1.png'
import doctor5 from './img/doctor/Doctor_xinhdep-2.png'
import zaloQR from './img/zalo/Zalo.jpg'
import zaloicon from './img/zalo/Icon_of_Zalo.svg.webp'

//service
import khamvatuvan from './img/services/khamvatuvan.jpg'
import caovoirang from './img/services/caovoirang.jpg'
import tramrang from './img/services/tramrangthammy.png'
import taytrangrang from './img/services/taytrangrang.jpg'
import cayghepimplant from './img/services/cayghepimplant.jpg'
import chinhnha from './img/services/chinhnha.jpeg'
import nhorangkhon from './img/services/nhorangkhon.jpeg'
import dieutrituyrang from './img/services/dieutrituyrang.jpeg'
import dansuveneer from './img/services/dansuveneer.jpeg'
import viemnhachu from './img/services/viemnhachu.jpeg'
import conebean from './img/services/conebean.jpg'
import implantThuySi from './img/services/implantThuySi.webp'
import phauthuatitxamlan from './img/services/phauthuatitxamlan.jpg'
import taytrangrang1 from './img/services/taytrangrangco.jpg'
import bocrangsuco from './img/services/bocrangsuco.jpg'

// gallery
import phongkhamhiendai from './img/gallery/phongkhamhiendai.jpg'
import trangthietbitientien from './img/gallery/trangthietbitientien.webp'
import quytrinhdieutri from './img/gallery/quytrinhdieutri.webp'
import doinguchuyenmon from './img/gallery/doinguchuyenmon.jpg'
import ketquadiutri from './img/gallery/ketquadieutri.jpg'
import khonggiancho from './img/gallery/khonggiancho.jpeg'

//news
import chamsocrangmieng from './img/news/chamsocrangmieng.jpeg'
import chiphidieutri from './img/news/chiphidieutri.jpg'
import congnghenhakhoa from './img/news/congnghenhakhoa.jpg'
import niengrang from './img/news/nieng-rang-va-nhung-dieu-can-biet.jpg'
import quytrinhthamkham from './img/news/quytrinhthamkham.png'
import tamquantrongkhamrang from './img/news/tamquantrongkhamrang.jpg'
import taytrangrangnews from './img/news/taytrangrang.png'
import thoigiandieutri from './img/news/thoigiandieutri.jpg'


// Import tất cả ảnh trong dự án
export const images = {
  // Hero image
  nhakhoanhatthanh,
  common: {
    feedbackThanks,
  },
  zalo:{
    zaloQR,
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
    khamvatuvan,
    caovoirang,
    tramrang,
    taytrangrang,
    cayghepimplant,
    chinhnha,
    nhorangkhon,
    dieutrituyrang,
    dansuveneer,
    viemnhachu,
    taytrangrang1,
    bocrangsuco,
    conebean,
    implantThuySi,
    phauthuatitxamlan,
  },
  gallery: {
    phongkhamhiendai,
    trangthietbitientien,
    quytrinhdieutri,
    doinguchuyenmon,
    ketquadiutri,
    khonggiancho,
  },

  news: {
    chamsocrangmieng,
    chiphidieutri,
    congnghenhakhoa,
    niengrang,
    quytrinhthamkham,
    tamquantrongkhamrang,
    taytrangrangnews,
    thoigiandieutri,
  },
  // Logo và icons
  logo,
  logoWhite,
  favicon,
  zaloicon,
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