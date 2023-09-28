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
      <Heading
        header={"Transactions"}
        action={"today"}
        icon={icons.downArrow}
      />
      {transactions.map((transaction: ITransaction, index: number) => (
        <div
          className="flex-center !justify-between gap-4 py-1 my-1"
          style={{ borderTop: index !== 0 ? "1px solid black" : "" }}
        >
          {transaction.type === "Transfers" && (
            <img
              className="w-10 h-10 rounded-full bg-gray-200 p-2"
              src={icons.transactions.icon}
              alt={icons.transactions.label}
            />
          )}
          {transaction.type === "Taxi" && (
            <img
              className="w-10 h-10 rounded-full bg-gray-200 p-2"
              src={icons.car.icon}
              alt={icons.car.label}
            />
          )}
          {transaction.type === "Supermarkets" && (
            <img
              className="w-10 h-10 rounded-full bg-gray-200 p-2"
              src={icons.bag.icon}
              alt={icons.bag.label}
            />
          )}
          {transaction.type === "Rewards" && (
            <img
              className="w-10 h-10 rounded-full bg-gray-200 p-2"
              src={icons.database.icon}
              alt={icons.database.label}
            />
          )}
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
