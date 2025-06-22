import { features } from '../data';
import { images } from '../assets/images';
import { Doctors, Gallery, SEO } from '../components';
const About = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Giới thiệu | Nha khoa Nhật Thanh"
        description="Giới thiệu về Nha khoa Nhật Thanh - Đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại, sứ mệnh chăm sóc nụ cười Việt."
      />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-6 text-center">Giới thiệu về Nha khoa Nhật Thanh</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Nha khoa Nhật Thanh tự hào là địa chỉ chăm sóc răng miệng uy tín với đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại và dịch vụ tận tâm.
        </p>
        <div className="mb-10 bg-primary-50 rounded-xl p-6 h-full flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px]  object-contain object-center overflow-hidden">
            <img src={images.nhakhoanhatthanh} alt="Phòng khám Nha khoa Nhật Thanh" className="w-full h-full rounded-2xl shadow-lg object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-primary-700 mb-2">Sứ mệnh & Giá trị cốt lõi</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Đặt sức khỏe và sự hài lòng của khách hàng lên hàng đầu.</li>
              <li>Không ngừng cập nhật công nghệ, kỹ thuật mới trong nha khoa.</li>
              <li>Minh bạch, tận tâm trong tư vấn và điều trị.</li>
              <li>Xây dựng môi trường thân thiện, chuyên nghiệp.</li>
            </ul>
          </div>
        </div>
       <Doctors />
        <Gallery />

        {/* Why choose us section */}
        <div className="bg-white py-16 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Tại sao chọn chúng tôi</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Cam kết chất lượng dịch vụ hàng đầu
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                      <feature.icon className="h-6 w-6 flex-none text-primary-600" aria-hidden="true" />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About; 