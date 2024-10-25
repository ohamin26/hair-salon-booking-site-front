import { useNavigate } from 'react-router-dom';
import arrowLeft from '/assets/images/icons/icon-arrow-left.svg';
export default function GoBack() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <button onClick={goBack} className="absolute">
      <img src={arrowLeft} width={40} height={44} className="px-[8px] py-[10px]" />
    </button>
  );
}
