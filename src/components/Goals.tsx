import { icons } from "../assets";
import { goals } from "../data";
import { Heading } from "../helpers";
import { IGoal } from "../interface";

const Goals = () => {
  return (
    <article className="h-1/3 w-[90%] p-4 rounded-lg bg-white">
      <Heading header={"Goals"} action={"add goal"} icon={icons.downArrow} />
      {goals.map((goal: IGoal) => (
        <div
          key={goal.name}
          className="flex-center !justify-around gap-4 w-full my-3 pt-3"
        >
          {goal.name === "Trip" && (
            <img
              className="w-10 h-10 rounded-full bg-gray-200 p-2"
              src={icons.plane.icon}
              alt={icons.plane.label}
            />
          )}
          {goal.name === "House" && (
            <img
              className="w-10 h-10 rounded-full bg-gray-200 p-2"
              src={icons.house.icon}
              alt={icons.house.label}
            />
          )}
          {goal.name === "Camera" && (
            <img
              className="w-10 h-10 rounded-full bg-gray-200 p-2"
              src={icons.camera.icon}
              alt={icons.camera.label}
            />
          )}
          <div className="flex-grow">
            <div className="flex-center !justify-between">
              <div>{goal.name}</div>
              <div>
                ${goal.current} /{" "}
                <span className="text-gray-400">${goal.total}</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 h-full rounded-full"
                style={{
                  width: `calc((${goal.current} / ${goal.total}) * 100%)`,
                }}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="flex-center gap-4">
        <button className="bg-purple-600 rounded-full w-2 h-2" />
        <button className="bg-purple-300 rounded-full w-2 h-2" />
      </div>
    </article>
  );
};

export default Goals;
