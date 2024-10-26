import { CustomImg } from '@/components/Image/CustomImg';
import { twMerge } from 'tailwind-merge';

type MenuProps = {
  width: string;
  height: string;
  text: string;
  src: string;
  imgClassName?: string;
};

export const Tap = ({ width, height, text, src, imgClassName }: MenuProps) => {
  return (
    <button type="button" className="flex w-full flex-col items-center p-8 py-4">
      <div className={twMerge(`${imgClassName}`)}>
        <CustomImg src={src} height={height} width={width} />
      </div>
      <span>{text}</span>
    </button>
  );
};
