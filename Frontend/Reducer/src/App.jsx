import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "tgColor":
      return { ...state, color: !state.color };
    case "newUserInput":
      return { ...state, userInput: action.payload };
    default:
      return Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false,
  });

  return (
    <div className="app" style={{ color: state.color ? "#FFF" : "#FFFF95" }}>
      <main>
        <input
          type="text"
          value={state.userInput}
          onChange={(e) => {
            dispatch({ type: "newUserInput", payload: e.target.value });
          }}
         />
      </main>

      <p>{state.count}</p>
      <section>
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: "tgColor" });
          }}
        >
          Change Color
        </button>
      </section>
      <p>{state.userInput}</p>
    </div>
  );
};

export default App;
