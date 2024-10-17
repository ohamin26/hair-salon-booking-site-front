import { Link } from 'react-router-dom';
import HomaNavigation from '../components/HomeNavigation/HomeNavigation';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <div className="min-w-default max-w-default">
      <Link className="m-auto flex w-[106px]" to="/">
        <Logo />
      </Link>
      <HomaNavigation />
    </div>
  );
}
