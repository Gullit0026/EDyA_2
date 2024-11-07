import './App.css';

let counter = 100;

export const handleSubstract = ({counter}) => {
  counter --;
  return counter;
}

export const handleReset = ({counter}) => {
  counter = 100;
  return counter;
}