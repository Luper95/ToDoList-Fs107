import CloseButtonComponent from "./CloseButtonComponent";
import "./ToDoItemComponent.css";

const ToDoItemComponent = ({ task, onDelete, idem }) => {
  return (
    <div className="d-flex justify-content-between borderus border rounded-2 mb-0 px-2 hiderButton">
      {task} <CloseButtonComponent closeTask={() => onDelete(idem)} />
    </div>
  );
};
export default ToDoItemComponent;
