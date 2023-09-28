import { icons } from "../assets";
import { Heading } from "../helpers";

const MyCards = () => {
  return (
    <article className="h-1/3 w-[90%] p-4 rounded-lg bg-white">
      <Heading header={"My Cards"} action={"add card"} icon={icons.lens} />
      <div className="flex-center gap-4">
        <button className="bg-purple-600 rounded-full w-2 h-2" />
        <button className="bg-purple-300 rounded-full w-2 h-2" />
      </div>
    </article>
  );
};

export default MyCards;
