import { PriceList } from './PriceList';
import { CustomButton } from '../Button/Button';
import PickMenuList from './PickMenuList';

export const PickMenu = () => {
  return (
    <div className="w-full max-w-default px-4 pb-10 pt-0">
      <PickMenuList short={true} />
      <PriceList />
      <div className="flex w-full justify-center">
        <CustomButton text={'메뉴 전체보기'} onClick={() => {}} />
      </div>
    </div>
  );
};
