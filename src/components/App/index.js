import React, { useState } from "react";
import "../../styles/App.css";
import AddTodo from '../AddTodo';
import TodoBox from '../TodoBox';

function App() {
  const [todoListItems,setTodoListItems]=useState([]);
	return (
    <div id="main">
      {/* //Do not alter main div
      //Please do not alter the functional component as tests depend on the type of component. */}
      <AddTodo todoListItems={todoListItems} setTodoListItems={setTodoListItems} />
      <TodoBox todoListItems={todoListItems} setTodoListItems={setTodoListItems} />
    </div>
	);
}


export default App;
