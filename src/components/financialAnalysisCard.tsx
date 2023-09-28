import { icons } from "../assets";
import { Heading, TinyIcon } from "../helpers";
const FinancialAnalysisCard = () => {
  return (
    <article className="relative bg-white h-72 w-1/3 p-4 rounded-lg">
      <Heading
        header={"Financial Analysis"}
        action={"this month"}
        icon={icons.lens}
      />
      <div className="flex-center !justify-start gap-4 my-4">
        <span className="text-sm flex-center gap-2">
          <div className="rounded-full h-3 w-3" />
          Expanses
          <TinyIcon icon={icons.lens} />
        </span>
        <span className="text-sm flex-center gap-2">
          <div className="rounded-full h-3 w-3" />
          Income
          <TinyIcon icon={icons.lens} />
        </span>
      </div>
      <img
        // className="absolute bottom-0 right-0"
        src={icons.logo.icon}
        alt={icons.logo.label}
      />
    </article>
  );
};

export default FinancialAnalysisCard;
