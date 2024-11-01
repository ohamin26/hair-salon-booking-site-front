import ModalButton from '../Button/Modal/ModalButton';

type ModalNavigationProps = {
  onClick: () => void;
  src: string;
  text: string;
};

export default function ModalNavigation({ onClick, src, text }: ModalNavigationProps) {
  return (
    <div className="relative z-10 flex w-full items-center justify-center bg-white-default p-[9px] shadow-md">
      <ModalButton onClick={onClick} src={src} />
      <span className="text-md">{text}</span>
    </div>
  );
}
