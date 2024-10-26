import { Paragraph } from '../Paragraph/Paragraph';
import { menuData } from '@/mocks/HairshopDetailData.js';
import { Key } from 'react';
import { CustomImg } from '../Image/CustomImg';

type MenuDataProps = {
  imgSrc: string;
  title: string;
  discount: string;
  originalPrice: string;
  price: string;
  tags: string[];
  label?: string;
};
export default function PickMenuList({ short }: { short: boolean }) {
  const filteredMenuData = short ? menuData.slice(0, 5) : menuData;
  return (
    <div className="p-2">
      <Paragraph text={'픽메뉴'}></Paragraph>
      {filteredMenuData.map((data: MenuDataProps, index: Key | null | undefined) => (
        <button key={index} className="mt-4 flex w-full border-t border-t-white-default pt-5">
          <CustomImg src={data.imgSrc} height="80" width="80" addClassName="mr-4 rounded-md object-cover" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-gray-900">{data.title}</h2>
              {data.label && <span className="bg-black text-white rounded px-1 py-1 text-xs">{data.label}</span>}
            </div>
            <div className="mt-1 flex items-start font-semibold text-red-500">
              {data.discount}
              <span className="ml-2 text-black-default">{data.price}</span>
              <span className="ml-2 text-gray-400 line-through">{data.originalPrice}</span>
            </div>
            <div className="mt-1 flex gap-2">
              {data.tags.map((tag, i) => (
                <span key={i} className="text-xs text-gray-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
