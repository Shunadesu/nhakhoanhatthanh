import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { blogPosts } from '../data';
import SEO from '../components/SEO';

const NewsDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((b) => b.slug === slug);

  // Handle reading progress and interactive features
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      const progressBar = document.getElementById('reading-progress');
      if (progressBar) {
        progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all prose elements
    const proseElements = document.querySelectorAll('.enhanced-prose > *');
    proseElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
    };
  }, [post]);

  if (!post) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Bài viết không tồn tại</h1>
            <p className="mt-4 text-gray-600">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <Link 
              to="/news" 
              className="mt-6 inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
            >
              Quay lại Tin tức & Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <SEO 
        title={post.title}
        description={post.description}
        keywords={`nha khoa nhật thanh, ${post.category?.toLowerCase()}, ${post.title.toLowerCase()}`}
        image={post.image}
        type="article"
        publishedTime={post.date}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "image": post.image,
          "datePublished": post.date,
          "dateModified": post.date,
          "author": {
            "@type": "Organization",
            "name": "Nha Khoa Nhật Thanh"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Nha Khoa Nhật Thanh",
            "logo": {
              "@type": "ImageObject",
              "url": "https://nhakhoanhatthanh.com/src/assets/img/logo.jpeg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://nhakhoanhatthanh.com/news/${post.slug}`
          }
        }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-gray-600">
              <Link to="/" className="hover:text-primary-600">Trang chủ</Link>
              <span className="mx-2">/</span>
              <Link to="/news" className="hover:text-primary-600">Tin tức & Blog</Link>
          <span className="mx-2">/</span>
              <span className="text-gray-400">{post.title}</span>
        </nav>

            {/* Category Badge */}
            {post.category && (
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
                  {post.category}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('vi-VN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span className="mx-2">•</span>
              <span>Nha Khoa Nhật Thanh</span>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8">
              {post.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            {post.image && (
              <div className="mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            )}

            {/* Article Body */}
            <article className="prose prose-lg prose-primary max-w-none enhanced-prose">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }} 
                className="text-gray-700 leading-relaxed space-y-6"
                style={{
                  '--tw-prose-body': '#374151',
                  '--tw-prose-headings': '#1f2937',
                  '--tw-prose-links': '#3b82f6',
                  '--tw-prose-bold': '#1f2937',
                  '--tw-prose-counters': '#6b7280',
                  '--tw-prose-bullets': '#d1d5db',
                  '--tw-prose-hr': '#e5e7eb',
                  '--tw-prose-quotes': '#1f2937',
                  '--tw-prose-quote-borders': '#e5e7eb',
                  '--tw-prose-captions': '#6b7280',
                  '--tw-prose-code': '#1f2937',
                  '--tw-prose-pre-code': '#e5e7eb',
                  '--tw-prose-pre-bg': '#1f2937',
                  '--tw-prose-th-borders': '#d1d5db',
                  '--tw-prose-td-borders': '#e5e7eb',
                } as React.CSSProperties}
              />
            </article>

            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
              <div 
                className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300"
                style={{ width: '0%' }}
                id="reading-progress"
              />
            </div>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
              {/* Back to Top Button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                title="Lên đầu trang"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>

              {/* Share Button */}
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.description,
                      url: window.location.href,
                    });
                  } else {
                    // Fallback for browsers that don't support Web Share API
                    navigator.clipboard.writeText(window.location.href);
                    alert('Đã sao chép link bài viết!');
                  }
                }}
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                title="Chia sẻ bài viết"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </button>

              {/* Bookmark Button */}
              <button
                onClick={() => {
                  const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
                  const isBookmarked = bookmarks.some((b: any) => b.slug === post.slug);
                  
                  if (isBookmarked) {
                    const newBookmarks = bookmarks.filter((b: any) => b.slug !== post.slug);
                    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
                    alert('Đã xóa khỏi bookmark!');
                  } else {
                    bookmarks.push({
                      slug: post.slug,
                      title: post.title,
                      date: post.date,
                      url: window.location.href
                    });
                    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                    alert('Đã thêm vào bookmark!');
                  }
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                title="Lưu bài viết"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>

            {/* Estimated Reading Time */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-blue-800 font-medium">
                    Thời gian đọc: ~{Math.ceil(post.content.length / 500)} phút
                  </span>
                </div>
                <div className="text-sm text-blue-600">
                  {post.content.length.toLocaleString()} ký tự
                </div>
              </div>
            </div>

            {/* Article Tags */}
            {post.category && (
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  {post.category}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Nha khoa
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Tư vấn
                </span>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Về Nha Khoa Nhật Thanh</h3>
              <p className="text-gray-600 text-sm mb-4">
                Nha khoa Nhật Thanh với đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại, 
                cam kết mang đến dịch vụ nha khoa chất lượng tốt nhất.
              </p>
              <div className="flex items-center">
                <img
                  src="/src/assets/img/logo.jpeg"
                  alt="Nha Khoa Nhật Thanh"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium text-gray-900">Nha Khoa Nhật Thanh</p>
                  <p className="text-sm text-gray-600">Chuyên gia nha khoa</p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bài viết liên quan</h3>
              <div className="space-y-4">
                {blogPosts
                  .filter(p => p.slug !== post.slug)
                  .slice(0, 3)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      to={`/news/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="flex items-start space-x-3">
                        {relatedPost.image && (
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                        )}
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(relatedPost.date).toLocaleDateString('vi-VN')}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-primary-50 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Đặt lịch khám</h3>
              <p className="text-primary-700 text-sm mb-4">
                Liên hệ với chúng tôi để được tư vấn và đặt lịch khám.
              </p>
              <Link
                to="/appointment"
                className="w-full inline-flex justify-center items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
              >
                Đặt lịch ngay
              </Link>
            </div>
          </div>
        </div>

        {/* Back to News */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            to="/news"
            className="inline-flex items-center text-primary-600 hover:text-primary-500 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại Tin tức & Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail; 