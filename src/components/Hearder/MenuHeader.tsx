import { useState } from 'react';
import MenuButton from '../Button/MenuButton';

interface MenuHeaderProps {
  kind: string[];
}

export default function MenuHeader({ kind }: MenuHeaderProps) {
  const [selectedType, setSelectedType] = useState('픽메뉴');
  return (
    <div className="flex pb-[16px]">
      {kind.map((menu: string) => {
        return <MenuButton text={menu} isActive={selectedType === menu} onClick={() => setSelectedType(menu)} />;
      })}
    </div>
  );
}
