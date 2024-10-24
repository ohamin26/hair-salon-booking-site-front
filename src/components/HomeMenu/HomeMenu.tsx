import { Link } from 'react-router-dom';

export default function HomeMenu({ text, src }: { text: string; src: string }) {
  const getType = () => {
    switch (text) {
      case '헤어샵':
        return 'hair';
      case '디자이너':
        return 'designer';
      default:
        return '';
    }
  };

  return (
    <Link className="flex flex-col items-center gap-1" to={`/search/${getType()}`}>
      <img src={src} alt="" className="w-[69px]" />
      <span className="text-[12px]">{text}</span>
    </Link>
  );
}
