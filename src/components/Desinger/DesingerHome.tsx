import { CustomButton } from '../Button/Button';
import { DesignerList } from './DesingerList';

export const DesingerHome = () => {
  return (
    <div className="w-full max-w-default px-4 pb-10 pt-0">
      <DesignerList count={5} />
      <div className="flex w-full items-center justify-center">
        <CustomButton text={'디자이너 전체보기'} onClick={() => {}} />
      </div>
    </div>
  );
};
