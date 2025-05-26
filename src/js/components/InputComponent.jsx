import { useState } from "react";
import "./InputComponent.css"; // Assuming you have a CSS file for styles
const InputComponent = ({ addToList }) => {
  const [task, setTask] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      //send to father component
      addToList(task);
      setTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add a new task!"
        value={task}
        onChange={handleTaskChange}
        onKeyDown={handleKeyDown}
        className="form-control border-custom"
      />
    </div>
  );
};
export default InputComponent;
