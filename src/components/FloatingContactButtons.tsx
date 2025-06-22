import { PhoneIcon } from '@heroicons/react/24/solid'
import { images } from '../assets/images'

export default function FloatingContactButtons() {
  const handlePhoneClick = () => {
    window.open('tel:0909876287', '_self')
  }

  const handleZaloClick = () => {
    window.open('https://zalo.me/0909876287', '_blank')
  }

  return (
    <div className="fixed bottom-2 sm:bottom-6 right-2 sm:right-6 z-50 flex  md:flex-col gap-4">
      {/* Phone Button */}
      <div className="relative group">
        {/* Pulse animation background */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse"></div>
        
        <button
          onClick={handlePhoneClick}
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-2xl transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:scale-110 hover:shadow-green-500/50 hover:shadow-2xl active:scale-95 transform"
          aria-label="Gọi điện thoại"
        >
          <PhoneIcon className="h-10 w-10 text-white drop-shadow-lg" />
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 hidden group-hover:block animate-fade-in">
            <div className="relative">
              <div className="bg-gray-900 text-white text-sm px-4 py-3 rounded-xl whitespace-nowrap shadow-2xl border border-gray-700">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 text-green-400" />
                  <span className="font-semibold">Gọi ngay: 090 987 62 87</span>
                </div>
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Zalo Button */}
      <div className="relative group">
        {/* Pulse animation background */}
        <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75 animation-delay-1000"></div>
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-pulse animation-delay-1000"></div>
        
        <button
          onClick={handleZaloClick}
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl transition-all duration-300 hover:from-blue-400 hover:to-blue-500 hover:scale-110 hover:shadow-blue-500/50 hover:shadow-2xl active:scale-95 transform"
          aria-label="Chat Zalo"
        >
          {/* Zalo Icon */}
          <div className="relative h-8 w-8">
            <img src={images.zaloicon} alt="Zalo Icon" className="h-full w-full object-contain drop-shadow-lg" />
          </div>
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 hidden group-hover:block animate-fade-in">
            <div className="relative">
              <div className="bg-gray-900 text-white text-sm px-4 py-3 rounded-xl whitespace-nowrap shadow-2xl border border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">Z</span>
                  </div>
                  <span className="font-semibold">Chat Zalo: 090 987 62 87</span>
                </div>
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
              </div>
            </div>
          </div>
        </button>
      </div>

      
    </div>
  )
} 