import DoubleAreaChart from "./DoubleAreaChart";
const RevenueAnalysisCard = ({
  lastYear,
  thisYear,
}: {
  lastYear: number;
  thisYear: number;
}) => {
  return (
    <article className="relative bg-white h-72 w-2/3 p-4 rounded-lg">
      <div className="flex-center w-full !justify-between mb-4">
        <span className="text-2xl font-quicksand font-bold">
          Revenue Analysis
        </span>
        {/* <div className="flex-center gap-4 text-gray-300">
          <span className="text-sm flex-center gap-2 hover:text-black">
            <div className="rounded-full h-3 w-3" />
            {lastYear}
            <TinyIcon icon={icons.downArrow} />
          </span>
          <span className="text-sm flex-center gap-2 hover:text-black">
            <div className="rounded-full h-3 w-3" />
            {thisYear}
            <TinyIcon icon={icons.downArrow} />
          </span>
        </div> */}
      </div>
      <DoubleAreaChart
        label={"Revenue Analysis"}
        lastYear={lastYear}
        thisYear={thisYear}
      />
    </article>
  );
};

export default RevenueAnalysisCard;
