import axios from "axios";
import { useEffect, useReducer } from "react";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

function apiReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function UseReducer1() {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  // Fetch Data from API Now:
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Use Reducer With API</h1>
      {state.loading && <p>Loading ....</p>}
      {state.error && <p>Error: {state.error}</p>}
      {state.data && (
        <ul>
          {state.data?.splice(0, 10)?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
