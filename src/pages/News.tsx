import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const blogPosts = [
  {
    slug: 'quy-trinh-kham-va-dieu-tri-tai-nha-khoa-nhat-thanh',
    title: 'Quy trình khám và điều trị tại Nha khoa Nhật Thanh',
    description: 'Tìm hiểu quy trình khám và điều trị chuẩn quốc tế tại Nha khoa Nhật Thanh, giúp bạn an tâm khi trải nghiệm dịch vụ.',
    image: '/news/news-1.jpg',
    date: '2024-04-01',
  },
  {
    slug: 'chi-phi-dieu-tri-nha-khoa-va-bao-hiem-y-te',
    title: 'Chi phí điều trị nha khoa và bảo hiểm y tế: Những điều bạn cần biết',
    description: 'Giải đáp thắc mắc về chi phí điều trị nha khoa và quyền lợi bảo hiểm y tế tại Nha khoa Nhật Thanh.',
    image: '/news/news-2.jpg',
    date: '2024-04-02',
  },
  {
    slug: 'thoi-gian-dieu-tri-nha-khoa-phu-thuoc-vao-nhung-yeu-to-nao',
    title: 'Thời gian điều trị nha khoa: Phụ thuộc vào những yếu tố nào?',
    description: 'Tìm hiểu các yếu tố ảnh hưởng đến thời gian điều trị nha khoa và cách tối ưu quá trình điều trị tại Nha khoa Nhật Thanh.',
    image: '/news/news-3.jpg',
    date: '2024-04-03',
  },
  {
    slug: 'loi-ich-kham-rang-dinh-ky',
    title: 'Lợi ích của việc khám răng định kỳ',
    description: 'Khám răng định kỳ giúp phát hiện sớm các vấn đề và bảo vệ sức khỏe răng miệng lâu dài.',
    image: '/news/news-4.jpg',
    date: '2024-04-04',
  },
  {
    slug: 'cong-nghe-moi-trong-nha-khoa',
    title: 'Công nghệ mới trong nha khoa',
    description: 'Khám phá các công nghệ hiện đại đang được ứng dụng tại Nha khoa Nhật Thanh.',
    image: '/news/news-5.jpg',
    date: '2024-04-05',
  },
  {
    slug: 'huong-dan-cham-soc-rang-sau-dieu-tri',
    title: 'Hướng dẫn chăm sóc răng sau điều trị',
    description: 'Những lưu ý quan trọng giúp bạn giữ gìn kết quả điều trị nha khoa lâu dài.',
    image: '/news/news-6.jpg',
    date: '2024-04-06',
  },
  {
    slug: 'dich-vu-tay-trang-rang-an-toan',
    title: 'Dịch vụ tẩy trắng răng an toàn',
    description: 'Tìm hiểu quy trình và lợi ích của tẩy trắng răng tại Nha khoa Nhật Thanh.',
    image: '/news/news-7.jpg',
    date: '2024-04-07',
  },
  {
    slug: 'nhung-dieu-can-biet-ve-nieng-rang',
    title: 'Những điều cần biết về niềng răng',
    description: 'Giải đáp các thắc mắc thường gặp về niềng răng thẩm mỹ.',
    image: '/news/news-8.jpg',
    date: '2024-04-08',
  },
  // Có thể thêm nhiều bài hơn nếu muốn
];

const News = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Tin tức & Blog | Nha khoa Nhật Thanh</title>
        <meta name="description" content="Tổng hợp các bài viết, tin tức, chia sẻ kinh nghiệm chăm sóc răng miệng từ Nha khoa Nhật Thanh." />
        <meta property="og:title" content="Tin tức & Blog | Nha khoa Nhật Thanh" />
        <meta property="og:description" content="Tổng hợp các bài viết, tin tức, chia sẻ kinh nghiệm chăm sóc răng miệng từ Nha khoa Nhật Thanh." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-6 text-center">Tin tức & Blog</h1>
        <p className="text-lg text-gray-600 mb-10 text-center">
          Tổng hợp các bài viết, tin tức, chia sẻ kinh nghiệm chăm sóc răng miệng từ Nha khoa Nhật Thanh.<br/>
          <span className="block mt-2 text-sm text-gray-400">Liên hệ: 37A Nguyễn Văn Đậu, Quận Bình Thạnh, TP. Hồ Chí Minh | 090 987 62 87 | Thanhtu231082@gmail.com</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl shadow-lg border border-primary-100 hover:shadow-2xl transition-shadow flex flex-col">
              <Link to={`/news/${post.slug}`} className="block overflow-hidden rounded-t-2xl">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover object-center transition-transform duration-300 hover:scale-105" loading="lazy" />
              </Link>
              <div className="flex-1 flex flex-col p-6">
                <div className="flex items-center text-xs text-primary-600 mb-2">
                  <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                </div>
                <h2 className="text-xl font-bold text-primary-700 mb-2">
                  <Link to={`/news/${post.slug}`} className="hover:underline">{post.title}</Link>
                </h2>
                <p className="text-gray-500 mb-4 flex-1">{post.description}</p>
                <Link
                  to={`/news/${post.slug}`}
                  className="inline-block text-primary-600 font-semibold hover:underline mt-auto"
                >
                  Đọc chi tiết →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* Schema.org structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          'name': 'Tin tức & Blog | Nha khoa Nhật Thanh',
          'description': 'Tổng hợp các bài viết, tin tức, chia sẻ kinh nghiệm chăm sóc răng miệng từ Nha khoa Nhật Thanh.',
          'blogPost': blogPosts.map(post => ({
            '@type': 'BlogPosting',
            'headline': post.title,
            'datePublished': post.date,
            'description': post.description,
            'url': `/news/${post.slug}`,
            'image': post.image
          }))
        })
      }} />
    </div>
  );
};

export default News; 