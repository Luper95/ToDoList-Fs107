import { useState } from "react";
import "./InputComponent.css"; // Assuming you have a CSS file for styles
import { PostNewTodo } from "../../api/ToDoServices";
const InputComponent = ({ addToList }) => {
  const [task, setTask] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      //send to father component
      PostNewTodo(task);
      setTask("");
      setTimeout(() => {
        addToList(); // Call the function to update the list in the parent component
      }, 200);
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
