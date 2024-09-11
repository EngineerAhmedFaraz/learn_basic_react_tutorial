import React, { useContext } from "react";

import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { posts, count, increment, decrement, fullName } =
    useContext(DataContext);

  // const { id } = useParams();

  // console.log(posts);
  // console.log(id);

  // const post = posts.find((p) => p.id === parseInt(id));

  // if (!post) {
  //   return <p>Post not found...!</p>;
  // }

  return (
    <>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul> */}

      {/* <h2>{post.title}</h2>
      <p>{post.body}</p> */}
      <h1>{fullName}</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default PostDetail;
