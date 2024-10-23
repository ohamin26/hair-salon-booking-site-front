type MoreInfoProps = {
  info: string;
  isOpen: boolean;
  onClick: () => void;
};
export const TextBox = ({ info, isOpen, onClick }: MoreInfoProps) => {
  const maxTextLength = 50;

  return (
    <div className="flex items-center">
      <p className="text-sm text-gray-600">{isOpen ? info : `${info.slice(0, maxTextLength)}...`}</p>
      {!isOpen && (
        <button type="button" className="pl-2 text-sm text-gray-400" onClick={onClick}>
          <span>더보기</span>
        </button>
      )}
    </div>
  );
};
