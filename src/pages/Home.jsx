import React, { useEffect, useRef, useState } from "react";

// useRef()  :: Access a DOM element directly like a Javascript  access to HTML Div Through DOM.

const Home = () => {
  const inputRef = useRef(null);

  const [count, setCount] = useState(0);

  // How to target section through navbar button
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const prevCountRef = useRef();
  const boxName = "Container";

  const boxRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const changeColor = () => {
    boxRef.current.style.backgroundColor = "red";
  };

  // Target the ScrollToSection
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
      <br />
      <br />
      <p>Current Count: {count}</p>
      <p>Previous Count : {prevCountRef.current}</p>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <br />
      <br />
      {/* Keeping a Reference to a DOM Element */}

      {/* {} => One Display for JSX.  and {{}} => Second Display for Inline CSS Style ..     */}
      <div
        ref={boxRef}
        style={{
          width: "250px",
          height: "250px",
          backgroundColor: "blue",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          textTransform: "uppercase",
        }}>
        {boxName}
      </div>
      <br />
      <br />
      <br />
      <button onClick={changeColor}>Change Color of BOX</button>
      <br />
      <br />
      <br />
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "green",
          padding: "10px",
          width: " 100%",
          height: "50px",
        }}>
        <button
          onClick={() => scrollToSection(section1Ref)}
          style={{ cursor: "pointer", backgroundColor: "lightblue" }}>
          Go to Section 1
        </button>
        <button
          onClick={() => scrollToSection(section2Ref)}
          style={{ cursor: "pointer", backgroundColor: "red" }}>
          Go to section 2
        </button>
        <button
          onClick={() => scrollToSection(section3Ref)}
          style={{ cursor: "pointer", backgroundColor: "yellow" }}>
          Go to section 3
        </button>
      </nav>
      <br />
      <br />
      <br />
      <div
        ref={section1Ref}
        style={{ height: "500px", backgroundColor: "pink" }}>
        <h1>Section 1</h1>
        <p>This is the first section.</p>
      </div>
      <div
        ref={section2Ref}
        style={{ height: "500px", backgroundColor: "honeydew" }}>
        <h1>Section 2</h1>
        <p>This is the second section.</p>
      </div>
      <div
        ref={section3Ref}
        style={{ height: "500px", backgroundColor: "aliceblue" }}>
        <h1>Section 3</h1>
        <p>This is the third section.</p>
      </div>
    </>
  );
};

export default Home;
