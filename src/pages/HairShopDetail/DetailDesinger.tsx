import { DetailHeader } from '@/components/Hearder/DetailHeader';
import { DesignerList } from '@/components/Desinger/DesingerList';
import { HairshopDetail } from '@/components/Container/HairshopDetail';

export default function DetailDesinger() {
  return (
    <HairshopDetail addClassName="p-2">
      <DetailHeader />
      <DesignerList short={false} />
    </HairshopDetail>
  );
}
