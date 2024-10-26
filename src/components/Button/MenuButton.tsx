import { CustomButton } from './Button';

type MenuButtonProps = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

export default function MenuButton({ text, isActive, onClick }: MenuButtonProps) {
  return (
    <div>
      <CustomButton
        text={text}
        addClassName={`px-2 py-2 mx-1 border-0 rounded-full mt-6 ${isActive ? ' bg-black text-white font-semibold' : ''}`}
        onClick={onClick}
      />
    </div>
  );
}
