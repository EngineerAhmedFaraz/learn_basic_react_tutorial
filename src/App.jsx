import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact/Contact";
import Service from "./pages/service";
import { Blog } from "./pages/Blog";
import LifeCycle from "./pages/lifeCycle";

const user = {
  firstName: "Ahmed",
  lastName: "Faraz",
};

// ES6 of Javacript.
// Destructuring Object
let fullNAme = "ALex";
const Obj = {
  //  name: name
  fullNAme,
};

function formatName({ firstName, lastName }) {
  return firstName + " " + lastName;
}

// user.firstName;  // Get the value from object

// props inside one object with firstName and lastName

export const App = () => {
  const [User, setUser] = useState("Alex");
  // const naviPath = redirect();
  // const navigate = useNavigate();

  const changeTitle = () => {
    setUser("Avinash");
    // navigate.push("/contact");
    // <navigate to="/contact" />
    // navigate("/");
  };

  // const name = "John Doe";

  return (
    <>
      {/* <BrowserRouter> */}
      <h1 onClick={changeTitle}>Hi : {formatName(user)}</h1>
      {/* <h1>Hello : {User} </h1> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/lifeCycle" element={<LifeCycle />} />
      </Routes>
      {/* </BrowserRouter> */}
      {/* <h1 onClick={changeTitle}>Hi : {formatName(user)}</h1>
      <h1>Hello : {User} </h1> */}
    </>
  );
};

// export  App;
// export default App;
