import React, {useState} from "react";

const AddTodo = ({ createTodo }) => {
       const [todoInp, setTodoInp] = useState('');
       // console.log(todoInp)

       function addTodo(e) {
              setTodoInp(e.target.value);
       };

       function saveTodo() {
              if (!todoInp) {
                     alert('Input is empty!');
                     return;
              };

              let newTodo = {
                     todo: todoInp,
                     status: false,
                     id: Date.now()
              };
              createTodo(newTodo);

              setTodoInp('');
       };

       

       return (
              <div>
                     <h3>Add ToDO Component</h3>
                     <input type="text" name="" id="" onChange={addTodo} placeholder="Create ToDO" value={todoInp} />
                     <button onClick={saveTodo}>Create</button>
              </div>
       )
};

export default AddTodo;