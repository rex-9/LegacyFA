import { icons } from "../assets";
import { Heading, TinyIcon } from "../helpers";
import { IStock } from "../interface";

const InvestmentAnalysisCard = ({ stocks }: { stocks: IStock[] }) => {
  return (
    <div className="w-1/2 h-72 p-4 rounded-lg">
      <Heading header={"Investment"} action={"today"} icon={icons.lens} />
      {stocks.map((stock: IStock, index: number) => (
        <div
          className="flex-center !justify-between gap-4 py-1"
          style={{ borderTop: index !== 0 ? "1px solid black" : "" }}
        >
          <img
            className="w-6 h-6"
            src={icons.lens.icon}
            alt={icons.lens.label}
          />
          <div className="w-20">
            <p>{stock.initials.toUpperCase()}</p>
            <p className="text-gray-300">{stock.name}</p>
          </div>
          {stock.increase ? (
            <span className="text-green-600 text-sm flex-center gap-2 flex-grow !justify-start">
              <TinyIcon icon={icons.lens} />
              <span>
                +{parseFloat(((stock.amount / stock.price) * 100).toFixed(2))}%
              </span>
            </span>
          ) : (
            <span className="text-red-600 text-sm flex-center gap-2 flex-grow !justify-start">
              <TinyIcon icon={icons.lens} />
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
    </div>
  );
};

export default InvestmentAnalysisCard;
