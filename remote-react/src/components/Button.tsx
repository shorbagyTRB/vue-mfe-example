import { useCountStore } from "../store/useCount";
import reactLogo from "../assets/react.svg";
import "./Button.css";
import { lazy } from "react";

const Text = lazy(() => import("./Text"));

function Button() {
  const count = useCountStore((state) => state.count);
  const increaseCount = useCountStore((state) => state.increaseCount);

  return (
    <div className="card-react">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <button type="button" onClick={() => increaseCount()}>
        count is {count}
      </button>
      {count > 3 && <Text text={`count is ${count}`} />}
    </div>
  );
}

export default Button;
