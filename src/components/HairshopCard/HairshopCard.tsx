import like from '/assets/images/icons/icon-star.webp';
import { Link } from 'react-router-dom';

export default function HairshopCard({ shop }: { shop: any }) {
  return (
    <Link className="my-[25px] block" to={`/${shop.id}`}>
      <div className="flex gap-[6px] overflow-hidden">
        {shop.홍보이미지.map((image: string) => (
          <img src={image} alt="" className="h-[200px] w-[325px] shrink-0 rounded-lg" />
        ))}
      </div>
      <h3 className="pt-[16px] text-[18px] font-bold">{shop.가게이름}</h3>
      <div className="flex items-center">
        <img src={like} alt="" className="h-[14px] w-[14px]" />
        {shop.별점} ({shop.별점개수}) | {shop.운영시간}
      </div>
      <p className="overflow-hidden text-gray-400 text-ellipsis text-nowrap">{shop.안내문구}</p>
    </Link>
  );
}
