import { twMerge } from 'tailwind-merge';

type MoreInfoProps = {
  info: string;
  isOpen: boolean;
  onClick: () => void;
  textClass?: string;
};
export const TextBox = ({ info, isOpen, onClick, textClass }: MoreInfoProps) => {
  const maxTextLength = 50;

  return (
    <div className="flex items-end">
      <p className={twMerge(`text-sm text-gray-600 ${textClass}`)}>
        {isOpen ? info : `${info.slice(0, maxTextLength)}...`}
        {!isOpen && (
          <button type="button" className="pl-2 text-sm text-gray-400" onClick={onClick}>
            <span>더보기</span>
          </button>
        )}
      </p>
    </div>
  );
};
