import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, incrementBy } from './store/counterSlice.jsx';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || !isNaN(value)) {
      setInputValue(Number(value));
    }
  };

  return (
    <>
      <h1>Contador</h1>
      <hr />
      <span>El contador es: {counter}</span>
      <br />
      <button
        onClick={() => dispatch(increment())}
      >
        +1
      </button>
      <button
        onClick={() => dispatch(decrement())}
      >
        -1
      </button>
      <div>
        <p>Incrementa el contador</p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="input"
        />
        <button
          onClick={() => dispatch(incrementBy(inputValue))}
        >
          Aumentar
        </button>
      </div>
    </>
  );
}

export default App;