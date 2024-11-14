import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../features/UseReducerSlice';
import { FaPlus } from 'react-icons/fa';
import './UseReducer.css'

const UseReducer = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text }));
      setText('');
    }
  };

  return (
    <div className="todo-container">
      <h2>Lista de tareas</h2>
      <div className='add-container'>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Agrega nueva tarea"/>
        <FaPlus className='btn-add' onClick={handleAddTodo}/>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducer;
