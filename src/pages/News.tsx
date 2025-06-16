import React from 'react';
// Nếu dùng react-helmet-async hoặc react-helmet để SEO tốt hơn:
// import { Helmet } from 'react-helmet-async';

const blogPosts = [
  {
    slug: 'quy-trinh-kham-va-dieu-tri-tai-nha-khoa-nhat-thanh',
    title: 'Quy trình khám và điều trị tại Nha khoa Nhật Thanh',
    description: 'Tìm hiểu quy trình khám và điều trị chuẩn quốc tế tại Nha khoa Nhật Thanh, giúp bạn an tâm khi trải nghiệm dịch vụ.',
    content: (
      <>
        <p>Chúng tôi luôn đặt sự an toàn và hiệu quả lên hàng đầu, tuân thủ quy trình chuẩn quốc tế để mang lại trải nghiệm tốt nhất cho khách hàng:</p>
        <ol className="list-decimal ml-6 my-4 space-y-1">
          <li><b>Khám tổng quát:</b> Bác sĩ kiểm tra tổng thể tình trạng răng miệng, phát hiện các vấn đề tiềm ẩn.</li>
          <li><b>Chụp X-quang (nếu cần):</b> Hỗ trợ chẩn đoán chính xác các bệnh lý sâu bên trong răng, xương hàm.</li>
          <li><b>Tư vấn điều trị:</b> Bác sĩ giải thích tình trạng, đề xuất phương án điều trị phù hợp và minh bạch về chi phí.</li>
          <li><b>Thực hiện điều trị:</b> Quy trình điều trị được thực hiện bởi đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại.</li>
          <li><b>Hướng dẫn chăm sóc sau điều trị:</b> Khách hàng được hướng dẫn chi tiết cách chăm sóc răng miệng để duy trì kết quả lâu dài.</li>
        </ol>
        <p>Chúng tôi cam kết đồng hành cùng bạn trên hành trình chăm sóc nụ cười khỏe đẹp!</p>
      </>
    ),
    date: '2024-04-01',
  },
  {
    slug: 'chi-phi-dieu-tri-nha-khoa-va-bao-hiem-y-te',
    title: 'Chi phí điều trị nha khoa và bảo hiểm y tế: Những điều bạn cần biết',
    description: 'Giải đáp thắc mắc về chi phí điều trị nha khoa và quyền lợi bảo hiểm y tế tại Nha khoa Nhật Thanh.',
    content: (
      <>
        <p>Nhiều khách hàng thắc mắc: "Chi phí điều trị nha khoa có được bảo hiểm y tế chi trả không?" Dưới đây là giải đáp từ Nha khoa Nhật Thanh:</p>
        <ul className="list-disc ml-6 my-4 space-y-1">
          <li><b>Dịch vụ được bảo hiểm chi trả:</b> Một số dịch vụ nha khoa cơ bản như nhổ răng, trám răng, điều trị viêm lợi… có thể được bảo hiểm y tế hỗ trợ chi phí.</li>
          <li><b>Dịch vụ không được bảo hiểm chi trả:</b> Các dịch vụ thẩm mỹ (tẩy trắng, bọc răng sứ, niềng răng, cấy ghép implant…) và các dịch vụ nâng cao thường không nằm trong danh mục bảo hiểm.</li>
          <li><b>Tư vấn minh bạch:</b> Trước khi điều trị, chúng tôi sẽ tư vấn chi tiết về chi phí, quyền lợi bảo hiểm (nếu có) để khách hàng chủ động tài chính.</li>
        </ul>
        <p>Hãy liên hệ với chúng tôi để được tư vấn cụ thể về từng trường hợp!</p>
      </>
    ),
    date: '2024-04-02',
  },
  {
    slug: 'thoi-gian-dieu-tri-nha-khoa-phu-thuoc-vao-nhung-yeu-to-nao',
    title: 'Thời gian điều trị nha khoa: Phụ thuộc vào những yếu tố nào?',
    description: 'Tìm hiểu các yếu tố ảnh hưởng đến thời gian điều trị nha khoa và cách tối ưu quá trình điều trị tại Nha khoa Nhật Thanh.',
    content: (
      <>
        <p>Thời gian điều trị nha khoa là mối quan tâm của nhiều khách hàng. Tại Nha khoa Nhật Thanh, thời gian điều trị sẽ được bác sĩ thông báo cụ thể sau khi thăm khám, dựa trên các yếu tố:</p>
        <ul className="list-disc ml-6 my-4 space-y-1">
          <li><b>Loại dịch vụ:</b> Mỗi dịch vụ có thời gian thực hiện khác nhau. Ví dụ: trám răng chỉ mất 30 phút, trong khi niềng răng có thể kéo dài 1-2 năm.</li>
          <li><b>Tình trạng răng miệng:</b> Nếu răng miệng có nhiều vấn đề, cần điều trị nhiều lần hoặc kết hợp nhiều phương pháp, thời gian sẽ lâu hơn.</li>
          <li><b>Sự hợp tác của khách hàng:</b> Việc tuân thủ hướng dẫn chăm sóc, tái khám đúng lịch sẽ giúp rút ngắn thời gian điều trị.</li>
        </ul>
        <p>Chúng tôi luôn thông báo rõ ràng thời gian dự kiến và đồng hành cùng bạn trong suốt quá trình điều trị!</p>
      </>
    ),
    date: '2024-04-03',
  },
];

const News = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* <Helmet>
        <title>Tin tức & Blog | Nha khoa Nhật Thanh</title>
        <meta name="description" content="Tổng hợp các bài viết, tin tức, chia sẻ kinh nghiệm chăm sóc răng miệng từ Nha khoa Nhật Thanh." />
        <meta property="og:title" content="Tin tức & Blog | Nha khoa Nhật Thanh" />
        <meta property="og:description" content="Tổng hợp các bài viết, tin tức, chia sẻ kinh nghiệm chăm sóc răng miệng từ Nha khoa Nhật Thanh." />
        <meta property="og:type" content="website" />
      </Helmet> */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-6 text-center">Tin tức & Blog</h1>
        <p className="text-lg text-gray-600 mb-10 text-center">Tổng hợp các bài viết, tin tức, chia sẻ kinh nghiệm chăm sóc răng miệng từ Nha khoa Nhật Thanh.</p>
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl shadow-lg p-8 border border-primary-100 hover:shadow-2xl transition-shadow" itemScope itemType="https://schema.org/BlogPosting">
              <meta itemProp="datePublished" content={post.date} />
              <h2 className="text-2xl font-bold text-primary-700 mb-2" itemProp="headline">{post.title}</h2>
              <p className="text-gray-500 mb-4" itemProp="description">{post.description}</p>
              <div className="prose prose-blue max-w-none text-gray-800" itemProp="articleBody">
                {post.content}
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
            'url': `/news/${post.slug}`
          }))
        })
      }} />
    </div>
  );
};

export default News; 