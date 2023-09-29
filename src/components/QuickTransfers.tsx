import { icons } from "../assets";
import { transfers } from "../data";
import { Heading } from "../helpers";
import { ITransfer } from "../interface";

import { useContext } from "react";
import { ThemeContext } from "../App";
const QuickTransfers = () => {
  const theme = useContext(ThemeContext);
  return (
    <article className="h-1/3 w-[90%] p-4 rounded-lg dark-white">
      <Heading
        header={"Quick Transfers"}
        action={"add"}
        icon={theme === "light" ? icons.plusB : icons.plusW}
      />
      <div className="h-3" />
      {transfers.map((transfer: ITransfer, index: number) => (
        <button
          key={transfer.account}
          className="flex-center hover:bg-gray-200 hover:bg-opacity-25 !justify-around gap-4 w-full p-3"
          style={{ borderTop: index !== 0 ? "1px solid gray" : "" }}
        >
          <span className="dark-gray rounded-full px-4 py-2 w-10">
            {transfer.name[0].toUpperCase()}
          </span>
          <div className="flex-grow text-start">
            <div>{transfer.name}</div>
            <div className="text-gray-400 text-xs">
              **** {transfer.account.toString().slice(-4)}
            </div>
          </div>
          <img
            className="w-6 h-6"
            src={
              theme === "light"
                ? icons.rightArrowB.icon
                : icons.rightArrowW.icon
            }
            alt={icons.rightArrowB.label}
          />
        </button>
      ))}
    </article>
  );
};

export default QuickTransfers;
