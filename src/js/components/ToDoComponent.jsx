import React, { useEffect, useState } from "react";
import InputComponent from "./InputComponent";
import ToDoItemComponent from "./ToDoItemComponent";
import RemainingToDosComponent from "./RemaininToDosComponent";

import { CreateNewUser, DeleteOldTask } from "../../api/ToDoServices";
import ToDoServices from "../../api/ToDoServices";

const ToDoComponent = () => {
  const [toDoList, setToDoList] = useState([]);

  const toDoListHandler = () => {
    ToDoServices()
      .then((data) => {
        setToDoList(data.todos);
      })
      .catch((error) => console.error("Error fetching to-do list:", error));
  };
  //preguntar porque esto no funcionaba bien
  function deleteTaskHandler(id) {
    //lo pase a una function porque como const me daba error....
    //llamo a la funcion para eliminar en la api
    DeleteOldTask(id)
      //no se poruqe si le paso un json tira error y no puede continuar, pero como traigo la data de la api, permite continuar
      .then(() => {
        toDoListHandler(); // refrescar lista
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    CreateNewUser();
    setTimeout(() => {
      toDoListHandler(); // Llamar a la función para obtener la lista de tareas
    }, 100);
  }, []);

  return (
    <div className="container mh-100 bg-secondary d-flex justify-content-center align-items-center flex-column base-new ">
      <h1 className="text-new">To Do List</h1>
      <div className="col-12 w-50 border-new">
        <InputComponent addToList={toDoListHandler} />
        {/* creamos la lista de componentes, con un index en key para React y usamos el id que nos da la api para borrar */}
        {toDoList.length != null &&
          toDoList.length > 0 &&
          toDoList.map((item, _) => (
            <ToDoItemComponent
              key={item.id}
              // key={index} // Avoid using index as key in production code
              task={item.label}
              toDeleteTask={deleteTaskHandler}
              idToDelete={item.id}
            />
          ))}

        <RemainingToDosComponent remainings={toDoList} />
      </div>
    </div>
  );
};
export default ToDoComponent;
