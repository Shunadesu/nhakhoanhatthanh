
import { Link } from 'react-router-dom';
import { blogPosts } from '../data';
import { SEO } from '../components';


const News = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Tin tức & Blog | Nha khoa Nhật Thanh"
        description="Tổng hợp các bài viết, tin tức, chia sẻ kinh nghiệm chăm sóc răng miệng từ Nha khoa Nhật Thanh."
      />
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