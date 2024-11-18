import { useEffect, useReducer, useRef } from "react"
import { TodoReducer } from "./components/TodoReducer"
import { TodoForm } from "./components/TodoForm.jsx"
import { TodoList } from "./components/TodoList.jsx"
import {Title} from "./components/Title.jsx"
import * as types from "./components/types"
import "./TodoApp.css"

const init = () => {
  return JSON.parse(localStorage.getItem( 'todos' )) || []
}

const initialState =  [{
  id: new Date().getTime(),
  descripcion: 'Hacer los challenges',
  done: false
}]

export const TodoApp = () => {
  const inputRef = useRef();
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [ todos ])


  // UseMemo
  const OnNewTodo = (e) => {
    e.preventDefault();
    if(inputRef.current.value) {
      const newTodo = {
        id: new Date().getTime(),
        descripcion: inputRef.current.value,
        done: false
      }
  
      inputRef.current.value = "";
  
  
      const action = {
        type: types.CREATE_TODO,
        payload: newTodo
      }
      dispatchTodo(action)
    }
  }

  return (
    <div className="Todo-app">
      <Title total={todos.length} missing={todos.filter((todo) => todo.done == false).length}/>
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos}/>
        </div>
        <div className="col-5">
          <TodoForm OnNewTodo={OnNewTodo} inputRef={inputRef}/>
        </div>
      </div>
    </div>
  )
}