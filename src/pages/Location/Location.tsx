import { useNavigate } from 'react-router-dom';
import arrowLeft from '/assets/images/icons/arrow-left.svg';
import locationPin from '/assets/images/icons/location-pin.svg';

export default function Location() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="relative">
      <div className="flex h-[44px] items-center">
        <button onClick={goBack} className="absolute">
          <img src={arrowLeft} width={40} height={44} className="px-[8px] py-[10px]" />
        </button>
        <h2 className="flex-1 text-center text-[15px]">지역 검색</h2>
      </div>
      <div>
        <img src={locationPin} alt="" />
        <input className="w-10" />
      </div>
    </div>
  );
}
