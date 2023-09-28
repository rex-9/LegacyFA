import { icons } from "../assets";
import { Heading } from "../helpers";
import { IExpense } from "../interface";

const ExpensesAnalysisCard = ({ expenses }: { expenses: IExpense[] }) => {
  return (
    <div className="w-2/5 h-80 p-4 rounded-lg bg-white">
      <Heading
        header={"Expenses"}
        action={"last week"}
        icon={icons.downArrow}
      />
      <div className="flex-center !justify-around my-4">
        <img
          // className="absolute bottom-0 right-0"
          src={icons.logo.icon}
          alt={icons.logo.label}
        />
        <div>
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
        </div>
      </div>
      <div className="mt-8">
        You have spent 16% less money this week than last week.
      </div>
    </div>
  );
};

export default ExpensesAnalysisCard;
