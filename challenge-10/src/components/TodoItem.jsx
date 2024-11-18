import React, { memo } from "react";
import "./TodoItem.css";

export const TodoItem = memo(({data, id, deleteTodo, toggleDone}) => {
  const handleToggle = (e) => {
    toggleDone(id);
  };

  const clickBtnDelete = (e) => {
    return deleteTodo(id);
  }

  return (
    <>
      <li className="TodoItem-container"> {/* Todo Item */}
        <div className="TodoItem">
          <input className="TodoItem-input" type="checkbox" value="" id={`flexCheckDefault-${id}`} checked={data.done} onChange={handleToggle}/>
          <label className="TodoItem-label">
          {data.descripcion}
          </label>
        </div>
        <div>
          <button type="button" className="TodoItem-delete" onClick={clickBtnDelete}>Delete</button>
        </div>
      </li>
    </>
  )
})