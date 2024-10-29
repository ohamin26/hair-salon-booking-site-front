import { Outlet, useNavigate } from 'react-router-dom';
import homeIcon from '/assets/images/icons/icon-home.svg';
import arrowLeft from '/assets/images/icons/icon-arrow-left.svg';
export const MenuNavigation = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const gohome = () => {
    navigate('/');
  };
  return (
    <div>
      <div className="bg-white flex h-fit w-full max-w-default items-center justify-between">
        <button onClick={goBack}>
          <img src={arrowLeft} width={40} height={44} className="px-[8px] py-[10px]" />
        </button>
        <div>헤어샵 타이틀</div>
        <button onClick={gohome}>
          <img src={homeIcon} alt="search-icon" width={40} height={44} className="px-[8px] py-[10px]" />
        </button>
      </div>
      <Outlet />
    </div>
  );
};
