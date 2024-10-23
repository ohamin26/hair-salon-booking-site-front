import { CustomImg } from '@/components/Image/CustomImg';
import {
  storeName,
  rating,
  noticeText,
  noticeDetails,
  businessStatus,
  businessHours,
  storeInfo,
  likeCount,
} from '@/mocks/HairshopDetailData.js';
import { useState } from 'react';
import { Tap } from './Tap';
import { TextBox } from './TextBox';

export const Content = () => {
  const [imgWidth, imgHeight] = ['30', '30'];
  const [isExpanded, setIsExpanded] = useState({ notice: false, storeInfo: false });

  const handleToggle = (key: string) => {
    setIsExpanded((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="bg-white mx-auto mt-7 h-full max-w-default rounded-lg p-6">
      <div className="flex flex-col items-start">
        <h1 className="text-xl font-bold">{storeName}</h1>
        <div className="flex items-center space-x-1 text-purple-500">
          <CustomImg src="/assets/images/icons/icon-star.webp" height={'20'} width={'20'} />
          <span>{`${rating} / 5`}</span>
        </div>
      </div>

      <div className="mt-4 border border-gray-100 bg-[fff] p-4 shadow-md">
        <h2 className="w-fit bg-black-default pl-2 pr-8 text-sm font-bold text-white-default">Notice</h2>
        <p className="mt-1 text-sm text-gray-700">{noticeText}</p>
        <TextBox info={noticeDetails} isOpen={isExpanded.notice} onClick={() => handleToggle('notice')} />
      </div>

      <div className="mt-4 flex items-center space-x-2">
        <span className="font-bold text-purple-100">{businessStatus}</span>
        <span className="text-sm text-gray-500">{businessHours}</span>
      </div>

      <TextBox info={storeInfo} isOpen={isExpanded.storeInfo} onClick={() => handleToggle('storeInfo')} />

      <div className="mt-4 flex items-center justify-between text-gray-600">
        <Tap width={imgWidth} height={imgHeight} text={likeCount} src="/assets/images/icons/icon-like.svg" />
        <Tap width="25" height="23" text="위치" src="/assets/images/icons/icon-location.svg" />
        <Tap width={imgWidth} height={imgHeight} text="전화" src="/assets/images/icons/icon-phone.svg" />
        <Tap width={imgWidth} height={imgHeight} text="공유" src="/assets/images/icons/icon-share.svg" />
      </div>
    </div>
  );
};
