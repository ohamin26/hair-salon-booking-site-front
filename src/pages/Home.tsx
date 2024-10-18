import { Link } from 'react-router-dom';
import HomaNavigation from '../components/HomeNavigation/HomeNavigation';
import Logo from '../components/Logo';
import LocationSetting from '../components/Location/LocationSetting';
import MenuList from '../components/HomeMenu/MenuList';

export default function Home() {
  return (
    <div className="min-w-default max-w-default">
      <Link className="m-auto flex w-[106px]" to="/">
        <Logo />
      </Link>
      <HomaNavigation />
      <div className="p-[24px]">
        <LocationSetting />
      </div>
      <MenuList />
    </div>
  );
}
