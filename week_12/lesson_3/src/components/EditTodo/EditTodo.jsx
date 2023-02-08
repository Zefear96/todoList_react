import React, { useState } from "react";

const EditTodo = ({ editedObj, saveEditedObj }) => {
       
       const [editedTodo, setEditedTodo] = useState(editedObj);

       function editTodo(e) {
              setEditedTodo({
                     ...editedTodo,
                     todo: e.target.value
              })
       };

       function saveChanges() {
              // console.log(editedTodo)
              saveEditedObj(editedTodo);
       }

       return (
              <div>
                     <h3>Edit ToDO Component</h3>
                     <input type="text" value={editedTodo.todo} onChange={editTodo} />
                     <button onClick={saveChanges}>Save</button>
              </div>
       );
};

export default EditTodo;