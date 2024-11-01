import DesignerHeader from '@/components/Hearder/DesignerHearder';
import DesignerCard from '@/components/DesingerInfo/DesingerCard';
import { DesignerNavigation } from '@/components/DesingerNavigation/DesingerNaviagtion';
import { PickMenu } from '@/components/PickMenu/PickMenu';
import { ReviewHome } from '@/components/Review/ReviewHome';
import { useReviewModalState } from '@/stores/useModalState';
import ReviewModal from '@/components/Modal/ReviewModal';

const mockDesigner = {
  name: '지혜 부원장',
  career: '무엇이든 귀기울여 듣겠습니다(10년)',
  info: '한결같은 미소로 고객님을 맞이하는 따듯한 디자이너입니다. 끝없이 노력하는 열정적인 디자이너, 여러분을 행복하게 하는 해피 바이러스 고아라헤어케어 강남점 지혜디자이너 입니다. ^^',
  hair_salon_name: '고아라헤어케어 강남점',
  rating: 4.8,
  review_count: 125,
  operating_hours: '10:00 - 20:00 (매주 토, 일 휴무)',
  cut_price: 15000,
  image: ['https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0'],
};

export default function DesignerInfo() {
  const { isReviewModalOpen } = useReviewModalState();
  return (
    <div className="w-[640px] min-w-default max-w-default">
      <DesignerNavigation />
      <DesignerCard designer={mockDesigner} />
      <div className="sticky top-[47px]">
        <div className="bg-white absolute -top-4 left-1/2 h-6 w-full -translate-x-1/2 transform rounded-full" />
        <DesignerHeader />
      </div>
      {/** 기능 구현 시 데이터 구분지어야 함 */}
      <PickMenu />
      <ReviewHome />
      {isReviewModalOpen && <ReviewModal />}
    </div>
  );
}
