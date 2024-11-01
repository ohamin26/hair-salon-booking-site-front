import { TextBox } from '@/components/HarishopDetail/Home/TextBox';
import { CustomImg } from '@/components/Image/CustomImg';
import { useState } from 'react';

const Button = ({ text, src }: { text: string; src: string }) => {
  return (
    <button className="bg-white flex h-10 w-[100vw] max-w-[280px] items-center justify-center rounded-sm border border-gray-100 max-sm:max-w-[170px]">
      <CustomImg src={src} width="25" height="25" addClassName="mr-1" />
      <span className="text-md font-semibold text-gray-700">{text}</span>
    </button>
  );
};

export default function DesignerCard({ designer }: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(true);
  };

  return (
    <div className="w-[640px] min-w-default max-w-default bg-gray-50 p-6 pb-16">
      <div className="mb-7 flex items-center">
        <CustomImg src={designer.image[0]} width="105" height="105" addClassName="mr-3 rounded-full" />
        <div className="ml-1">
          <h3 className="text-[20px] font-bold">{designer.name}</h3>
          <p className="text-md text-gray-500">{designer.career}</p>
        </div>
      </div>
      <span className="text-lg font-semibold text-blue-600">@{designer.hair_salon_name}</span>
      <div className="my-2 flex items-center space-x-2">
        <span className="font-bold text-purple-100">영업중</span>
        <span className="text-sm text-gray-500">{designer.operating_hours}</span>
      </div>
      <TextBox
        textClass="text-[14px] text-gray-800 leading-relaxed max-sm:max-w-[350px]"
        info={designer.info}
        isOpen={isExpanded}
        onClick={() => handleToggle()}
      />

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button text="90" src="/assets/images/icons/icon-like.svg" />
          <Button text="공유" src="/assets/images/icons/icon-share.svg" />
        </div>
      </div>
    </div>
  );
}
