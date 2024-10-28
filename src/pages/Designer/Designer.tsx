import like from '/assets/images/icons/icon-star.webp';
const mockDesigner = [
  {
    name: '이윤아',
    career: '10년',
    hair_salon_name: '스타일 인 블룸',
    rating: 4.8,
    review_count: 125,
    operating_hours: '10:00 - 20:00',
    cut_price: 15000,
    image: [
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    ],
  },
  {
    name: '박성호',
    career: '7년',
    hair_salon_name: '헤어 스튜디오 네오',
    rating: 4.5,
    review_count: 89,
    operating_hours: '09:30 - 19:30',
    cut_price: 18000,
    image: [
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    ],
  },
  {
    name: '김민정',
    career: '15년',
    hair_salon_name: '엘리트 헤어',
    rating: 4.9,
    review_count: 210,
    operating_hours: '11:00 - 21:00',
    cut_price: 20000,
    image: [
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    ],
  },
  {
    name: '정수연',
    career: '5년',
    hair_salon_name: '프리미엄 헤어',
    rating: 4.6,
    review_count: 67,
    operating_hours: '10:00 - 18:00',
    cut_price: 17000,
    image: [
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    ],
  },
  {
    name: '이준혁',
    career: '12년',
    hair_salon_name: '헤어아트',
    rating: 4.7,
    review_count: 145,
    operating_hours: '09:00 - 20:00',
    cut_price: 16000,
    image: [
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    ],
  },
  {
    name: '서미연',
    career: '8년',
    hair_salon_name: '헤어 갤러리',
    rating: 4.4,
    review_count: 58,
    operating_hours: '12:00 - 21:00',
    cut_price: 15000,
    image: [
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    ],
  },
];

import { Link } from 'react-router-dom';
import arrowDown from '/assets/images/icons/icon-arrow-down.svg';
export default function Designer() {
  return (
    <div>
      <div className="px-[16px]">
        <button className="flex items-center gap-[6px] rounded-3xl border border-gray-100 px-[8px] py-[4px]">
          여성 추천순
          <img src={arrowDown} alt="" />
        </button>

        {mockDesigner.map((designer, index) => (
          <>
            <Link className="my-[25px] block" to={`/${designer.name}`}>
              <div className="flex gap-[6px] overflow-hidden">
                {designer.image.map((image: string) => (
                  <img src={image} alt="" className="h-[200px] w-[325px] shrink-0 rounded-lg" />
                ))}
              </div>
              <h3 className="pt-[16px] text-[18px] font-bold">{designer.name} <span className='inline-block rounded-[50%] align-middle w-[3px] h-[3px] bg-black'></span> {designer.career}</h3>
              <p>{designer.hair_salon_name}</p>
              <div className="flex items-center">
                <img src={like} alt="" className="h-[14px] w-[14px] mr-[2px]" />
                {designer.rating} ({designer.review_count}) | {designer.operating_hours} | 커트 {designer.cut_price}~
              </div>
            </Link>
            {index !== mockDesigner.length - 1 && <div className="h-[1px] bg-gray-100" />}
          </>
        ))}
      </div>
    </div>
  );
}
