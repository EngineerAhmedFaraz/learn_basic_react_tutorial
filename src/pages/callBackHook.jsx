import React, { useCallback, useEffect, useState } from "react";
import UserName from "../component/UserName";
import MarkComponent from "../component/markComponent";
import Button from "../component/Button";

const CallBackHook = () => {
  const [count, setCount] = useState(0);

  // Use of Increment event
  // const inc = () => {
  //   setCount(count + 1);
  // };

  const inc = useCallback(() => {
    // setCount(count + 1);  One time increment value then stop but we need increment then use callback parametters function

    setCount((prevValues) => prevValues + 1);
  }, []);

  useEffect(() => {
    console.log("Inside useEffect Render");
  }, [inc]);

  function getSum(a, b) {
    return function () {
      return a + b;
    };
  }

  const sum1 = getSum(5, 6);
  const sum2 = getSum(5, 6);

  // console.log(sum1);
  // console.log(sum2);

  // console.log(sum1 === sum2);

  return (
    <>
      <h1>CallBack Hook...</h1>
      <br />
      <br />
      <br />
      {/* <UserName name="Alex" />
      <MarkComponent marks={70} /> */}

      <br />
      <br />
      <br />
      <h2>Count is : {count}</h2>
      <Button text="Click me" onClick={inc} />
    </>
  );
};

export default CallBackHook;
