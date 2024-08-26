import React, { useEffect, useMemo, useState } from "react";
import Result from "../component/Result";
import Name from "../component/Name";
import ResultComponent from "../component/Result";
import NameComponent from "../component/Name";

// Sum function into Javascript.
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(3, 4));
// console.log(sum(3, 4));

// How to memorization in javascript through closure.

// function sum2() {
//   const obj = {};

//   return function (a, b) {
//     console.log("obj is: ", obj);

//     if (!obj[`${a},${b}`]) {
//       console.log("inside if");

//       obj[`${a},${b}`] = a + b;
//     }
//     return obj[`${a},${b}`];
//   };
// }
// const memoizedSum = sum2();

// console.log(memoizedSum(3, 4));
// console.log(memoizedSum(8, 5));

// How to Memorization with react.memo?

const Memo = () => {
  // const [marks, setMarks] = useState(80);
  // const [user, setUser] = useState("Alex");

  // useEffect(() => {
  //   console.log("inside value");
  // }, [user]);

  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  function multiCount() {
    console.log("multiCount");
    return count * 5;
  }

  const multiCountMemo = useMemo(
    function multiCount() {
      console.log("multiCount");
      return count * 5;
    },
    [count]
  );

  return (
    <>
      <h1>Memorization</h1>
      <br />
      {/* <NameComponent name={user} />
      <ResultComponent result={marks} />  */}
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item + 1)}>Update Item</button>
    </>
  );
};

export default Memo;
