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
    productId: 1,
    imgSrc: 'https://picsum.photos/320/320',
    title: '[첫방문특가]가쯔전체염색+유/수분단백질케어',
    discount: '50%',
    price: '59,500',
    price: '120,000',
    tags: ['커트별도'],
  },
  {
    productId: 1,
    imgSrc: 'https://picsum.photos/320/320',
    title: '[2024예약조건]기추NO시세이도셋팅+솔루션케어',
    discount: '50%',
    price: '91,000',
    price: '182,000',
    tags: ['커트포함'],
    label: '타임세일',
  },
  {
    productId: 1,
    imgSrc: 'https://picsum.photos/320/320',
    title: '[민경 PICK]디자인커트+다운펌+앞머리펌',
    discount: '11%',
    price: '39,000',
    price: '44,000',
    tags: ['커트포함'],
  },
  {
    productId: 1,
    imgSrc: 'https://picsum.photos/320/320',
    title: '[민경 PICK]시그니처복구매직+유/수분단백질',
    discount: '50%',
    price: '99,000',
    price: '199,000',
    tags: ['커트포함', '길이추가'],
  },
  {
    productId: 1,
    imgSrc: 'https://picsum.photos/320/320',
    title: '[은서 PICK]기추NO염색+윤채크리닉',
    discount: '50%',
    price: '79,500',
    price: '159,000',
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
    images: ['https://picsum.photos/320/320'],
    name: '김*영',
    date: '1',
    visitCount: 2,
    helpfulCount: 1,
  },
  {
    title: '[앞머리] 커트+펌',
    stylist: '민경 스타일리스트',
    reviewRating: 5,
    images: ['https://picsum.photos/320/320'],
    content: '앞머리 커트를 하려고... 앞으로도 꾸준히 방문할 것 같아요.',
    name: '박*웅',
    date: '3',
    visitCount: 3,
    helpfulCount: 0,
  },
];

export const reviewData = reviewsData;

const menuItems = {
  pickMenu: [...MenuData],
  cut: [
    {
      productId: 1,
      name: '여성컷+앞머리펌',
      discount: 20,
      discountedPrice: 45000,
      price: 56250,
    },
    {
      productId: 1,
      name: '여성컷+샴푸',
      discount: 20,
      discountedPrice: 35000,
      price: 43750,
    },
    {
      productId: 1,
      name: '섬세한 여성컷',
      discount: 20,
      discountedPrice: 25000,
      price: 31300,
    },
    {
      productId: 1,
      name: '남성컷+포인트펌+다운펌',
      discount: 20,
      discountedPrice: 70000,
      price: 87500,
      label: '타임세일',
    },
    {
      productId: 1,
      name: '남성컷+옆뒤다운펌',
      discount: 20,
      discountedPrice: 56000,
      price: 70000,
    },
    {
      productId: 1,
      name: '남성컷+옆 다운펌',
      discount: 20,
      discountedPrice: 42000,
      price: 52500,
    },
    {
      productId: 1,
      name: '초정밀 남성컷',
      discount: 25,
      discountedPrice: 22000,
      price: 29400,
    },
    {
      productId: 1,
      name: '디자인컷+헤드스파',
      discount: 25,
      discountedPrice: 40000,
      price: 53400,
    },
    {
      productId: 1,
      name: '앞머리컷',
      discount: 50,
      discountedPrice: 5000,
      price: 10000,
      label: '타임세일',
    },
  ],
  perm: [
    {
      productId: 1,
      name: '[시그니처]복구매직셋팅',
      discount: 30,
      discountedPrice: 245000,
      price: 350000,
      tags: ['커트포함', '길이추가'],
    },
    {
      productId: 1,
      name: '매직 셋팅펌',
      discount: 25,
      discountedPrice: 210000,
      price: 280000,
    },
    {
      productId: 1,
      name: '[시그니처]CS컬 드라이 펌',
      discount: 30,
      discountedPrice: 189000,
      price: 270000,
      label: '타임세일',
      tags: ['커트포함', '길이추가'],
    },
    {
      productId: 1,
      name: '디자인 셋팅펌',
      discount: 25,
      discountedPrice: 149000,
      price: 198700,
      tags: ['커트포함', '길이추가'],
    },
    {
      productId: 1,
      name: '레이어드 C컬펌+클리닉 3단계',
      discount: 30,
      discountedPrice: 140000,
      price: 200000,
      tags: ['커트포함', '길이추가'],
    },
    {
      productId: 1,
      name: '여성 콜드펌+수분클리닉',
      discount: 20,
      discountedPrice: 110000,
      price: 137500,
      label: '타임세일',
    },
    {
      productId: 1,
      name: '[시그니처]복구매직',
      discount: 30,
      discountedPrice: 245000,
      price: 350000,
      tags: ['커트포함', '길이추가'],
    },
  ],
};

export const menuItemsData = menuItems;
