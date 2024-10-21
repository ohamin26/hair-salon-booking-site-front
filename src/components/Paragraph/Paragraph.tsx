type ParagraphProps = {
  text: string;
};
export const Paragraph = ({ text }: ParagraphProps) => {
  return (
    <div className="my-0 w-full">
      <div className="mb-0 flex items-center">
        <p className="font-bold text-black-default">{text}</p>
      </div>
    </div>
  );
};
