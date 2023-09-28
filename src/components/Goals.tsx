import { icons } from "../assets";
import { goals } from "../data";
import { Heading } from "../helpers";
import { IGoal } from "../interface";

const Goals = () => {
  return (
    <article className="h-1/3 w-[90%] p-4 rounded-lg">
      <Heading header={"Goals"} action={"add goal"} icon={icons.lens} />
      {goals.map((goal: IGoal) => (
        <button className="flex-center !justify-around gap-4 w-full my-3 pt-3">
          {goal.name === "Trip" && (
            <img
              className="w-6 h-6"
              src={icons.lens.icon}
              alt={icons.lens.label}
            />
          )}
          {goal.name === "House" && (
            <img
              className="w-6 h-6"
              src={icons.lens.icon}
              alt={icons.lens.label}
            />
          )}
          {goal.name === "Camera" && (
            <img
              className="w-6 h-6"
              src={icons.lens.icon}
              alt={icons.lens.label}
            />
          )}
          <div className="flex-grow">
            <div className="flex-center !justify-between">
              <div>{goal.name}</div>
              <div>
                ${goal.current} /{" "}
                <span className="text-gray-300">${goal.total}</span>
              </div>
            </div>
            <img
              className="w-4 h-4"
              src={icons.lens.icon}
              alt={icons.lens.label}
            />
          </div>
        </button>
      ))}
    </article>
  );
};

export default Goals;
