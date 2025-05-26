import React, { useState } from "react";
import InputComponent from "./InputComponent";
import ToDoItemComponent from "./ToDoItemComponent";
import RemainingToDosComponent from "./RemaininToDosComponent";

const ToDoComponent = () => {
  const [toDoList, setToDoList] = useState([]);
  const toDoListHandler = (task) => {
    setToDoList([...toDoList, task]);
  };

  //esto se envia al nieto que es el closebutton
  //el nieto le manda el id al padre y el padre lo manda al abuelo
  const deleteTask = (toDelete) => {
    const newToDoList = toDoList.filter((_, i) => i !== toDelete);
    setToDoList(newToDoList);
  };

  return (
    <div className="container mh-100 bg-secondary d-flex justify-content-center align-items-center flex-column base-new ">
      <h1 className="text-new">To Do List</h1>
      <div className="col-12 w-50 border-new">
        <InputComponent addToList={toDoListHandler} />
        {/* creamos la lista de componentes, con un index en key para React y luego el idem es para la funcion de borrar del boton */}
        {toDoList.map((item, index) => (
          <ToDoItemComponent
            key={index}
            task={item}
            onDelete={deleteTask}
            idem={index}
          />
        ))}
        <RemainingToDosComponent remainings={toDoList} />
      </div>
    </div>
  );
};
export default ToDoComponent;
