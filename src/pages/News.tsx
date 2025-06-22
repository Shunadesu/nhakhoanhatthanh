import { Link } from 'react-router-dom';
import { useState } from 'react';
import { blogPosts } from '../data';
import { SEO } from '../components';

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        
        {/* Hiển thị thông tin phân trang */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Hiển thị {startIndex + 1}-{Math.min(endIndex, blogPosts.length)} trong tổng số {blogPosts.length} bài viết
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
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

        {/* Phân trang */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            {/* Nút Trang trước */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              ← Trước
            </button>

            {/* Các nút số trang */}
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              // Hiển thị tối đa 5 nút số trang
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === pageNumber
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              } else if (
                pageNumber === currentPage - 2 ||
                pageNumber === currentPage + 2
              ) {
                return (
                  <span key={pageNumber} className="px-2 py-2 text-gray-500">
                    ...
                  </span>
                );
              }
              return null;
            })}

            {/* Nút Trang sau */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              Sau →
            </button>
          </div>
        )}
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