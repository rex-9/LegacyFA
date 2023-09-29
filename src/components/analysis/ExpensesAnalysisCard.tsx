import { ThemeContext } from "../../App";
import { icons } from "../../assets";
import { Heading } from "../../helpers";
import DonutChart from "../charts/DonutChart";
import { useContext } from "react";
// import { IExpense } from "../../interface";

// const ExpensesAnalysisCard = ({ expenses }: { expenses: IExpense[] }) => {
const ExpensesAnalysisCard = () => {
  const theme = useContext(ThemeContext);
  return (
    <article className="expenses-card w-2/5 h-80 p-4 rounded-lg dark-card">
      <Heading
        header={"Expenses"}
        action={"last week"}
        icon={theme === "light" ? icons.downArrowB : icons.downArrowW}
      />
      <div className="relative flex-center !justify-around">
        <DonutChart />
        {/* <div>
          {expenses.map((expense: IExpense) => (
            <div
              key={expense.amount}
              className="flex-center !justify-between gap-4"
            >
              <div
                className={`rounded-full h-3 w-3`}
                style={{ backgroundColor: expense.color }}
              />
              <span className="flex-grow">{expense.field}</span>
              <span>${expense.amount}</span>
            </div>
          ))}
        </div> */}
      </div>
      <div>You have spent 16% less money this week than last week.</div>
    </article>
  );
};

export default ExpensesAnalysisCard;
