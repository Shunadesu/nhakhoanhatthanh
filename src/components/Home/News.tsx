import { Link } from "react-router-dom";
import { blogPosts } from "../../data";

export default function News() {
  return (
 <div className="bg-gray-50 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary-600">Tin tức & Blog</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Cập nhật mới nhất từ chúng tôi
        </p>
    </div>
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {blogPosts.map((item) => (
        <Link to={`/news/${item.slug}`} key={item.slug} className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48">
            <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4">
                <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
                {item.title}
                </span>
            </div>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
            <div className="flex-1">
                <p className="text-sm font-medium text-primary-600">
                <time dateTime={item.date}>
                    {new Date(item.date).toLocaleDateString('vi-VN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    })}
                </time>
                </p>
                <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                <p className="mt-3 text-base text-gray-500">{item.description}</p>
            </div>
            <div className="mt-6">
                <Link to={`/news/${item.slug}`} className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500">
                Đọc thêm <span aria-hidden="true">→</span>
                </Link>
            </div>
            </div>
        </Link>
        ))}
    </div>
    </div>
</div>
  )
}