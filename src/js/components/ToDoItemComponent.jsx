import CloseButtonComponent from "./CloseButtonComponent";
import "./ToDoItemComponent.css";

const ToDoItemComponent = ({ task, toDeleteTask, idToDelete }) => {
  return (
    <div className="d-flex justify-content-between borderus border rounded-2 mb-0 px-2 hiderButton">
      {task}{" "}
      <CloseButtonComponent
        deleterHander={toDeleteTask}
        idDelete={idToDelete}
      />
    </div>
  );
};
export default ToDoItemComponent;
