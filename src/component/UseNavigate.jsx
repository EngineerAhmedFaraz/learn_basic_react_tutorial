import { useNavigate } from "react-router-dom";

const UseNavigate = () => {
  const navigate = useNavigate();

  const changeRoute = () => {
    navigate("/");
  };

  const previousRoute = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Use Navigate HOOK</h1>
      <button onClick={changeRoute}>Change Route</button>
      <br />
      <br />
      <button onClick={previousRoute}>Previous Route</button>
    </>
  );
};

export default UseNavigate;
