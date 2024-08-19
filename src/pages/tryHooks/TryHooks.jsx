import React, { Children, useEffect, useState } from "react";
import { data as localData } from "../data/data";
import axios from "axios";

// Button Component
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

// UserProfile Component

function UserProfile({ userInfo: { name, age, city } }) {
  // const { name, age, city } = userInfo;
  // const { fullname, Age, cityName } = userInfo;
  return (
    <>
      <h1>Username : {name}</h1>
      <p>Age : {age}</p>
      <p>City: {city}</p>
      <br />
      {/* <h1>Username : {fullname}</h1>
      <p>Age : {Age}</p>
      <p>City: {cityName}</p> */}
    </>
  );
}

// Props with Array Mapping with component name of TodoList

// I got issue inside ul because of {} and {} always want return keyword.
function TodoList({ todoTask }) {
  return (
    <ul>
      {todoTask?.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}

//I will create a card and pass a whole data into parameters like childrens
function Card({ title, children }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
}

// I will create Input componet with REST Operators like 3 dots ...
function Input({ type, ...rest }) {
  return <input type={type} {...rest} />;
}

const TryHooks = () => {
  const handleClick = () => {
    alert("Button Clicked !!!");
  };

  // UserProfile data Object
  const userInfo = {
    name: "John",
    age: 35,
    city: "England",
  };

  // We create Tasks
  const tasks = ["Buy Car", "Talk to me", "Try to Code", "React & Next"];

  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [seconds]);

  const [products, setProducts] = useState([]);
  const basicUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    <br />;
    fetch(basicUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // console.log("Products ::", products);

  // Now i will target my own data from separate file of data.js
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data");
        setData(response.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    axios.get = async (url) => {
      if (url === "/data") {
        return { data: localData };
      }
      throw new Error("Data not found");
    };

    fetchData();

    return () => {};
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // useMemo()

  return (
    <>
      <h1
        style={{
          fontSize: "25px",
          textAlign: "center",
          margin: "30px",
          padding: "20px",
          borderBottom: "5px solid black",
        }}>
        HOOKS:
      </h1>
      {/* We use button component here .  */}
      <Button label="Click Me" onClick={handleClick} />
      <h1>Target Own Data for fetch</h1>
      <br />
      <br />
      {/* We need only 5 data from local data so i will use slice or splice */}
      <ul>
        {data?.splice(0, 5)?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <br />
      <br />
      <br />
      <UserProfile userInfo={userInfo} />
      <br />
      <br />
      <br />
      <br />
      {/* Todo List */}
      <TodoList todoTask={tasks} />
      <br />
      <br />
      <br />
      <Card title="My Card">
        <p>Tis is the content inside the card</p>
        <p>Tis is the content inside the card</p>
        <p>Tis is the content inside the card</p>
        <p>Tis is the content inside the card</p>
        <p>Tis is the content inside the card</p>
      </Card>
      <br />
      <br />
      <br />
      <br />
      {/* <Input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        value="Input Text"
      /> */}
      <h1>{seconds}</h1>
      <br />
      <br />
      <br />
      <h1>Fake APi Data</h1>
      <br />
      <br />
      <ul>
        {products?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      {/* {products?.map(({ title, price, id }) => (
        <>
          <div key={id}>
            <h6>{title}</h6>
            <h6>{price}</h6>
          </div>
        </>
      ))} */}
      <br />
      <br /> <br />
      <br />
    </>
  );
};

export default TryHooks;
