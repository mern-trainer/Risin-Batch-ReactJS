// props [properties] => passing data from parent to child

import { useState } from "react";
import B from "./B";

// unidirectional data flow

const A = () => {
  // parenAt component

  const [counter, setCounter] = useState(0);
  const age = 20;

  const handleDataFromChild = (dataFromChild) => {
    console.log(dataFromChild);
  };

  return (
    <div>
      Component A [{counter}]{" "}
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <B
        age={age}
        counter={counter}
        setCounter={setCounter}
        handleDataFromChild={handleDataFromChild}
      />{" "}
      {/* child component */}
    </div>
  );
};

export default A;
