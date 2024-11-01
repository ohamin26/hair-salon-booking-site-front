type ModalContainerProps = {
  children: React.ReactNode;
};

export default function ModalContainer({ children }: ModalContainerProps) {
  return (
    <div
      className={`${window.innerWidth < 600 && 'w-full'} bg-black fixed inset-0 left-auto right-auto top-[0px] z-50 flex w-[640px] min-w-default max-w-default flex-col`}
    >
      {children}
    </div>
  );
}
