import { images } from "../assets/images";

export interface Doctor {
  id: string;
  name: string;
  role: string;
  image: string;
  specialties: string[];
  phone: string;
  experience: string;
  education: string;
  description: string;
  achievements: string[];
  certifications: string[];
  detailedDescription: string;
  workingHours: string;
  languages: string[];
  awards: string[];
}

export const doctors: Doctor[] = [
  {
    id: 'tran-tu',
    name: 'BS. Trần Tú',
    role: 'Giám đốc chuyên môn',
    image: images.doctors.doctor2,
    specialties: ['Nha khoa tổng quát', 'Cấy ghép Implant', 'Phẫu thuật nha chu'],
    phone: '0909876287',
    experience: '15 năm kinh nghiệm',
    education: 'Tiến sĩ Nha khoa - Đại học Y Dược Thành phố Hồ Chí Minh',
    description: 'Chuyên gia hàng đầu trong lĩnh vực cấy ghép Implant với hơn 15 năm kinh nghiệm.',
    achievements: [
      'Thực hiện hơn 5,000 ca cấy ghép Implant thành công',
      'Điều trị hơn 10,000 bệnh nhân các loại',
      'Thành viên Hiệp hội Nha khoa Quốc tế (IDA)',
      'Giảng viên thỉnh giảng tại Đại học Y Dược TP.HCM'
    ],
    certifications: [
      'Chứng chỉ Cấy ghép Implant Quốc tế - ITI',
      'Chứng chỉ Phẫu thuật nha chu - AAP',
      'Chứng chỉ Nha khoa thẩm mỹ - AACD'
    ],
    detailedDescription: `Bác sĩ Trần Tú là một trong những chuyên gia hàng đầu về cấy ghép Implant tại Việt Nam. 
    Với hơn 15 năm kinh nghiệm trong lĩnh vực nha khoa, bác sĩ đã thực hiện thành công hàng nghìn ca cấy ghép Implant 
    và điều trị các bệnh lý nha khoa phức tạp. Bác sĩ không ngừng học hỏi và cập nhật các kỹ thuật mới nhất từ các 
    trung tâm nha khoa hàng đầu thế giới.`,
    workingHours: 'Thứ 2 - Thứ 7: 8:00 - 20:00',
    languages: ['Tiếng Việt', 'Tiếng Anh'],
    awards: [
      'Bác sĩ xuất sắc năm 2022 - Hiệp hội Nha khoa Việt Nam',
      'Giải thưởng Đổi mới trong Nha khoa 2021'
    ]
  },
  {
    id: 'nguyen-thi-anh',
    name: 'BS. Nguyễn Thị Anh',
    role: 'Bác sĩ chuyên khoa Chỉnh nha',
    image: images.doctors.doctor3,
    specialties: ['Chỉnh nha', 'Nha khoa thẩm mỹ', 'Điều trị răng khấp khểnh'],
    phone: '0909876287',
    experience: '10 năm kinh nghiệm',
    education: 'Thạc sĩ Chỉnh nha - Đại học Y Dược Thành phố Hồ Chí Minh',
    description: 'Chuyên gia về chỉnh nha và nha khoa thẩm mỹ, đã điều trị thành công cho hàng nghìn khách hàng.',
    achievements: [
      'Điều trị chỉnh nha cho hơn 3,000 bệnh nhân',
      'Chuyên gia về Invisalign và niềng răng thẩm mỹ',
      'Thành viên Hiệp hội Chỉnh nha Châu Á Thái Bình Dương',
      'Đào tạo cho các bác sĩ trẻ về kỹ thuật chỉnh nha'
    ],
    certifications: [
      'Chứng chỉ Invisalign Diamond Provider',
      'Chứng chỉ Chỉnh nha Quốc tế - WFO',
      'Chứng chỉ Nha khoa thẩm mỹ - AACD'
    ],
    detailedDescription: `Bác sĩ Nguyễn Thị Anh là chuyên gia hàng đầu về chỉnh nha với 10 năm kinh nghiệm. 
    Bác sĩ chuyên về các phương pháp chỉnh nha hiện đại như Invisalign, niềng răng mắc cài sứ thẩm mỹ. 
    Với sự tận tâm và kỹ thuật tinh tế, bác sĩ đã giúp hàng nghìn bệnh nhân có được nụ cười đẹp và tự tin.`,
    workingHours: 'Thứ 2 - Thứ 6: 8:00 - 18:00',
    languages: ['Tiếng Việt', 'Tiếng Anh'],
    awards: [
      'Bác sĩ chỉnh nha xuất sắc 2023',
      'Giải thưởng Sáng tạo trong Điều trị 2022'
    ]
  },
  {
    id: 'le-van-hung',
    name: 'BS. Lê Văn Hùng',
    role: 'Bác sĩ chuyên khoa Điều trị tủy',
    image: images.doctors.doctor1,
    specialties: ['Nha khoa tổng quát', 'Điều trị tủy', 'Nha khoa phòng ngừa'],
    phone: '0909876287',
    experience: '8 năm kinh nghiệm',
    education: 'Bác sĩ Nha khoa - Đại học Y Dược Thành phố Hồ Chí Minh',
    description: 'Chuyên gia về điều trị tủy và nha khoa tổng quát, luôn tận tâm với từng ca điều trị.',
    achievements: [
      'Thực hiện hơn 2,000 ca điều trị tủy thành công',
      'Chuyên gia về điều trị tủy bằng kính hiển vi',
      'Thành viên Hiệp hội Điều trị tủy Việt Nam',
      'Tham gia nhiều hội thảo quốc tế về nha khoa'
    ],
    certifications: [
      'Chứng chỉ Điều trị tủy bằng kính hiển vi',
      'Chứng chỉ Nha khoa phòng ngừa - AAPD',
      'Chứng chỉ Gây tê tại chỗ nâng cao'
    ],
    detailedDescription: `Bác sĩ Lê Văn Hùng là chuyên gia về điều trị tủy với 8 năm kinh nghiệm. 
    Bác sĩ chuyên sâu về các kỹ thuật điều trị tủy hiện đại, sử dụng kính hiển vi để đảm bảo độ chính xác cao. 
    Với sự kiên nhẫn và tận tâm, bác sĩ luôn cố gắng bảo tồn răng tự nhiên cho bệnh nhân.`,
    workingHours: 'Thứ 2 - Thứ 7: 8:00 - 18:00',
    languages: ['Tiếng Việt'],
    awards: [
      'Bác sĩ điều trị tủy xuất sắc 2023',
      'Giải thưởng Tận tâm với bệnh nhân 2022'
    ]
  },
//   {
//     id: 'tran-thi-lan',
//     name: 'BS. Trần Thị Lan',
//     role: 'Bác sĩ chuyên khoa Nha khoa thẩm mỹ',
//     image: images.doctors.doctor4,
//     specialties: ['Nha khoa thẩm mỹ', 'Tẩy trắng răng', 'Dán sứ Veneer'],
//     phone: '0909876287',
//     experience: '12 năm kinh nghiệm',
//     education: 'Thạc sĩ Nha khoa thẩm mỹ - Đại học Y Dược Thành phố Hồ Chí Minh',
//     description: 'Chuyên gia về nha khoa thẩm mỹ, tạo nụ cười đẹp tự nhiên cho khách hàng.',
//     achievements: [
//       'Thực hiện hơn 1,500 ca dán sứ Veneer',
//       'Chuyên gia tẩy trắng răng an toàn',
//       'Thành viên Hiệp hội Nha khoa thẩm mỹ Châu Á',
//       'Đào tạo kỹ thuật thẩm mỹ cho các bác sĩ'
//     ],
//     certifications: [
//       'Chứng chỉ Nha khoa thẩm mỹ - AACD',
//       'Chứng chỉ Tẩy trắng răng Quốc tế',
//       'Chứng chỉ Dán sứ Veneer nâng cao'
//     ],
//     detailedDescription: `Bác sĩ Trần Thị Lan là chuyên gia về nha khoa thẩm mỹ với 12 năm kinh nghiệm. 
//     Bác sĩ chuyên về các kỹ thuật tạo nụ cười đẹp như dán sứ Veneer, tẩy trắng răng, và phục hình thẩm mỹ. 
//     Với con mắt thẩm mỹ tinh tế, bác sĩ đã tạo ra hàng nghìn nụ cười đẹp tự nhiên cho khách hàng.`,
//     workingHours: 'Thứ 2 - Thứ 6: 8:00 - 18:00',
//     languages: ['Tiếng Việt', 'Tiếng Anh'],
//     awards: [
//       'Bác sĩ nha khoa thẩm mỹ xuất sắc 2023',
//       'Giải thưởng Sáng tạo trong Thẩm mỹ 2022'
//     ]
//   },
//   {
//     id: 'pham-quoc-bao',
//     name: 'BS. Phạm Quốc Bảo',
//     role: 'Bác sĩ chuyên khoa Nha khoa trẻ em',
//     image: images.doctors.doctor5,
//     specialties: ['Nha khoa trẻ em', 'Nha khoa phòng ngừa', 'Chỉnh nha trẻ em'],
//     phone: '0909876287',
//     experience: '6 năm kinh nghiệm',
//     education: 'Bác sĩ Nha khoa - Đại học Y Dược Thành phố Hồ Chí Minh',
//     description: 'Chuyên gia về nha khoa trẻ em, tạo môi trường thân thiện cho các bé.',
//     achievements: [
//       'Điều trị cho hơn 2,000 trẻ em',
//       'Chuyên gia về chỉnh nha sớm cho trẻ',
//       'Thành viên Hiệp hội Nha khoa trẻ em Việt Nam',
//       'Tổ chức nhiều chương trình giáo dục sức khỏe răng miệng cho trẻ'
//     ],
//     certifications: [
//       'Chứng chỉ Nha khoa trẻ em - AAPD',
//       'Chứng chỉ Chỉnh nha sớm cho trẻ',
//       'Chứng chỉ Gây tê không đau cho trẻ em'
//     ],
//     detailedDescription: `Bác sĩ Phạm Quốc Bảo là chuyên gia về nha khoa trẻ em với 6 năm kinh nghiệm. 
//     Bác sĩ có khả năng đặc biệt trong việc tạo môi trường thân thiện và an toàn cho trẻ em. 
//     Với sự kiên nhẫn và tình yêu trẻ, bác sĩ đã giúp nhiều trẻ em vượt qua nỗi sợ hãi khi đi khám răng.`,
//     workingHours: 'Thứ 2 - Thứ 7: 8:00 - 17:00',
//     languages: ['Tiếng Việt'],
//     awards: [
//       'Bác sĩ nha khoa trẻ em xuất sắc 2023',
//       'Giải thưởng Tận tâm với trẻ em 2022'
//     ]
//   }
];

// Hàm tìm bác sĩ theo ID
export const getDoctorById = (id: string): Doctor | undefined => {
  return doctors.find(doctor => doctor.id === id);
};

// Hàm lấy tất cả bác sĩ
export const getAllDoctors = (): Doctor[] => {
  return doctors;
};