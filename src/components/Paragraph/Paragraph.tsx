type ParagraphProps = {
  text: string;
  addClassName?: string;
};
export const Paragraph = ({ text, addClassName }: ParagraphProps) => {
  return (
    <div className="my-0 w-full">
      <div className="mb-0 flex items-center">
        <p className={`text-[17px] font-semibold text-black-default ${addClassName}`}>{text}</p>
      </div>
    </div>
  );
};
