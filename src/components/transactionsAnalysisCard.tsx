import { icons } from "../assets";
import { Heading } from "../helpers";
import { ITransaction } from "../interface";

const TransactionsAnalysisCard = ({
  transactions,
}: {
  transactions: ITransaction[];
}) => {
  return (
    <div className="w-1/2 h-80 p-4 rounded-lg bg-white">
      <Heading header={"Transactions"} action={"today"} icon={icons.lens} />
      {transactions.map((transaction: ITransaction, index: number) => (
        <div
          className="flex-center !justify-between gap-4 py-1 my-1"
          style={{ borderTop: index !== 0 ? "1px solid black" : "" }}
        >
          <img
            className="w-6 h-6"
            src={icons.lens.icon}
            alt={icons.lens.label}
          />
          <div className="flex-grow">
            <p>{transaction.endUser}</p>
            <p className="text-gray-300">{transaction.type}</p>
          </div>
          <div>
            {transaction.increase ? (
              <p className="text-green-600">+${transaction.amount}</p>
            ) : (
              <p className="text-red-600">-${transaction.amount}</p>
            )}
            <p className="text-gray-300">Debit Card</p>
          </div>
        </div>
      ))}
      <div className="flex-center gap-4">
        <button className="bg-purple-600 rounded-full w-2 h-2" />
        <button className="bg-purple-300 rounded-full w-2 h-2" />
      </div>
    </div>
  );
};

export default TransactionsAnalysisCard;
