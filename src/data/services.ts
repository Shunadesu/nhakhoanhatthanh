import { HeartIcon, SparklesIcon, WrenchIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'

export const  services = [
    {
      name: 'Nha khoa tổng quát',
      description: 'Khám và điều trị các vấn đề răng miệng cơ bản, vệ sinh răng miệng chuyên nghiệp.',
      icon: HeartIcon,
      href: '/services/general',
    },
    {
      name: 'Nha khoa thẩm mỹ',
      description: 'Tẩy trắng răng, bọc răng sứ, dán sứ veneer, chỉnh nha thẩm mỹ.',
      icon: SparklesIcon,
      href: '/services/cosmetic',
    },
    {
      name: 'Cấy ghép Implant',
      description: 'Phục hồi răng đã mất bằng công nghệ Implant hiện đại, an toàn và bền vững.',
      icon: WrenchIcon,
      href: '/services/implant',
    },
    {
      name: 'Chỉnh nha',
      description: 'Điều trị các vấn đề về khớp cắn, răng mọc lệch lạc bằng các phương pháp chỉnh nha hiện đại.',
      icon: AdjustmentsHorizontalIcon,
      href: '/services/orthodontics',
    },
  ]