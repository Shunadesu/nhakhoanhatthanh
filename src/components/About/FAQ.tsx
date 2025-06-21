export default function FAQ() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Câu hỏi thường gặp</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Giải đáp thắc mắc của bạn

    </p>
  </div>
  <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
    <dl className="space-y-8">
      {[
        {
          question: 'Quy trình khám và điều trị tại Nha khoa Nhật Thanh như thế nào?',
          answer: 'Chúng tôi tuân thủ quy trình khám và điều trị chuẩn quốc tế, bao gồm: khám tổng quát, chụp X-quang (nếu cần), tư vấn điều trị, thực hiện điều trị và hướng dẫn chăm sóc sau điều trị.',
        },
        {
          question: 'Chi phí điều trị có được bảo hiểm y tế chi trả không?',
          answer: 'Một số dịch vụ nha khoa cơ bản có thể được bảo hiểm y tế chi trả. Tuy nhiên, các dịch vụ thẩm mỹ và nâng cao thường không được bảo hiểm chi trả. Chúng tôi sẽ tư vấn chi tiết về chi phí trước khi điều trị.',
        },
        {
          question: 'Thời gian điều trị mất bao lâu?',
          answer: 'Thời gian điều trị phụ thuộc vào loại dịch vụ và tình trạng cụ thể của từng khách hàng. Chúng tôi sẽ thông báo thời gian dự kiến sau khi khám và tư vấn.',
        },
      ].map((faq, index) => (
        <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300">
          <dt className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</dt>
          <dd className="mt-4 text-base leading-7 text-gray-600">{faq.answer}</dd>
        </div>
      ))}
    </dl>
  </div>
</div>
</div>

    )}