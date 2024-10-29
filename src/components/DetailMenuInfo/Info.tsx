type InfoProps = {
  timeRequired: string;
  additionalInfo: {
    target: string;
    composition: string;
    cutOption: string;
    shampooOption: string;
    product: string;
  };
  herbExtract: {
    title: string;
    description: string;
  };
};

const P = ({ title, text }: { title: string; text: string }) => {
  return (
    <p className="pb-2">
      <span className="font-medium">{title}:</span> {text}
    </p>
  );
};

export const Info = ({ timeRequired, additionalInfo, herbExtract }: InfoProps) => {
  return (
    <div className="border-b-[6px] border-white-default p-2">
      <div className="mt-4">
        <div className="flex items-center text-lg font-semibold text-red-600">
          <span>⏰</span>
          <span className="ml-1">타임세일 5% 추가할인</span>
        </div>
        <div className="mt-1 text-lg text-gray-600">매일 10:00 ~ 17:00 예약시</div>
        <div className="mt-1 text-lg text-gray-600">{timeRequired}</div>
      </div>
      <div className="mt-4 text-lg">
        <div className="font-semibold text-gray-700">부가정보</div>
        <div className="mt-1 text-gray-700">
          <P title="시술대상" text={additionalInfo.target} />
          <P title="시술구성" text={additionalInfo.composition} />
          <P title="커트옵션" text={additionalInfo.cutOption} />
          <P title="샴푸옵션" text={additionalInfo.shampooOption} />
          <P title="시술제품" text={additionalInfo.product} />
        </div>
      </div>
      <div className="text-md mt-4">
        <div className="pb-2 font-semibold text-gray-700">허브추출두피팩</div>
        <p className="mt-1 whitespace-pre-wrap text-gray-600">{herbExtract.description}</p>
      </div>
    </div>
  );
};
