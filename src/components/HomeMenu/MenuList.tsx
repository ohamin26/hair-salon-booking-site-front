import Menu from './Menu';

export default function MenuList() {
  return (
    <div className="grid grid-cols-4">
      <Menu text="헤어샵" src="/assets/images/icons/hair-shop-menu-icon.webp" />
      <Menu text="디자이너" src="/assets/images/icons/designer-menu-icon.webp" />
    </div>
  );
}
