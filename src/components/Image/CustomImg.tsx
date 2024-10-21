import { twMerge } from 'tailwind-merge';

type ImgProps = {
  src: string;
  height: string;
  width: string;
  addClassName?: string;
};

export const CustomImg = ({ src, height, width, addClassName }: ImgProps) => {
  return (
    <div>
      <img className={twMerge(`h-[${height}px] w-[${width}px] ${addClassName}`)} src={src} />
    </div>
  );
};
