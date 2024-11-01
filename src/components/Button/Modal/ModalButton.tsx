type ModalButtonProps = {
  onClick: () => void;
  src: string;
};

export default function ModalButton({ onClick, src }: ModalButtonProps) {
  return (
    <button onClick={onClick} className="absolute left-4 inline-flex h-6 w-6 items-center text-black-default">
      <img src={src} alt="Close modal" className="h-6 w-6" />
    </button>
  );
}
