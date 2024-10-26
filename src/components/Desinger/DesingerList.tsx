import { CustomImg } from '../Image/CustomImg';
import { Paragraph } from '../Paragraph/Paragraph';

const designers = [
  {
    name: '스타일리스트 민경',
    expertise: '[김마리금웨이브펌/레이어드펌전문] (7년)',
    likes: 12,
    comments: 33,
    imgUrl: 'https://picsum.photos/320/320',
  },
  {
    name: '수석 스타일리스트 은서',
    expertise: '[퍼스널 컬러리스트/디자인컬러 전문] (8년)',
    likes: 4,
    comments: 161,
    imgUrl: 'https://picsum.photos/320/320',
  },
  {
    name: '수석 스타일리스트 호성',
    expertise: '[여신레이어드펌/맨즈 아이롱펌 전문] (7년)',
    likes: 51,
    comments: 51,
    imgUrl: 'https://picsum.photos/320/320',
  },
  {
    name: '팀장 기용',
    expertise: '[맨즈 아이롱펌/볼륨매직 전문 디렉터] (7년)',
    likes: 22,
    comments: 293,
    imgUrl: 'https://picsum.photos/320/320',
  },
  {
    name: '실장 유준',
    expertise: '[허쉬펌/복구펌 전문헤어 디렉터] (9년)',
    likes: 11,
    comments: 1,
    imgUrl: 'https://picsum.photos/320/320',
  },
];

export const DesignerList = ({ short = true }: { short?: boolean }) => {
  const filteredMenuData = short ? designers.slice(0, 5) : designers;
  return (
    <div className="mx-auto max-w-default pb-10">
      {short && <Paragraph text={'디자이너 7'}></Paragraph>}
      {filteredMenuData.map((designer, index) => (
        <div key={index} className="mt-4 flex items-center justify-between border-t border-t-white-default pt-5">
          <div className="flex items-center">
            <CustomImg src={designer.imgUrl} height="75" width="75" addClassName="mr-4 rounded-full" />
            <div>
              <p className="font-medium">{designer.name}</p>
              <p className="text-sm text-gray-500">{designer.expertise}</p>
              <div className="mt-1 flex items-center space-x-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="mr-1">❤️</span>
                  <span>{designer.likes}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-1">💬</span>
                  <span>{designer.comments}</span>
                </div>
              </div>
            </div>
          </div>
          <button className="flex rounded-[4px] border border-black-default bg-[fff] px-[9px] py-[7px] text-[13px] text-gray-800">
            <CustomImg src="\assets\images\icons\icon-reservation.svg" height="18" width="11" addClassName="mr-[6px]" />
            예약
          </button>
        </div>
      ))}
    </div>
  );
};
