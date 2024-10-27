import { Link } from 'react-router-dom';
import { useAroundType } from '../../stores/useAroundType';

export default function HomeMenu({ text, src }: { text: string; src: string }) {
  const { setType } = useAroundType();

  return (
    <Link
      className="flex flex-col items-center gap-1"
      to="/search/around"
      onClick={() => setType(text === '헤어샵' ? 'hair' : 'designer')}
    >
      <img src={src} alt="" className="w-[69px]" />
      <span className="text-[12px]">{text}</span>
    </Link>
  );
}
