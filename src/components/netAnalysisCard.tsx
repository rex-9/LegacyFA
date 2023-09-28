import { icons } from "../assets";
import { Heading, TinyIcon } from "../helpers";
const NetAnalysisCard = ({
  label,
  net,
  change,
  increase,
}: {
  label: string;
  net: number;
  change: number;
  increase: boolean;
}) => {
  return (
    <article className="relative w-1/3 h-48 p-0 px-4 rounded-lg flex-center flex-col !items-start !justify-around">
      <Heading header={label} action={"this month"} icon={icons.lens} />
      <p className="text-3xl font-bold">${net}</p>
      {increase ? (
        <span className="text-green-600 text-sm flex-center gap-2">
          <TinyIcon icon={icons.lens} />
          <span>+{change}%</span>
        </span>
      ) : (
        <span className="text-red-600 text-sm flex-center gap-2">
          <TinyIcon icon={icons.lens} />
          <span>-{change}%</span>
        </span>
      )}
      <img
        className="absolute bottom-0 right-0"
        src={icons.logo.icon}
        alt={icons.logo.label}
      />
    </article>
  );
};

export default NetAnalysisCard;
