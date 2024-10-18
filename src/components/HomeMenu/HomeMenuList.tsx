import HomeMenu from './HomeMenu';

export default function HomeMenuList() {
  return (
    <div className="grid grid-cols-4">
      <HomeMenu text="헤어샵" src="/assets/images/icons/hair-shop-menu-icon.webp" />
      <HomeMenu text="디자이너" src="/assets/images/icons/designer-menu-icon.webp" />
    </div>
  );
}
