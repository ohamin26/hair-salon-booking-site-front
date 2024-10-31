import { Map, MapMarker } from 'react-kakao-maps-sdk';
export default function HairShopMap() {
  return (
    <div className="h-full">
      <h3 className="text-lg font-bold p-[16px] bg-white">강남구 역삼동</h3>
      <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: '100%', height: '100%', maxWidth: '640px' }}>
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}></MapMarker>
      </Map>
    </div>
  );
}
