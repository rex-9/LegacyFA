import { icons } from "../assets";
import { Heading } from "../helpers";
import { IExpense } from "../interface";
import DonutChart from "./DonutChart";

const ExpensesAnalysisCard = ({ expenses }: { expenses: IExpense[] }) => {
  return (
    <article className="expenses-card w-2/5 h-80 p-4 rounded-lg bg-white">
      <Heading
        header={"Expenses"}
        action={"last week"}
        icon={icons.downArrow}
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
