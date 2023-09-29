import { ThemeContext } from "../App";
import { icons, images } from "../assets";
import { cards } from "../data";
import { Heading } from "../helpers";
import { ICard } from "../interface";
import { useContext } from "react";

const MyCards = () => {
  const theme = useContext(ThemeContext);
  const visa = cards[0];
  const master = cards[1];
  const Card = ({ card }: { card: ICard }) => {
    const [integerPart, decimalPart] = card.balance.toString().split(".");
    return (
      <div
        className={
          card.type === "VISA"
            ? "absolute z-10 bg-gradient-to-br from-blue-400 via-blue-600 to-pink-500 text-white flex flex-col justify-between rounded-xl px-4 py-2 w-[85%] h-[80%]"
            : "absolute -z-0 bottom-4 right-0 bg-gradient-to-br from-pink-400 via-red-400 to-red-600 text-white flex flex-col justify-between rounded-xl px-4 py-2 w-[85%] h-[80%]"
        }
      >
        <div className="flex justify-between items-center">
          <span>Balance</span>
          {card.type === "VISA" ? (
            <img
              className="w-12 h-10"
              src={images.visa.icon}
              alt={images.visa.label}
            />
          ) : (
            <img
              className="w-8 h-8"
              src={icons.sim.icon}
              alt={icons.sim.label}
            />
          )}
        </div>
        <p className="text-2xl font-bold">
          <span>${integerPart}</span>
          <span className="text-sm">.{decimalPart}</span>
        </p>
        <div className="flex justify-between items-center text-sm">
          <div className="w-34">
            <p>{card.account.toString().replace(/\d{4}(?=.)/g, "$& ")}</p>
            <div className="flex text-xs justify-between">
              <span>{card.name}</span>
              <span>{card.expireDate}</span>
            </div>
          </div>
          {card.type === "VISA" ? (
            <img
              className="w-8 h-8"
              src={icons.sim.icon}
              alt={icons.sim.label}
            />
          ) : (
            <img
              className="w-12 h-10"
              src={images.master.icon}
              alt={images.master.label}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <article className="h-1/3 w-[90%] p-4 rounded-lg dark-white">
      <Heading
        header={"My Cards"}
        action={"add card"}
        icon={theme === "light" ? icons.downArrowB : icons.downArrowW}
      />
      <div className="mt-2 relative h-44">
        <Card card={visa} />
        <Card card={master} />
      </div>
      <div className="flex-center gap-4">
        <button className="bg-purple-600 rounded-full w-2 h-2" />
        <button className="bg-purple-300 rounded-full w-2 h-2" />
      </div>
    </article>
  );
};

export default MyCards;
