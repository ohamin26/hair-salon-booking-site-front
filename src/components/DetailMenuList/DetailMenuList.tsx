import { Key } from 'react';
import { Paragraph } from '../Paragraph/Paragraph';
import { Link } from 'react-router-dom';

type MenuItemProps = {
  productId: number;
  name: string;
  price: number;
  discountedPrice: number;
  discount: number;
  label?: string;
  tags?: string[];
};

type DetailMenuListProps = {
  title: string;
  menuItems: MenuItemProps[];
};

export default function DetailMenuList({ title, menuItems }: DetailMenuListProps) {
  return (
    <div className="my-3 border-t-[6px] border-t-gray-50 p-2">
      <Paragraph text={title}></Paragraph>
      {menuItems.map((data: MenuItemProps, index: Key | null | undefined) => (
        <Link
          to={`./${data.productId}/infos`}
          key={index}
          className="mt-4 flex w-full border-t border-t-white-default pt-5"
        >
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-gray-900">{data.name}</h2>
              {data.label && <span className="bg-black text-white rounded px-1 py-1 text-xs">{data.label}</span>}
            </div>
            <div className="mt-1 flex items-start font-semibold text-red-500">
              {data.discount}
              <span className="ml-2 text-black-default">{data.price}</span>
              <span className="ml-2 text-gray-400 line-through">{data.price}</span>
            </div>
            <div className="mt-1 flex gap-2">
              {data.tags &&
                data.tags.map((tag, i) => (
                  <span key={i} className="text-xs text-gray-500">
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
