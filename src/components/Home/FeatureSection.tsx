import { features } from "../../data/feature";

const FeatureSection = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-2xl md:max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-base font-semibold leading-7 text-primary-600">Dịch vụ của chúng tôi</h2>
    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Mọi thứ bạn cần cho nụ cười hoàn hảo
    </p>
    <p className="mt-6 text-lg leading-8 text-gray-600">
      Chúng tôi cung cấp đầy đủ các dịch vụ nha khoa từ cơ bản đến nâng cao, 
      đảm bảo mang đến cho bạn trải nghiệm chăm sóc răng miệng tốt nhất.
    </p>
  </div>
  <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
    <dl className="grid max-w-2xl grid-cols-3 gap-x-8 gap-y-16 lg:max-w-none ">
      {features.map((feature) => (
        <div key={feature.name} className="flex flex-col">
          <dt className="flex flex-col md:flex-row items-center text-center md:text-left gap-y-4 md:gap-y-0 gap-x-3 text-base font-semibold leading-7 text-gray-900">
            <feature.icon className="h-10 w-10 md:h-5 md:w-5 flex-none text-primary-600" aria-hidden="true" />
            {feature.name}
          </dt>
          <dd className="mt-4 hidden md:flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p className="flex-auto">{feature.description}</p>
          </dd>
        </div>
      ))}
    </dl>
  </div>
</div>
</div>
  )
}

export default FeatureSection