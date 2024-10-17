import { useState } from 'react';
import Tab from './Tab';

const TAB_LIST = ['홈', '내주변', '예약', '마이'];
export type TabType = (typeof TAB_LIST)[number];

export default function HomaNavigation() {
  const [currentTab, setCurrentTab] = useState<TabType>('홈');

  const handleTabClick = (tab: TabType) => {
    setCurrentTab(tab);
  };
  return (
    <nav className="flex justify-between mx-[13px]">
      {TAB_LIST.map((tab) => (
        <Tab key={tab} tab={tab} handleTabClick={handleTabClick} currentTab={currentTab} />
      ))}
    </nav>
  );
}
