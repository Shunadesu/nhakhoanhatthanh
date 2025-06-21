import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  structuredData?: object
  noindex?: boolean
  canonical?: string
}

export default function SEO({
  title = 'Nha Khoa Nhật Thanh - Nha Khoa Uy Tín Tại TP.HCM | Chăm Sóc Nụ Cười Việt',
  description = 'Nha khoa Nhật Thanh - Đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại. Chuyên cấy ghép Implant, chỉnh nha, nha khoa thẩm mỹ. Đặt lịch khám ngay!',
  keywords = 'nha khoa nhật thanh, nha khoa tphcm, cấy ghép implant, chỉnh nha, nha khoa thẩm mỹ, tẩy trắng răng, dán sứ veneer, điều trị tủy, nha khoa trẻ em',
  image = '/src/assets/img/nhakhoanhatthanh.jpg',
  url = 'https://nhakhoanhatthanh.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Nha Khoa Nhật Thanh',
  section,
  tags = [],
  structuredData,
  noindex = false,
  canonical
}: SEOProps) {
  const siteName = 'Nha Khoa Nhật Thanh'
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`
  const fullUrl = canonical || `${url}${window.location.pathname}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="vi_VN" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

// Predefined SEO configurations for different page types
export const SEOConfigs = {
  home: {
    title: 'Nha Khoa Nhật Thanh - Nha Khoa Uy Tín Tại TP.HCM | Chăm Sóc Nụ Cười Việt',
    description: 'Nha khoa Nhật Thanh - Đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại. Chuyên cấy ghép Implant, chỉnh nha, nha khoa thẩm mỹ. Đặt lịch khám ngay!',
    keywords: 'nha khoa nhật thanh, nha khoa tphcm, cấy ghép implant, chỉnh nha, nha khoa thẩm mỹ',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Nha Khoa Nhật Thanh",
      "url": "https://nhakhoanhatthanh.com",
      "description": "Nha khoa uy tín tại TP.HCM với đội ngũ bác sĩ chuyên môn cao",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://nhakhoanhatthanh.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },
  
  services: {
    title: 'Dịch Vụ Nha Khoa | Cấy Ghép Implant, Chỉnh Nha, Nha Khoa Thẩm Mỹ',
    description: 'Dịch vụ nha khoa toàn diện: cấy ghép Implant, chỉnh nha, nha khoa thẩm mỹ, tẩy trắng răng, dán sứ Veneer. Đội ngũ bác sĩ chuyên môn cao.',
    keywords: 'dịch vụ nha khoa, cấy ghép implant, chỉnh nha, nha khoa thẩm mỹ, tẩy trắng răng',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Dịch Vụ Nha Khoa",
      "description": "Dịch vụ nha khoa toàn diện tại Nha Khoa Nhật Thanh",
      "provider": {
        "@type": "Dentist",
        "name": "Nha Khoa Nhật Thanh"
      },
      "serviceType": ["Cấy ghép Implant", "Chỉnh nha", "Nha khoa thẩm mỹ", "Điều trị tủy"]
    }
  },
  
  doctors: {
    title: 'Đội Ngũ Bác Sĩ | Nha Khoa Nhật Thanh - Chuyên Gia Hàng Đầu',
    description: 'Đội ngũ bác sĩ chuyên môn cao tại Nha Khoa Nhật Thanh. Chuyên gia về cấy ghép Implant, chỉnh nha, nha khoa thẩm mỹ với nhiều năm kinh nghiệm.',
    keywords: 'bác sĩ nha khoa, đội ngũ bác sĩ, chuyên gia nha khoa, bác sĩ implant',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Nha Khoa Nhật Thanh",
      "description": "Đội ngũ bác sĩ chuyên môn cao",
      "medicalSpecialty": ["Dentistry", "Orthodontics", "Dental Implants"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dịch vụ nha khoa",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cấy ghép Implant"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Chỉnh nha"
            }
          }
        ]
      }
    }
  },
  
  contact: {
    title: 'Liên Hệ | Nha Khoa Nhật Thanh - Đặt Lịch Khám Ngay',
    description: 'Liên hệ Nha Khoa Nhật Thanh để đặt lịch khám. Hotline: 0909 876 287. Địa chỉ: TP.HCM. Tư vấn miễn phí, đặt lịch nhanh chóng.',
    keywords: 'liên hệ nha khoa, đặt lịch khám, hotline nha khoa, địa chỉ nha khoa',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Liên Hệ Nha Khoa Nhật Thanh",
      "description": "Thông tin liên hệ và đặt lịch khám",
      "mainEntity": {
        "@type": "Organization",
        "name": "Nha Khoa Nhật Thanh",
        "telephone": "+84-909-876-287",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Thành phố Hồ Chí Minh",
          "addressRegion": "TP.HCM",
          "addressCountry": "VN"
        }
      }
    }
  }
} 