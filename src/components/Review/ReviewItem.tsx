import { Key } from 'react';
import { CustomImg } from '../Image/CustomImg';

export const ReviewItem = ({
  title,
  stylist,
  reviewRating,
  content,
  images,
  date,
  visitCount,
  name,
}: ReviewItemProps) => {
  return (
    <div className="mb-4 border-t border-t-white-default pt-4">
      <div className="text-base font-bold">
        {title}
        <span className="px-2 text-base text-black-default">{'>'}</span>
        <span className="text-sm font-normal text-gray-300">{stylist}</span>
      </div>

      <div className="mb-2 flex items-center">
        <CustomImg src="/assets/images/icons/icon-star.webp" height={'15'} width={'15'} />
        <div className="pl-1 text-[14px] text-black-default"> {reviewRating.toFixed(1)}</div>
      </div>
      {images && images.length > 0 && (
        <div className="mb-4 flex gap-[2px]">
          {images.map((image: string, index: Key | null | undefined) => (
            <CustomImg
              key={index}
              src={image}
              addClassName="rounded-sm object-cover h-auto"
              height={''}
              width={'110'}
            />
          ))}
        </div>
      )}

      <span className="text-gray-600">{content}</span>

      <div className="mb-2 mt-4 text-sm text-gray-600">
        {name} | {date}일 전 | {visitCount}번째 방문
      </div>
    </div>
  );
};
