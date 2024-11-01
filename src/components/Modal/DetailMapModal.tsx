import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { CustomImg } from '../Image/CustomImg';
import { useMapModalState } from '@/stores/useModalState';
import ModalNavigation from './ModalNavigation';
import ModalContainer from './ModalContainer';

export default function DetailMapModal() {
  const { mapModalClose } = useMapModalState();

  return (
    <ModalContainer>
      <div className="h-full w-full bg-white-default">
        <ModalNavigation
          onClick={mapModalClose}
          src="/assets/images/icons/icon-close.svg"
          text="고아라헤어케어 강남점"
        />
        <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: '100%', height: '85%' }}>
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }} />
        </Map>
        <div className="flex items-center p-4">
          <CustomImg src="/assets/images/icons/icon-location.svg" height="20" width="20" />
          <div className="text-md ml-2">
            <p>강남역 12번출구 바로 앞</p>
            <p className="text-sm text-gray-200">서울 강남구 역삼동 822-1 강남 a타워 지하1층</p>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
