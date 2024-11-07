import { useState, useCallback } from "react";
import { Son } from "./Son";

export const Father = () => {
  const list = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);
  const [val, setVal] = useState(true);

  const increment = useCallback(
    (num) => {
      setValor(valor + num);
    },
    [val]
  );

  return (
    <div>
        <div className="father">
            <h1>Father</h1>
        </div>
        <div className="valor">
            <p>Total: {valor}</p>
        </div>
        <hr />
        <div>
            {list.map((n, idx) => {
            return <Son key={idx} numero={n} increment={increment} />;
            })}
        </div>
    </div>
  );
};