type ContainerProps = {
  children: React.ReactNode;
  addClassName?: string;
};

export const HairshopDetail = ({ children, addClassName }: ContainerProps) => {
  return <div className={`min-w-default max-w-default pb-20 ${addClassName}`}>{children}</div>;
};
