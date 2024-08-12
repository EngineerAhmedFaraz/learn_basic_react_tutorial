import React, { Children } from "react";

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

      <Input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        value="Input Text"
      />
    </>
  );
};

export default TryHooks;
