
import { memo } from "react";

export const Son = memo(({ numero, increment }) => {
  console.log("again reload...");
  return <button onClick={() => increment(numero)}>{numero}</button>;
});
