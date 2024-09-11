// Context API :
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create Context:
export const DataContext = createContext();

// Context provider component:
export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Counter
  const [count, setCount] = useState(3);

  const fullName = "Avinash";

  const basicUrl = "https://jsonplaceholder.typicode.com/posts";

  // Fetch data using Axios
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(basicUrl);
        // console.log("Response work well : ", response);
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Function Increment the counter.
  const increment = () => setCount((count) => count * 5);

  // Function Decrement the counter.
  const decrement = () => setCount(count - 5);
  return (
    <>
      <DataContext.Provider
        value={{
          posts,
          loading,
          error,
          count,
          increment,
          decrement,
          fullName,
        }}>
        {children}
      </DataContext.Provider>
    </>
  );
};
