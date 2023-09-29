import { ThemeContext } from "../../App";
import { icons } from "../../assets";
import { Heading, TinyIcon } from "../../helpers";
import { IStock } from "../../interface";
import { useContext } from "react";

const InvestmentAnalysisCard = ({ stocks }: { stocks: IStock[] }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="w-1/2 h-80 p-4 rounded-lg dark-white">
      <Heading
        header={"Investment"}
        action={"today"}
        icon={theme === "light" ? icons.downArrowB : icons.downArrowW}
      />
      {stocks.map((stock: IStock, index: number) => (
        <div
          key={stock.initials}
          className="flex-center !justify-between gap-4 py-1 my-1"
          style={{ borderTop: index !== 0 ? "1px solid black" : "" }}
        >
          {stock.initials === "AAPL" && (
            <img
              className="w-10 h-10 rounded-full dark-gray p-2"
              src={theme === "light" ? icons.appleB.icon : icons.appleW.icon}
              alt={theme === "light" ? icons.appleB.label : icons.appleW.label}
            />
          )}
          {stock.initials === "TSLA" && (
            <img
              className="w-10 h-10 rounded-full dark-gray p-2"
              src={theme === "light" ? icons.teslaB.icon : icons.teslaW.icon}
              alt={theme === "light" ? icons.teslaB.label : icons.teslaW.label}
            />
          )}
          {stock.initials === "NFLX" && (
            <img
              className="w-10 h-10 rounded-full dark-gray p-2"
              src={
                theme === "light" ? icons.netflixB.icon : icons.netflixW.icon
              }
              alt={
                theme === "light" ? icons.netflixB.label : icons.netflixW.label
              }
            />
          )}
          {stock.initials === "AMZN" && (
            <img
              className="w-10 h-10 rounded-full dark-gray p-2"
              src={theme === "light" ? icons.amazonB.icon : icons.amazonW.icon}
              alt={
                theme === "light" ? icons.amazonB.label : icons.amazonW.label
              }
            />
          )}
          <div className="w-20">
            <p>{stock.initials.toUpperCase()}</p>
            <p className="text-gray-300 text-sm">{stock.name}</p>
          </div>
          {stock.increase ? (
            <span className="text-green-600 text-sm flex-center gap-1 flex-grow !justify-start">
              <TinyIcon
                icon={theme === "light" ? icons.increaseB : icons.increaseW}
              />
              <span>
                +{parseFloat(((stock.amount / stock.price) * 100).toFixed(2))}%
              </span>
            </span>
          ) : (
            <span className="text-red-600 text-sm flex-center gap-1 flex-grow !justify-start">
              <TinyIcon
                icon={theme === "light" ? icons.increaseB : icons.increaseW}
                reverse={true}
              />
              <span>
                -{parseFloat(((stock.amount / stock.price) * 100).toFixed(2))}%
              </span>
            </span>
          )}
          <div className="w-24 text-right">
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
