import { React, UseState } from "react";
import "./RemainingToDosComponent.css";

const RemainingToDosComponent = ({ remainings }) => {
  console.log("remainings is " + remainings.length);
  return (
    <div className="howdy">
      <p className="">
        {`${
          remainings.length === 0
            ? "You don't have any task, lets add one!"
            : remainings.length + " remaining tasks....."
        }`}
      </p>
    </div>
  );
};
export default RemainingToDosComponent;
