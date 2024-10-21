export const PriceList = () => {
  const services = [
    { category: '컷트', name: '남성커트+스타일링', price: '15,000원~' },
    { category: '펌', name: '베이직 펌', price: '50,000원~' },
    { category: '염색', name: '로레알/시세이도 전체염색', price: '68,000원~' },
    { category: '클리닉', name: '[강력한크리닉]무코타크리닉', price: '59,500원~' },
    { category: '스타일링', name: '여성글드라이', price: '18,000원~' },
  ];

  return (
    <div className="my-5 flex w-full flex-col rounded-lg bg-[#f7f7f7] p-2 shadow-md">
      {services.map((service, index) => (
        <div key={index} className="flex justify-between p-2">
          <span className="w-24 font-[500] text-gray-300">{service.category}</span>
          <span className="flex-1">{service.name}</span>

          <span className="text-black-default">{service.price}</span>
        </div>
      ))}
    </div>
  );
};
