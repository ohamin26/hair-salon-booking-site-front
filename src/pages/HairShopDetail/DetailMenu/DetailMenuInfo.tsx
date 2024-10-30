import { Navigation } from '@/components/DetailMenuInfo/Navigation';
import { Info } from '@/components/DetailMenuInfo/Info';
import { CustomImg } from '@/components/Image/CustomImg';
import { useNavType } from '@/stores/useNavType';
import Review from '@/components/DetailMenuInfo/Review';

const DetailMenuInfoData = {
  discount: 49,
  price: 60000,
  discountedPrice: 30500,
  shopName: '에이치브라운헤어 강남역점',
  title: '남성디자인컷+힐링샴푸+헤드스파',
  timeRequired: '⏱️ 30분 소요',
  additionalInfo: {
    target: '남성',
    composition: '헤드스파, 두피클리닉, 남성컷, 남자드라이, 샴푸',
    cutOption: '커트포함',
    shampooOption: '샴푸포함',
    product: '로레알',
  },
  herbExtract: {
    title: '허브추출두피팩',
    description:
      '남성 디자인 컷과 스트레스가 풀리는 힐링 샴푸 \n\n그리고 아로마 오일 및 천연허브추출물로 두피를 시원하게 지압해드립니다. \n\n평소 두피관리에 힘들어 하시던 분들도 커트패키지를 이용해 보다 똑똑한 소비를 추천드립니다 ^ㅡ^',
  },
  image: 'https://picsum.photos/320/200',
};

const Icon = ({ src }: { src: string }) => {
  return (
    <button>
      <CustomImg src={src} width={'35'} height={'60'} />
    </button>
  );
};

export const DetailMenuInfo = () => {
  const { type } = useNavType();
  return (
    <div className="mx-auto min-w-default max-w-default pb-4">
      <CustomImg
        src={DetailMenuInfoData.image}
        addClassName="w-full object-cover mb-3 m-0 p-0"
        height={''}
        width={''}
      />
      <div className="m-0 flex gap-2 p-0">
        <div className="flex items-center">
          <Icon src="/assets/images/icons/icon-like.svg" />
          <span className="font-semibold text-black-default">115</span>
        </div>
        <Icon src="/assets/images/icons/icon-share.svg" />
      </div>
      <div className="p-2 py-0 text-lg font-semibold text-black-default">
        [{DetailMenuInfoData.discount}%off] {DetailMenuInfoData.title}
      </div>

      <div className="mt-2 flex flex-col p-2 text-xl text-gray-500">
        <span className="mr-2 line-through">{DetailMenuInfoData.price.toLocaleString()}</span>
        <div className="flex items-center">
          <span className="text-red-500">{DetailMenuInfoData.discount}%</span>
          <span className="ml-2 font-normal text-gray-900">{DetailMenuInfoData.discountedPrice.toLocaleString()}</span>
        </div>
      </div>

      <div className="items-cente mt-2 flex items-center border-t-[6px] border-white-default p-2">
        <img src="https://picsum.photos/320/320" alt="shop-logo" className="mr-2 h-10 w-10 rounded-full" />
        <span className="text-xl text-gray-700">{DetailMenuInfoData.shopName}</span>
      </div>

      <Navigation />
      {type === 'review' && <Review />}
      {type === 'info' && (
        <Info
          timeRequired={DetailMenuInfoData.timeRequired}
          additionalInfo={DetailMenuInfoData.additionalInfo}
          herbExtract={DetailMenuInfoData.herbExtract}
        />
      )}
    </div>
  );
};
