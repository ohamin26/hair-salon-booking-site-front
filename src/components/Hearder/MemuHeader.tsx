import { Link, useLocation } from 'react-router-dom';

type LinkProps = {
  children?: React.ReactNode;
  to: string;
};

type MenuHeaderProps = {
  reviewCount: number;
  id: string;
};

export const MenuHeader = ({ reviewCount, id }: MenuHeaderProps) => {
  const location = useLocation();
  const active =
    'text-black-default font-bold relative z-10 before:absolute before:w-full before:left-0 before:bottom-1 before:h-[6px] before:bg-purple-100 before:z-[-1]';
  const LinkMenu = (props: LinkProps) => {
    return (
      <Link to={`/${props.to}`} className={location.pathname === `/${props.to}` ? active : ''}>
        {props.children}
      </Link>
    );
  };
  return (
    <header className="bg-white block h-12 w-[640px] min-w-default max-w-default items-start justify-start p-4 text-menuTilte font-thin text-gray-500">
      <div className="space-x-4">
        <LinkMenu to={`${id}`}>
          <span>홈</span>
        </LinkMenu>
        <LinkMenu to={`${id}/product`}>
          <span>메뉴</span>
        </LinkMenu>
        <LinkMenu to={`${id}/designer`}>
          <span>디자이너</span>
        </LinkMenu>
        <LinkMenu to={`${id}/review`}>
          <span>리뷰 {reviewCount}</span>
        </LinkMenu>
      </div>
    </header>
  );
};
