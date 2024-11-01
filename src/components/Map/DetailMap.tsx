import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { CustomImg } from '../Image/CustomImg';
import { useMapModalState } from '@/stores/useModalState';

export default function DetailMapModal() {
  const { mapModalClose } = useMapModalState();

  return (
    <div
      id="map-modal"
      className="bg-black fixed inset-0 top-[-30px] z-50 flex items-center justify-center bg-opacity-50"
    >
      <div className="h-full w-full bg-white-default">
        <div className="relative z-10 flex w-full items-center justify-center p-[9px] shadow-md">
          <button
            onClick={() => mapModalClose()}
            className="absolute left-4 inline-flex h-6 w-6 items-center text-black-default"
          >
            <img src="/assets/images/icons/icon-close.svg" alt="Close modal" className="h-6 w-6" />
          </button>
          <span className="text-md">고아라헤어케어 강남점</span>
        </div>
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
    </div>
  );
}
