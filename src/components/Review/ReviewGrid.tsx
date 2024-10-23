import { CustomImg } from '../Image/CustomImg';

const images = [
  'https://picsum.photos/320/320',
  'https://picsum.photos/320/320',
  'https://picsum.photos/320/320',
  'https://picsum.photos/320/320',
  'https://picsum.photos/320/320',
  'https://picsum.photos/320/320',
  'https://picsum.photos/320/320',
];

export const ReviewGrid = (/*{ images }*/) => {
  return (
    <div className="grid grid-cols-4 gap-[1px] border-b border-b-gray-50 py-5">
      {images.slice(0, 7).map((image, index) => (
        <CustomImg key={index} src={image} addClassName="h-auto w-full object-cover" height={''} width={''} />
      ))}
      <button className="relative overflow-hidden bg-gray-200">
        <CustomImg src={images[6]} addClassName="h-auto w-full object-cover opacity-90" height={''} width={''} />
        <div className="bg-black absolute inset-0 flex items-center justify-center bg-opacity-50 text-base font-bold text-white-default">
          +더보기
        </div>
      </button>
    </div>
  );
};
