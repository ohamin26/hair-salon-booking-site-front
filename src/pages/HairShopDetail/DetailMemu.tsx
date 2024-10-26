import DetailMenuList from '../../components/DetailMenuList/DetailMenuList';
import { DetailHeader } from '../../components/Hearder/DetailHeader';
import MenuHeader from '../../components/Hearder/MenuHeader';
import PickMenuList from '../../components/PickMenu/PickMenuList';
import { menuItemsData } from '@/mocks/HairshopDetailData.js';

const menuList = [
  { text: '픽메뉴', type: 'pickMenu' },
  { text: '커트', type: 'cut' },
  { text: '펌', type: 'perm' },
  { text: '염색', type: 'dye' },
  { text: '클리닉', type: 'clinic' },
  { text: '스타일링', type: 'styling' },
];

export const DetailMemu = () => {
  const kindList = menuList.filter((item) => Object.keys(menuItemsData).includes(item.type)).map((item) => item.text);
  return (
    <div className="pb-20">
      <DetailHeader />
      <MenuHeader kind={kindList} />
      <PickMenuList short={false} />
      {Object.keys(menuItemsData).map(
        (title) =>
          title !== 'pickMenu' && (
            <DetailMenuList
              key={title}
              title={menuList.find((item) => item.type === title)?.text || 'Unknown'}
              menuItems={menuItemsData[title]}
            />
          ),
      )}
    </div>
  );
};
