import { useNavType } from '../../stores/useNavType';

type ButtonProps = {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
};

export const Navigation = () => {
  const { type, setType } = useNavType();
  const reviewCount = 10;
  const active =
    'text-black-default font-bold relative z-10 before:absolute before:w-full before:left-0 before:bottom-1 before:h-[6px] before:bg-purple-100 before:z-[-1]';

  const Button = ({ onClick, isActive, children }: ButtonProps) => {
    return (
      <button onClick={onClick} className={isActive ? active : ''}>
        {children}
      </button>
    );
  };

  return (
    <header className="bg-white block h-12 min-w-default max-w-default items-start justify-start p-2 py-4 text-xl font-thin text-gray-500">
      <div className="space-x-4">
        <Button onClick={() => setType('info')} isActive={type === 'info'}>
          <span>정보</span>
        </Button>
        <Button onClick={() => setType('review')} isActive={type === 'review'}>
          <span>리뷰 {reviewCount}</span>
        </Button>
      </div>
      <hr className="mt-3 h-[1px] w-full border-0 bg-gray-50" />
    </header>
  );
};
