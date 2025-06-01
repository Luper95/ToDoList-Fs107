const ToDoServices = () => {
  return fetch("https://playground.4geeks.com/todo/users/Luper95")
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error("Error fetching user:", error));
};
export default ToDoServices;

export const PostNewTodo = (task) => {
  return fetch("https://playground.4geeks.com/todo/todos/Luper95", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      label: task,
      done: false,
    }),
  }).then((response) => {
    return response.json();
  });
};

export const CreateNewUser = () => {
  return fetch("https://playground.4geeks.com/todo/users/Luper95")
    .then((response) => {
      if (response.ok) {
        // El usuario ya existe, no hacemos nada
        console.log("Usuario ya existe, no se crea de nuevo.");
        return response.json(); // o retornar directamente para continuar con el flujo
      }

      if (response.status === 404) {
        // Usuario no existe, entonces lo creamos
        return fetch("https://playground.4geeks.com/todo/users/Luper95", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([]),
        }).then(() => {
          console.log("Usuario creado exitosamente.");
          return fetch("https://playground.4geeks.com/todo/users/Luper95").then(
            (res) => res.json()
          );
        });
      }

      throw new Error(`Error verificando usuario: ${response.status}`);
    })
    .catch((error) => console.error("Error en CreateNewUser:", error));
};
//el problema aca es que entraba pero no hacia nada, no impromia ningun error, pero si ejecutaba el actualizar la lista de tareas
export const DeleteOldTask = (id) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(`https://playground.4geeks.com/todo/todos/${id}`, options).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    }
  );
};
