type ContainerProps = {
  children: React.ReactNode;
  addClassName?: string;
};

export const HairshopDetail = ({ children, addClassName }: ContainerProps) => {
  return <div className={`w-[640px] min-w-default max-w-default pb-20 ${addClassName}`}>{children}</div>;
};
