import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Card.js";
import Axios from "axios";
import Displaycards from "./Displaycards.js";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/get").then((res) => setData(res.data));
  }, []);

  return (
    <div className="App">
      <h1 className="main-heading">User Management System</h1>
      <p id="para">Add user data below</p>
      <Cards />
      <div id="spacing"></div>
      <div>
        <h1 className="main-heading">Current Loged in users</h1>
        <p>Following are the users who are currently logged in to the system</p>
        {data.map((value) => (
          <Displaycards
            name={value.name}
            age={value.age}
            city={value.city}
            country={value.country}
            id={value._id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
