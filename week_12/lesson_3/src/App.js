import React, {useState} from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import EditTodo from "./components/EditTodo/EditTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [editedObj, setEditedObj] = useState(null)

  function createTodo(todoObj) {
    let newTodos = [...todos];
    newTodos.push(todoObj);
    // console.log(newTodos);
    setTodos(newTodos);
  };

  function changeStatus(id) {
    const newTodos = todos.map(item => {
      if (item.id === id) {
        item.status = !item.status;
      };
      return item;
    });
    setTodos(newTodos);
  };

  function getEditedObj(id) {
    let oneObj = todos.find(item => item.id === id);
    setEditedObj(oneObj);
    // console.log(oneObj)
  };

  function saveEditedObj(newObj) {
    let newTodos = todos.map(item => {
      if (item.id === newObj.id) {
        return newObj;
      } else return item;
    });

    setTodos(newTodos);
    setEditedObj(null);
  };

  function deleteObj(id) {
    let delTodos = todos.filter(item => item.id !== id);
    setTodos(delTodos);
  };

  return (
    <>
      <AddTodo createTodo={createTodo} />
      <TodoList todos={todos} changeStatus={changeStatus} getEditedObj={getEditedObj} deleteObj={deleteObj} />
      
      {editedObj ? (
        <EditTodo editedObj={editedObj} saveEditedObj={saveEditedObj} />
      ) : (
          <h4>Not editing todo now!</h4>
      )}
    </>
  )
};

export default App;
