import { CustomImg } from '@/components/Image/CustomImg';

type MenuProps = {
  width: string;
  height: string;
  text: string;
  src: string;
};

export const Tap = ({ width, height, text, src }: MenuProps) => {
  return (
    <button type="button" className="flex flex-col items-center p-11 py-4">
      <CustomImg src={src} height={height} width={width} />
      <span>{text}</span>
    </button>
  );
};
