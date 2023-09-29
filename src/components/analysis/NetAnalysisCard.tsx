import { ReactNode } from "react";

import { icons } from "../../assets";
import { Heading, TinyIcon } from "../../helpers";
const NetAnalysisCard = ({
  label,
  amount,
  percentage,
  increase,
  chart,
}: {
  label: string;
  amount: number;
  percentage: number;
  increase: boolean;
  chart: ReactNode;
}) => {
  const [integerPart, decimalPart] = amount.toString().split(".");
  return (
    <article className="relative bg-white h-48 p-0 px-4 rounded-lg flex-center flex-col !items-start !justify-around">
      <Heading header={label} action={"this month"} icon={icons.downArrow} />
      <p className="text-3xl font-bold">
        <span>${integerPart}</span>
        <span className="text-sm">.{decimalPart}</span>
      </p>
      {increase ? (
        <span className="text-green-600 text-sm flex-center gap-2">
          <TinyIcon icon={icons.increase} />
          <span>+{percentage}%</span>
        </span>
      ) : (
        <span className="text-red-600 text-sm flex-center gap-2">
          <TinyIcon icon={icons.increase} reverse={true} />
          <span>-{percentage}%</span>
        </span>
      )}
      {chart}
    </article>
  );
};

export default NetAnalysisCard;
