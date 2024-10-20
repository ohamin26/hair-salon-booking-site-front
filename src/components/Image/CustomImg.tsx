type ImgProps = {
  src: string;
  height: string;
  width: string;
};

export const CustomImg = ({ src, height, width }: ImgProps) => {
  return (
    <div>
      <img className={`h-[${height}px] w-[${width}px]`} src={src} alt="carousel" />
    </div>
  );
};
