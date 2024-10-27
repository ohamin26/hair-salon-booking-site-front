import arrowDown from '/assets/images/icons/icon-arrow-down.svg';
export default function Designer() {
  return (
    <div>
      <div className="px-[16px]">
        <div>
          <button className="flex items-center gap-[6px] rounded-3xl border border-gray-100 px-[8px] py-[4px]">
            여성 추천순
            <img src={arrowDown} alt="" />
          </button>
        </div>
        {mockHairShop.map((shop, index) => (
          <>
            <HairshopCard shop={shop} />
            {index !== mockHairShop.length - 1 && <div className="h-[1px] bg-gray-100" />}
          </>
        ))}
      </div>
      <div className="fixed bottom-[20px] left-0 right-0">
        <button className="bg-white m-auto flex items-center gap-[4px] rounded-full px-[20px] py-[12px] drop-shadow-2xl">
          <img src={location} className="h-[16px] w-[16px]" />
          <span className="font-semibold">지도보기</span>
        </button>
      </div>
    </div>
  );
}
