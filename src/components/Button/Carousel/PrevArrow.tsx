export const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className={`text-white absolute left-0 top-1/3 z-[1] translate-y-1/2 rounded-none border border-transparent bg-gray-600 bg-opacity-50 p-[10px] text-5xl`}
      onClick={onClick}
    >
      {'<'}
    </button>
  );
};
