import "./CloseButtonComponent.css";
import DeleteOldTask from "../../api/ToDoServices";
const CloseButtonComponent = ({ deleterHander, idDelete }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => deleterHander(idDelete)}
        className="btn-close hideButton"
        aria-label="Close"
        style={{
          filter:
            "invert(32%) sepia(91%) saturate(6781%) hue-rotate(356deg) brightness(89%) contrast(101%)",
        }}
      />
    </div>
  );
};

export default CloseButtonComponent;
