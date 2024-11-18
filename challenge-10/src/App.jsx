import { useEffect, useReducer, useRef } from "react"
import { TodoReducer } from "./components/TodoReducer"
import {TodoForm} from "./components/TodoForm"
import {TodoList} from "./components/TodoList"
import {Title} from "./components/Title"
import useTodo from "./hooks/useTodo";

export default function App() {
  const { todos, inputRef, addTodo, deleteTodo, toggleTodo } = useTodo();

  const handleNewTodo = (e) => {
    e.preventDefault();
    addTodo(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <Title total={todos.length} missing={todos.filter((todo) => todo.done == false).length}/>
      <div>
        <div>
        <TodoForm OnNewTodo={handleNewTodo} inputRef={inputRef}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleDone={toggleTodo}/>
        </div>
      </div>
    </div>
  )
}