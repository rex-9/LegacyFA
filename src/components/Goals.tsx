import { icons } from "../assets";
import { goals } from "../data";
import { Heading } from "../helpers";
import { IGoal } from "../interface";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Goals = () => {
  const theme = useContext(ThemeContext);
  return (
    <article className="h-1/3 w-[90%] p-4 rounded-lg bg-white">
      <Heading
        header={"Goals"}
        action={"add goal"}
        icon={theme === "light" ? icons.downArrowB : icons.downArrowW}
      />
      {goals.map((goal: IGoal) => (
        <div
          key={goal.name}
          className="flex-center !justify-around gap-4 w-full my-3 pt-3"
        >
          {goal.name === "Trip" && (
            <img
              className="w-10 h-10 rounded-full bg-gray-200 p-2"
              src={theme === "light" ? icons.planeB.icon : icons.planeW.icon}
              alt={theme === "light" ? icons.planeB.label : icons.planeW.label}
            />
          )}
          {goal.name === "House" && (
            <img
              className="w-10 h-10 rounded-full bg-gray-200 p-2"
              src={theme === "light" ? icons.houseB.icon : icons.houseW.icon}
              alt={theme === "light" ? icons.houseB.label : icons.houseW.label}
            />
          )}
          {goal.name === "Camera" && (
            <img
              className="w-10 h-10 rounded-full bg-gray-200 p-2"
              src={theme === "light" ? icons.cameraB.icon : icons.cameraW.icon}
              alt={
                theme === "light" ? icons.cameraB.label : icons.cameraW.label
              }
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
