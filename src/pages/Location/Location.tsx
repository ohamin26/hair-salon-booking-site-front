import locationPin from '/assets/images/icons/location-pin.svg';
import calendar from '/assets/images/icons/calendar.svg';
import clock from '/assets/images/icons/clock.svg';
import cancel from '/assets/images/icons/cancel.svg';
import GoBack from '../../components/GoBack';

export default function Location() {
  return (
    <div className="relative">
      <div className="flex h-[44px] items-center">
        <GoBack />
        <h2 className="flex-1 text-center text-[15px]">지역 검색</h2>
      </div>

      <div className="border-b-[4px] border-gray-input-bg px-[16px] pb-[24px] pt-[8px]">
        <div className="mb-[12px] flex h-[50px] items-center rounded-full bg-gray-input-bg">
          <img src={locationPin} width={20} height={20} className="ml-5" />
          <input className="text-3 w-full bg-gray-input-bg p-[12px] outline-none" />
          <button className="mr-[8px] h-[30px] w-[30px]">
            <img src={cancel} width={20} height={20} />
          </button>
          <button className="bg-white mr-[4px] flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-full">
            <img src={cancel} width={20} height={20} className="h-[20px] w-[20px] rounded-full" />
          </button>
        </div>
        <div className="flex gap-[6px]">
          <div className="flex h-[50px] flex-1 gap-[12px] rounded-full bg-gray-input-bg">
            <img src={calendar} width={20} height={20} className="ml-5" />
            <button className="w-full text-left">예약가능 날짜</button>
          </div>
          <div className="flex h-[50px] flex-1 gap-[12px] rounded-full bg-gray-input-bg">
            <img src={clock} width={20} height={20} className="ml-5" />
            <button className="w-full text-left">예약가능 시간</button>
          </div>
        </div>
      </div>

      <div className="px-[16px] pt-[24px]">
        <div className="pb-[24px]">
          <h2 className="mb-[24px] text-[16px] font-semibold text-[#111111]">관심지역</h2>
          <p className="text-[15px] font-semibold text-gray-400">관심있는 지역을 등록하고 빠르게 검색해보세요.</p>
        </div>
        <h2 className="mb-[24px] text-[16px] font-semibold text-[#111111]">최근 검색어</h2>
        <p className="text-[15px] font-semibold text-gray-400">최근 검색어가 없습니다.</p>
      </div>

      <div className="bg-white fixed bottom-0 left-0 right-0 p-[16px] shadow-[3px_0px_14px_-5px_rgba(0,0,0,0.5)]">
        <button className="text-white h-[50px] w-full bg-black-default text-[16px]">검색</button>
      </div>
    </div>
  );
}
