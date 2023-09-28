import { TinyIcon } from "../helpers";
import { icons } from "../assets";
const RevenueAnalysisCard = ({
  lastYear,
  thisYear,
}: {
  lastYear: number;
  thisYear: number;
}) => {
  return (
    <article className="relative h-72 w-2/3 p-4 rounded-lg">
      <div className="flex-center w-full !justify-between mb-4">
        <span className="text-2xl font-quicksand font-bold">
          Revenue Analysis
        </span>
        <div className="flex-center gap-4">
          <span className="text-sm flex-center gap-2">
            <div className="rounded-full h-3 w-3" />
            {lastYear}
            <TinyIcon icon={icons.lens} />
          </span>
          <span className="text-sm flex-center gap-2">
            <div className="rounded-full h-3 w-3" />
            {thisYear}
            <TinyIcon icon={icons.lens} />
          </span>
        </div>
      </div>
      <img
        // className="absolute bottom-0 right-0"
        src={icons.logo.icon}
        alt={icons.logo.label}
      />
    </article>
  );
};

export default RevenueAnalysisCard;
