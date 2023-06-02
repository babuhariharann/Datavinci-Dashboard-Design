import Graph from "./Graph";

const Revenue = ({
  revenue: { icon, title, subtitle, week, arrowUpIcon, percentage, text },
}) => {
  return (
    <div className="mt-8">
      <div className="flex items-center">
        <p className="text-pink-300 text-xl">{icon}</p>
        <p className="font-semibold text-xl ml-2">{title}</p>
      </div>
      <div className="mt-6 flex items-start">
        <h1 className="font-semibold text-2xl">{subtitle}</h1>
        <p className="text-gray-500 text-xs ml-3 mt-2 font-medium ">{week}</p>
      </div>
      <div className="mt-3 flex items-center cursor-pointer duration-700 ease-in-out transition-all hover:scale-95">
        <div className="bg-green-200 flex px-1 py-1 items-center justify-center rounded-sm">
          <span className="text-green-500 text-md">{arrowUpIcon}</span>
          <p className="text-green-500 text-xs">{percentage}</p>
        </div>
        <p className="text-gray-500 ml-2 font-medium text-xs">{text}</p>
      </div>
      <div className="mt-8">
        <Graph />
      </div>
    </div>
  );
};

export default Revenue;
