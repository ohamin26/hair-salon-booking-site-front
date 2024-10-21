import { Link } from 'react-router-dom';

export default function LocationSetting() {
  return (
    <Link className="flex items-center gap-2" to="/location">
      <img src="/assets/images/icons/location-pin.svg" width={24} height={24}/>
      <span className="text-lg font-bold">안산시 고잔동</span>
      <img src="/assets/images/icons/arrow-down.svg" />
    </Link>
  );
}
