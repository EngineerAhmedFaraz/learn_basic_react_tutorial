import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact/Contact";
import Service from "./pages/service";
import { Blog } from "./pages/Blog";
import LifeCycle from "./pages/lifeCycle";
import TryHooks from "./pages/tryHooks/TryHooks";
import Memo from "./pages/Memo";
import CallBackHook from "./pages/callBackHook";
import PropDealing from "./pages/PropDealing";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import UseParams from "./component/UseParams";
import UseNavigate from "./component/UseNavigate";
import LocationDisplay from "./component/LocationDisplay";
import Dashboard from "./pages/Dashboard";
import Profile from "./component/Profile";
import DemoDashboard from "./component/DemoDashboard";
import Table from "./component/Table";
import Cards from "./component/Cards";
import UseLayoutEffect from "./component/UseLayoutEffect";
import UseReducer from "./component/UseReducer";
import { UseReducer1 } from "./component/UseReducer1";

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
      {/* <h1 onClick={changeTitle}>Hi : {formatName(user)}</h1> */}
      {/* <h1>Hello : {User} </h1> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/lifeCycle" element={<LifeCycle />} />
        <Route path="/tryHooks" element={<TryHooks />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/callback" element={<CallBackHook />} />
        <Route path="/propDealing" element={<PropDealing />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/postdetail" element={<PostDetail />} />

        {/* This is like a ECommerce Website to get Product ID */}
        <Route path="/useparamshook/:id" element={<UseParams />} />
        <Route path="useNavigateHook" element={<UseNavigate />} />
        <Route path="locationDisplay" element={<LocationDisplay />} />

        {/* Dashboard */}
        <Route path="dashboard" element={<DemoDashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="table" element={<Table />} />
          <Route path="cards" element={<Cards />} />
        </Route>

        <Route path="useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="useReducer" element={<UseReducer />} />
        <Route path="useReducer1" element={<UseReducer1 />} />
      </Routes>

      {/* </BrowserRouter> */}
      {/* <h1 onClick={changeTitle}>Hi : {formatName(user)}</h1>
      <h1>Hello : {User} </h1> */}
    </>
  );
};

// export  App;
// export default App;
