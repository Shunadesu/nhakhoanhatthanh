import { gallery } from "../../data/gallery";

export default function Gallery() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Thư viện ảnh</h2>


    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Khám phá không gian phòng khám
    </p>
    <p className="mt-6 text-lg leading-8 text-gray-600">
      Hình ảnh thực tế về cơ sở vật chất và không gian phòng khám của chúng tôi.
    </p>
  </div>
  <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    {gallery.map((item) => (
      <div key={item.id} className="group relative">
        <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gray-100">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm">{item.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>

  )
}