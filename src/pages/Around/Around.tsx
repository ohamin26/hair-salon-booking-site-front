import { Link } from 'react-router-dom';
import arrowDown from '/assets/images/icons/icon-arrow-down.svg';
import HairShop from '../HairShop/HairShop';
import Designer from '../Designer/Designer';
import { useAroundType } from '../../stores/useAroundType';

export default function Around() {
    const {type, setType} = useAroundType();
  return (
    <>
      <div className="bg-white fixed w-full px-[16px] py-[24px]">
        <Link to="/location" className="flex gap-[4px]">
          <strong className="text-[18px] font-bold">강남구 역삼동</strong>
          <img src={arrowDown} alt="" />
        </Link>
        <p className="text-gray-400">예약시간을 설정해주세요</p>
      </div>
      <div className="px-[16px] pb-[16px] pt-[96px]">
        <button
          className={`px-[9px] py-[11px] ${
            type === 'hair' ? 'bg-black text-white font-semibold' : ''
          } rounded-3xl text-[15px]`}
          onClick={() => setType('hair')}
        >
          헤어샵
        </button>
        <button
          className={`px-[9px] py-[11px] ${
            type === 'designer' ? 'bg-black text-white font-semibold' : ''
          } rounded-full text-[15px]`}
          onClick={() => setType('designer')}
        >
          디자이너
        </button>
      </div>
      {type === 'hair' ? <HairShop /> : <Designer />}
    </>
  );
}
