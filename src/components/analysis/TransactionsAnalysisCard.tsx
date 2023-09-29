import { useContext } from "react";
import { icons } from "../../assets";
import { Heading } from "../../helpers";
import { ITransaction } from "../../interface";
import { ThemeContext } from "../../App";

const TransactionsAnalysisCard = ({
  transactions,
}: {
  transactions: ITransaction[];
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="w-1/2 h-80 p-4 rounded-lg dark-card">
      <Heading
        header={"Transactions"}
        action={"today"}
        icon={theme === "light" ? icons.downArrowB : icons.downArrowW}
      />
      {transactions.map((transaction: ITransaction, index: number) => (
        <div
          key={transaction.endUser}
          className="flex-center !justify-between gap-4 py-1 my-1"
          style={{ borderTop: index !== 0 ? "1px solid gray" : "" }}
        >
          {transaction.type === "Transfers" && (
            <img
              className="w-10 h-10 rounded-full dark-gray p-2"
              src={
                theme === "light"
                  ? icons.transactionsB.icon
                  : icons.transactionsW.icon
              }
              alt={
                theme === "light"
                  ? icons.transactionsB.label
                  : icons.transactionsW.label
              }
            />
          )}
          {transaction.type === "Taxi" && (
            <img
              className="w-10 h-10 rounded-full dark-gray p-2"
              src={theme === "light" ? icons.carB.icon : icons.carW.icon}
              alt={theme === "light" ? icons.carB.label : icons.carW.label}
            />
          )}
          {transaction.type === "Supermarkets" && (
            <img
              className="w-10 h-10 rounded-full dark-gray p-2"
              src={theme === "light" ? icons.bagB.icon : icons.bagW.icon}
              alt={theme === "light" ? icons.bagB.label : icons.bagW.label}
            />
          )}
          {transaction.type === "Rewards" && (
            <img
              className="w-10 h-10 rounded-full dark-gray p-2"
              src={
                theme === "light" ? icons.databaseB.icon : icons.databaseW.icon
              }
              alt={
                theme === "light"
                  ? icons.databaseB.label
                  : icons.databaseW.label
              }
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
