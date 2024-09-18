import { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffect = () => {
  const boxRef = useRef();
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);

  useLayoutEffect(() => {
    const width = boxRef.current.getBoundingClientRect().width;
    setBoxWidth(width);

    const height = boxRef.current.getBoundingClientRect().height;
    setBoxHeight(height);
  }, []);

  return (
    <>
      <h1>* Use Layout Effect HOOK *</h1>
      <br />
      <div
        ref={boxRef}
        style={{
          width: "500px",
          height: "100px",
          backgroundColor: "lightblue",
        }}>
        Box Element
      </div>
      <p>Box Width : {boxWidth}</p>
      <p>Box Heigth : {boxHeight}</p>
    </>
  );
};

export default UseLayoutEffect;
