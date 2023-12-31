import { icons } from "../../assets";
import { Heading } from "../../helpers";
import ColumnChart from "./../charts/ColumnChart";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { IFinance } from "../../interface";

const FinancialAnalysisCard = ({ finance }: { finance: IFinance }) => {
  const theme = useContext(ThemeContext);
  return (
    <article className="relative dark-card h-full w-1/3 p-4 rounded-lg">
      <Heading
        header={"Financial Analysis"}
        action={"this month"}
        icon={theme === "light" ? icons.downArrowB : icons.downArrowW}
      />
      {/* <div className="flex-center !justify-start gap-4 my-4">
        <span className="text-sm flex-center gap-2">
          <div className="rounded-full h-3 w-3" />
          Expanses
          <TinyIcon icon={icons.downArrow} />
        </span>
        <span className="text-sm flex-center gap-2">
          <div className="rounded-full h-3 w-3" />
          Income
          <TinyIcon icon={icons.downArrow} />
        </span>
      </div> */}
      <ColumnChart finance={finance} />
    </article>
  );
};

export default FinancialAnalysisCard;
