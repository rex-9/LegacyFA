import { icons } from "../assets";
import { Heading } from "../helpers";
import { IExpense } from "../interface";

const ExpensesAnalysisCard = ({ expenses }: { expenses: IExpense[] }) => {
  return (
    <div className="w-2/5 h-72 p-4 rounded-lg">
      <Heading header={"Expenses"} action={"last week"} icon={icons.lens} />
      <div className="flex-center !justify-around my-3">
        <img
          // className="absolute bottom-0 right-0"
          src={icons.logo.icon}
          alt={icons.logo.label}
        />
        <div>
          {expenses.map((expense: IExpense) => (
            <p className="flex-center !justify-between gap-4">
              <div
                className={`rounded-full h-3 w-3`}
                style={{ backgroundColor: expense.color }}
              />
              <span className="flex-grow">{expense.field}</span>
              <span>${expense.amount}</span>
            </p>
          ))}
        </div>
      </div>
      <span>You have spent 16% less money this week than last week.</span>
    </div>
  );
};

export default ExpensesAnalysisCard;
