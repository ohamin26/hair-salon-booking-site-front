import { PriceList } from './PriceList';
import { CustomButton } from '../Button/Button';
import PickMenuList from './PickMenuList';
import { Link } from 'react-router-dom';

export const PickMenu = () => {
  return (
    <div className="w-full max-w-default px-4 pb-10 pt-0">
      <PickMenuList short={true} />
      <PriceList />
      <Link to="./product" className="flex w-full justify-center">
        <CustomButton text={'메뉴 전체보기'} onClick={() => {}} />
      </Link>
    </div>
  );
};
