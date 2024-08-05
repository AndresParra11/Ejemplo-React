import Componente1 from "./components/Componente1/Componente1";
import Button from "./components/Button/Button";
import Hello from "./components/Hello/Hello";
import Display from "./components/Display/Display";

import { useState } from "react";

const App = () => {
  const name = "Felipe";
  const age = 25;
  const [counter, setCounter] = useState(0);

  console.log("rendering...", counter);

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };

  const setToZero = () => {
    console.log("reseting, value before", counter);
    setCounter(0);
  };

  const decrementByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Saludos</h1>
      <Hello name="Andrés" age={28} />
      <Hello name={name} age={age} />
      <Componente1 />
      <Display contador={counter} />
      {/*       <button onClick={increaseByOne}>Incrementar</button>
      <button onClick={decrementByOne}>Decrementar</button>
      <button onClick={setToZero}>Resetear</button> */}

      <Button onClick={increaseByOne} text="Incrementar" />
      <Button onClick={decrementByOne} text="Decrementar" />
      <Button onClick={setToZero} text="Resetear" />
      <Display contador={counter} />
    </>
  );
};

export default App;
