import React, { useEffect, useState } from "react";

const lifeCycle = () => {
  //Simple useEffect.
  // useEffect(() => {
  //   console.log("UseEffect is here..");
  // });

  //Component mounted.
  // useEffect(() => {
  //   console.log("Component mounted");
  // }, []);

  // component updated
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(`Count changed to ${count}`);
  // }, [count]);

  // async and await

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data : ", data);

        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error Fetching data : ", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Posts</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {post?.slice(0, 100)?.map((item) => {
            {
              /* const { body, title, id } = item; */
            }
            return (
              <>
                <li>{item.title}</li>
                <li>{item.id}</li>
              </>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default lifeCycle;
