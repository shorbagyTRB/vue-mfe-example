import { useState } from "react";

type Props = {
  label?: string;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const [count, setCount] = useState(0);
  return (
    <button type="button" onClick={() => setCount(count + 1)}>
      {props?.label || "Click me"} {count}
    </button>
  );
};

export default Button;
