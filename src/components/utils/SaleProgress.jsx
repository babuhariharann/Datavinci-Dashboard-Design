import SalesList from "./SalesList";
const SaleProgress = ({
  saleProgress: { icon, title, subtitle, container },
}) => {
  return (
    <div className="mt-8 md:pl-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-blue-300 text-xl">{icon}</p>
          <p className="font-semibold text-xl ml-2">{title}</p>
        </div>
        <button className="cursor-pointer text-sm text-blue-600 duration-700 ease-in-out transition-all hover:scale-95">
          {subtitle}
        </button>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4">
        {container?.map((item, i) => (
          <SalesList {...item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SaleProgress;
