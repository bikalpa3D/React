import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const add = () => {
    if (counter < 20) setCounter(counter++);
  };
  const sub = () => {
    if (counter > 0) setCounter(counter--);
  };
  return (
    <>
      <h1>Chai Aur react | vp</h1>
      <h2>Counter:{counter}</h2>

      <button onClick={add}>Add</button>
      <br />
      <button onClick={sub}>Subtract</button>
    </>
  );
}

export default App;
