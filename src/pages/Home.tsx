import LocationSetting from '../components/Location/LocationSetting';
import HomeMenuList from '../components/HomeMenu/HomeMenuList';

export default function Home() {
  return (
    <div className="min-w-default max-w-default">
      <div className="p-[24px]">
        <LocationSetting />
      </div>
      <HomeMenuList />
    </div>
  );
}
