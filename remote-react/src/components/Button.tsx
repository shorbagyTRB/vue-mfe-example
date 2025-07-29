import { useCountStore } from "../store/useCount";

function Button() {
  const count = useCountStore((state) => state.count);
  const increaseCount = useCountStore((state) => state.increaseCount);

  return (
    <>
      <p>React Component</p>
      <button type="button" onClick={() => increaseCount()}>
        count is {count}
      </button>
    </>
  );
}

export default Button;
