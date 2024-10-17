import { Link, useLocation } from 'react-router-dom';

type LinkProps = {
  children?: React.ReactNode;
  to: string;
};

type MenuHeaderProps = {
  reviewCount: number;
};

export const MenuHeader = ({ reviewCount }: MenuHeaderProps) => {
  const location = useLocation();
  const active =
    'text-black-default font-bold relative z-10 before:absolute before:w-full before:left-0 before:bottom-1 before:h-[6px] before:bg-purple-100 before:z-[-1]';
  const LinkMenu = (props: LinkProps) => {
    return (
      <Link to={props.to} className={location.pathname === props.to ? active : ''}>
        {props.children}
      </Link>
    );
  };
  return (
    <header className="text-menuTilte max-w-default min-w-default block h-12 w-[320px] items-start justify-start bg-white p-4 font-thin text-gray-500">
      <div className="space-x-4">
        <LinkMenu to="/">
          <span>홈</span>
        </LinkMenu>
        <LinkMenu to="/menu">
          <span>메뉴</span>
        </LinkMenu>
        <LinkMenu to="/designer">
          <span>디자이너</span>
        </LinkMenu>
        <LinkMenu to="/review">
          <span>리뷰 {reviewCount}</span>
        </LinkMenu>
      </div>
    </header>
  );
};
