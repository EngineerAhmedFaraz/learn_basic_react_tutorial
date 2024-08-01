import React, { useEffect, useState } from "react";

// React.DEMo
// JSX in React so you should use { your Content}

const About = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(true);
  // How to use Default Props through the function
  function Demo({ name = "John Doe" }) {
    return <p>{`Hi : ${name}`}</p>;
  }

  // How to pass multiple props inside the function.
  function UserProfile({ name, age, city }) {
    return (
      <div>
        <h1>{`This is ${name} car.`}</h1>
        <h2>{age}</h2>
        <h3>{city}</h3>
      </div>
    );
  }

  //  useEffect(()=>{

  //  })

  const car = "BWM";

  const firstName = "John ";
  const lastName = "Doe";

  const handleChange = () => {
    setCount(count + 1);
  };

  function doubleCount() {
    // return setCount(count + 5);
    return setUser(false);
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <hr />
      {/* <UserProfile name={car} age={25} city="New York" /> */}
      <h1>Count: {count}</h1>
      <button onClick={handleChange}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={doubleCount}>Double Change</button>

      {/* <button onClick={()=> }>Update Name</button> */}
      {!user ? <h1>{firstName}</h1> : <h1>{lastName}</h1>}
    </div>
  );
};

export default About;
