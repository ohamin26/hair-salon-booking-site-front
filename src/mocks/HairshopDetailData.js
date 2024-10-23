const ContentData = {
  storeName: '살롱드라피네 포스코사거리점',
  rating: '5',
  noticeText: '오픈특가 최대 50% 할인행사중입니다!',
  noticeDetails:
    '(오픈 할인 행사명/염색/펌/클리닉 시술 최대 50% 기추 NO 염색 69.500 / 신데렐라 클리릭 99.000 / 열펌 65.000)',
  businessStatus: '영업중',
  businessHours: '09:00 - 21:00',
  storeInfo:
    '살롱드라피네 포스코사거리점이 10.18일 오픈합니다 :) 다양한 패키지 상품과 합리적인 가격으로 100% 정품 제품만을 사용하여 고객님의 아름다움 뿐만 아니라 건강두피, 모발까지 신경 쓰고 관리하는 착한 미용실입니다.',
  likeCount: '15',
};

export const { storeName, rating, noticeText, noticeDetails, businessStatus, businessHours, storeInfo, likeCount } =
  ContentData;

const MenuData = [
  {
    imgSrc: 'https://picsum.photos/320/320',
    title: '[첫방문특가]가쯔전체염색+유/수분단백질케어',
    discount: '50%',
    price: '59,500',
    originalPrice: '120,000',
    tags: ['커트별도'],
  },
  {
    imgSrc: 'https://picsum.photos/320/320',
    title: '[2024예약조건]기추NO시세이도셋팅+솔루션케어',
    discount: '50%',
    price: '91,000',
    originalPrice: '182,000',
    tags: ['커트포함'],
    label: '타임세일',
  },
  {
    imgSrc: 'https://picsum.photos/320/320',
    title: '[민경 PICK]디자인커트+다운펌+앞머리펌',
    discount: '11%',
    price: '39,000',
    originalPrice: '44,000',
    tags: ['커트포함'],
  },
  {
    imgSrc: 'https://picsum.photos/320/320',
    title: '[민경 PICK]시그니처복구매직+유/수분단백질',
    discount: '50%',
    price: '99,000',
    originalPrice: '199,000',
    tags: ['커트포함', '길이추가'],
  },
  {
    imgSrc: 'https://picsum.photos/320/320',
    title: '[은서 PICK]기추NO염색+윤채크리닉',
    discount: '50%',
    price: '79,500',
    originalPrice: '159,000',
    tags: ['커트별도'],
  },
];

export const menuData = MenuData;

const reviewsData = [
  {
    title: '[오픈특가] 뿌리염색+두피보호제',
    stylist: '민경 스타일리스트',
    reviewRating: 5,
    content: '염색도 하고 싶고 펌도 하고 싶었는데... 너무 좋았어요!',
    images: ['https://picsum.photos/320/320', 'https://picsum.photos/320/320'],
    name: '김*영',
    date: '1',
    visitCount: 2,
    helpfulCount: 1,
  },
  {
    title: '[앞머리] 커트+펌',
    stylist: '민경 스타일리스트',
    reviewRating: 5,
    content: '앞머리 커트를 하려고... 앞으로도 꾸준히 방문할 것 같아요.',
    name: '박*웅',
    date: '3',
    visitCount: 3,
    helpfulCount: 0,
  },
];

export const reviewData = reviewsData;
