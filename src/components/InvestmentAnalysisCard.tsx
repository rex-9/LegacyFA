import { icons } from "../assets";
import { Heading, TinyIcon } from "../helpers";
import { IStock } from "../interface";

const InvestmentAnalysisCard = ({ stocks }: { stocks: IStock[] }) => {
  return (
    <div className="w-1/2 h-80 p-4 rounded-lg bg-white">
      <Heading header={"Investment"} action={"today"} icon={icons.downArrow} />
      {stocks.map((stock: IStock, index: number) => (
        <div
          className="flex-center !justify-between gap-4 py-1 my-1"
          style={{ borderTop: index !== 0 ? "1px solid black" : "" }}
        >
          <img
            className="w-10 h-10 rounded-full bg-gray-200 p-2"
            src={stock.icon.icon}
            alt={stock.icon.label}
          />
          <div className="w-20">
            <p>{stock.initials.toUpperCase()}</p>
            <p className="text-gray-300">{stock.name}</p>
          </div>
          {stock.increase ? (
            <span className="text-green-600 text-sm flex-center gap-2 flex-grow !justify-start">
              <TinyIcon icon={icons.increase} />
              <span>
                +{parseFloat(((stock.amount / stock.price) * 100).toFixed(2))}%
              </span>
            </span>
          ) : (
            <span className="text-red-600 text-sm flex-center gap-2 flex-grow !justify-start">
              <TinyIcon icon={icons.decrease} />
              <span>
                -{parseFloat(((stock.amount / stock.price) * 100).toFixed(2))}%
              </span>
            </span>
          )}
          <div>
            <p>${stock.price}</p>
            {stock.increase ? (
              <p className="text-green-600">+${stock.amount}</p>
            ) : (
              <p className="text-red-600">-${stock.amount}</p>
            )}
          </div>
        </div>
      ))}
      <div className="flex-center gap-4">
        <button className="bg-purple-300 rounded-full w-2 h-2" />
        <button className="bg-purple-600 rounded-full w-2 h-2" />
        <button className="bg-purple-300 rounded-full w-2 h-2" />
      </div>
    </div>
  );
};

export default InvestmentAnalysisCard;
