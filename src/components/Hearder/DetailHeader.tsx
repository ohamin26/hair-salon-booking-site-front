import { Link, useLocation, useParams } from 'react-router-dom';

type LinkProps = {
  children?: React.ReactNode;
  to: string;
};

export const DetailHeader = () => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const reviewCount = 10;
  const active =
    'text-black-default font-bold relative z-10 before:absolute before:w-full before:bottom-[-2px] before:left-0 before:bottom-1 before:h-[12px] before:bg-purple-100 before:z-[-1]';
  const LinkMenu = (props: LinkProps) => {
    return (
      <Link to={`/${props.to}`} className={location.pathname === `/${props.to}` ? active : 'text-gray-400'}>
        {props.children}
      </Link>
    );
  };
  return (
    <header className="bg-white block h-12 w-[640px] min-w-default max-w-default items-start justify-start border-b-[1px] border-b-gray-50 p-3 pb-12 text-[18px]">
      <div className="space-x-5">
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
