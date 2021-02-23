import React, { useState } from 'react';

const TodoItems = ({index,task,todoListItems,setTodoListItems}) => {
  const [isEdit,setIsEdit]=useState(false);
  const [updateTask,setUpdateTask]=useState(task);
  const handleEdit = () => {
    setIsEdit(true);
  }
  const handleDelete = () => {
    let copyArray=[...todoListItems];
    copyArray.splice(index,1);
    setTodoListItems(copyArray);
  }
  const handleUpdate = () => {
    if(!updateTask==""){
      let copyArray=[...todoListItems];
      copyArray.splice(index,1,updateTask);
      setTodoListItems(copyArray);
      setIsEdit(false);
    }

  }
  const handleChangeText = (event) =>{
    setUpdateTask(event.target.value);
  }
  const editOrUpdate = () =>{
    if(isEdit){
      return (
        <div>
          <textarea className="editTask" onChange={handleChangeText} defaultValue={task} />
          <button className="saveTask" onClick={handleUpdate}>Save</button>
        </div>
      );
    }else{
      return (
        <div>
          <div>{task}</div>
          <div className="buttons">
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="delete" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      );
    }
  }
  return (
    <div>
      {editOrUpdate()}
    </div>
  );
};

export default TodoItems;