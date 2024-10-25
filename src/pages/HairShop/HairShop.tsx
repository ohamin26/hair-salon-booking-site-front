import { useState } from 'react';
import arrowDown from '/assets/images/icons/icon-arrow-down.svg';
import location from '/assets/images/icons/icon-location.svg';
import { Link } from 'react-router-dom';
import HairshopCard from '../../components/HairshopCard/HairshopCard';

const mockHairShop = [
  {
    id: 1,
    가게이름: '행복한 빵집',
    별점: 4.5,
    별점개수: 120,
    운영시간: '07:00 ~ 20:00',
    안내문구: '매일 신선한 빵과 함께 행복한 하루를 시작하세요!',
    홍보이미지: [
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    ],
  },
  {
    id: 1,
    가게이름: '커피 나무',
    별점: 5.0,
    별점개수: 85,
    운영시간: '08:00 ~ 22:00',
    안내문구: '최고급 원두로 만든 커피, 당신의 여유로운 순간을 위한 곳!',
    홍보이미지: [
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    ],
  },
  {
    id: 1,
    가게이름: '수제 피자 공방',
    별점: 4.0,
    별점개수: 50,
    운영시간: '11:00 ~ 21:00',
    안내문구: '정통 이탈리안 수제 피자, 특별한 맛을 경험하세요!',
    홍보이미지: [
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    ],
  },
  {
    id: 1,
    가게이름: '녹색 샐러드',
    별점: 3.5,
    별점개수: 30,
    운영시간: '10:00 ~ 19:00',
    안내문구:
      '신선한 재료로dddddddddddddddddddddddddddddddddddddddddddd 만든 건강한 샐러드, 마음과 몸이 모두 만족할 수 있는 곳!',
    홍보이미지: [
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    ],
  },
  {
    id: 1,
    가게이름: '달콤한 순간',
    별점: 4.8,
    별점개수: 200,
    운영시간: '09:00 ~ 23:00',
    안내문구: '디저트 천국! 달콤한 순간을 함께 나누세요!',
    홍보이미지: [
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    ],
  },
];
// 지도, 슬라이드, 바텀시트
export default function HairShop() {
  const [type, setType] = useState('hair');
  return (
    <div>
      <div className="bg-white fixed w-full px-[16px] py-[24px]">
        <Link to="/location" className="flex gap-[4px]">
          <strong className="text-[18px] font-bold">강남구 역삼동</strong>
          <img src={arrowDown} alt="" />
        </Link>
        <p className="text-gray-400">예약시간을 설정해주세요</p>
      </div>
      <div className="px-[16px] pt-[96px]">
        <div className="pb-[16px]">
          <button
            className={`px-[9px] py-[11px] ${
              type === 'hair' ? 'bg-black text-white font-semibold' : ''
            } rounded-3xl text-[15px] `}
            onClick={() => setType('hair')}
          >
            헤어샵
          </button>
          <button
            className={`px-[9px] py-[11px] ${
              type === 'designer' ? 'bg-black text-white font-semibold' : ''
            } rounded-full text-[15px]`}
            onClick={() => setType('designer')}
          >
            디자이너
          </button>
        </div>
        <div>
          <button className="flex items-center gap-[6px] rounded-3xl border border-gray-100 px-[8px] py-[4px]">
            여성 추천순
            <img src={arrowDown} alt="" />
          </button>
        </div>
        {mockHairShop.map((shop, index) => (
          <>
            <HairshopCard shop={shop} />
            {index !== mockHairShop.length - 1 && <div className="h-[1px] bg-gray-100" />}
          </>
        ))}
      </div>
      <div className="fixed bottom-[20px] left-0 right-0">
        <button className="bg-white m-auto flex items-center gap-[4px] rounded-full px-[20px] py-[12px] drop-shadow-2xl">
          <img src={location} className="h-[16px] w-[16px]" />
          <span className='font-semibold'>지도보기</span>
        </button>
      </div>
    </div>
  );
}
