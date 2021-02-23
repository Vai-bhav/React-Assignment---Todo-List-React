import React, { useState } from 'react';
import './style.css';

const AddTodo = ({todoListItems,setTodoListItems}) => {
    const [task,setTask]=useState("");
    const handleTask = (event)=> {
        setTask(event.target.value);
    }
    const handleAddClick = () => {
        // if(task.trim().length){
            let taskList=[...todoListItems];
            taskList.push(task);
            setTodoListItems(taskList);
            setTask("");
            // console.log("task added");
        // }
    }
    return (
        <div className="add-todo">
            <h1>Todo List</h1>
            <textarea id="task" value={task} onChange={handleTask} />
            <br />
            <button id="btn" disabled={task.length===0} onClick={handleAddClick}>Add</button>
        </div>
    );
};

export default AddTodo;