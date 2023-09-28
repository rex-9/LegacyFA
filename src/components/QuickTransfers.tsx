import { icons } from "../assets";
import { transfers } from "../data";
import { Heading } from "../helpers";
import { ITransfer } from "../interface";

const QuickTransfers = () => {
  return (
    <article className="h-1/3 w-[90%] p-4 rounded-lg">
      <Heading header={"Quick Transfers"} action={"add"} icon={icons.lens} />
      {transfers.map((transfer: ITransfer, index: number) => (
        <button
          className="flex-center !justify-around gap-4 w-full my-3 pt-3"
          style={{ borderTop: index !== 0 ? "1px solid gray" : "" }}
        >
          <span className="bg-white rounded-full px-4 py-2 w-10">
            {transfer.name[0].toUpperCase()}
          </span>
          <div className="flex-grow text-start">
            <div>{transfer.name}</div>
            <div className="text-gray-200 text-xs">
              **** {transfer.account.toString().slice(-4)}
            </div>
          </div>
          <img
            className="w-4 h-4"
            src={icons.lens.icon}
            alt={icons.lens.label}
          />
        </button>
      ))}
    </article>
  );
};

export default QuickTransfers;
