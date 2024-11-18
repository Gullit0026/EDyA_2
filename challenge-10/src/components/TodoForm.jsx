import { memo } from "react";
import "./TodoForm.css";

export const TodoForm =({OnNewTodo, inputRef}) => {
    return (
      <>
          <form onSubmit={OnNewTodo} className="TodoForm">
            <input type="text" className="TodoForm-input" placeholder='Descripción de la tarea' ref={inputRef}/>
            <button className="btn-agregar">
              Agregar
            </button>
          </form>
      </>
    )
}