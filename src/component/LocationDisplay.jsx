import { useLocation } from "react-router-dom";

const LocationDisplay = () => {
  const location = useLocation();
  return (
    <>
      <h1>Location Display</h1>
      <h2>Current Path - {location.pathname} </h2>
      <h2>Search Params - {location.search}</h2>
    </>
  );
};

export default LocationDisplay;
