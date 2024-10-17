import { TabType } from './HomeNavigation';

export default function Tab({
  tab,
  currentTab,
  handleTabClick,
}: {
  tab: TabType;
  currentTab: TabType;
  handleTabClick: (text: TabType) => void;
}) {
  return (
    <button
      onClick={() => handleTabClick(tab)}
      className={`flex flex-1 h-[44px] items-center justify-center ${currentTab === tab ? 'font-bold border-b-[3px] border-b-black-default' : 'border-b'} text-lg`}
    >
      {tab}
    </button>
  );
}
