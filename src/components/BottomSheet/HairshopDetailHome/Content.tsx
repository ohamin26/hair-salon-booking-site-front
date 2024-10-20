import { CustomImg } from '../../Image/CustomImg';
import {
  storeName,
  rating,
  noticeText,
  noticeDetails,
  businessStatus,
  businessHours,
  storeInfo,
} from '@/mocks/HairshopDetailData.js';
type MenuProps = {
  width: string;
  height: string;
  text: string;
  src: string;
};

export const Content = () => {
  const [imgWidth, imgHeight] = ['30', '30'];
  const Menu = ({ width, height, text, src }: MenuProps) => {
    return (
      <div className="flex flex-col items-center p-11 py-4">
        <CustomImg src={src} height={height} width={width} />
        <span>{text}</span>
      </div>
    );
  };

  return (
    <div className="bg-white mx-auto max-w-default rounded-lg p-6">
      <div className="flex flex-col items-start">
        <h1 className="text-xl font-bold">{storeName}</h1>
        <div className="flex items-center space-x-1 text-purple-500">
          <CustomImg src="/assets/images/icons/icon-star.webp" height={'20'} width={'20'} />
          <span>{rating}</span>
        </div>
      </div>

      <div className="border-black mt-4 bg-white-default p-4">
        <h2 className="w-fit bg-black-default pl-2 pr-8 text-sm font-bold text-white-default">Notice</h2>
        <p className="mt-1 text-sm text-gray-700">{noticeText}</p>
        <p className="text-xs text-gray-500">{noticeDetails}</p>
      </div>

      <div className="mt-4 flex items-center space-x-2">
        <span className="font-bold text-purple-100">{businessStatus}</span>
        <span className="text-sm text-gray-500">{businessHours}</span>
      </div>

      <div className="mt-4 text-sm text-gray-600">{storeInfo}</div>

      <div className="mt-4 flex items-center justify-between text-gray-600">
        <Menu width={imgWidth} height={imgHeight} text="15" src="/assets/images/icons/icon-like.svg" />
        <Menu width="25" height="23" text="위치" src="/assets/images/icons/icon-location.svg" />
        <Menu width={imgWidth} height={imgHeight} text="전화" src="/assets/images/icons/icon-phone.svg" />
        <Menu width={imgWidth} height={imgHeight} text="공유" src="/assets/images/icons/icon-share.svg" />
      </div>
    </div>
  );
};
