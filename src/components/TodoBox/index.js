import React from 'react';
import TodoItems from '../TodoItems';

const TodoBox = ({todoListItems,setTodoListItems}) => {
    return (
        <div className="todo-box">
            <h2>Todo List</h2>
            <ul>
                {todoListItems.map((item,index)=>{
                    return (
                        <li key={index} className="list">
                            <TodoItems 
                                index={index}
                                task={item} 
                                todoListItems={todoListItems} 
                                setTodoListItems={setTodoListItems} 
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TodoBox;