import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Tab from './Tab';
import Logo from '../Logo';
import GoBack from '../GoBack';

const TAB_LIST = ['홈', '내주변', '예약', '마이'];
export type TabType = (typeof TAB_LIST)[number];

export default function HomaNavigation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<TabType>('홈');

  const handleTabClick = (tab: TabType) => {
    setCurrentTab(tab);
    tab === '홈' && navigate('/');
    tab === '내주변' && navigate('/search/hair');
  };

  useEffect(() => {
    if (pathname.includes('search')) setCurrentTab('내주변');
    else setCurrentTab('홈');
  }, [pathname]);

  return pathname.includes('location') ? (
    <Outlet />
  ) : (
    <div>
      <div className="flex items-center">
        {pathname.includes('search') && <GoBack />}
        <Link className="m-auto flex w-[106px]" to="/" onClick={() => setCurrentTab('홈')}>
          <Logo />
        </Link>
      </div>
      <nav className="flex justify-between px-[13px]">
        {TAB_LIST.map((tab) => (
          <Tab key={tab} tab={tab} handleTabClick={handleTabClick} currentTab={currentTab} />
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
