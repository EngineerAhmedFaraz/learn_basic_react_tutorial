import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "resetCounter":
      return { count: (state.count = 0) };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <>
      <h1>Use Reducer</h1>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "resetCounter" })}>Reset</button>
    </>
  );
};

export default UseReducer;
