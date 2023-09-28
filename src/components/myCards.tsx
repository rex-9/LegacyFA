import { icons } from "../assets";
import { Heading } from "../helpers";

const MyCards = () => {
  return (
    <article className="h-1/3 w-[90%] p-4 rounded-lg">
      <Heading header={"My Cards"} action={"add card"} icon={icons.lens} />
    </article>
  );
};

export default MyCards;
