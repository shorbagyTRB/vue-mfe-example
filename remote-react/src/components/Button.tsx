import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>React Component</p>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default Button;
