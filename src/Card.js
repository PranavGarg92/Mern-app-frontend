import React, { useState } from "react";
import "./Cards.css";
import Axios from "axios";

function Cards() {
  const [name1, setName] = useState(null);
  const [age1, setAge] = useState(null);
  const [city1, setCity] = useState(null);
  const [country1, setCountry] = useState(null);

  const postData = () => {
    const data = {
      name: name1,
      age: age1,
      city: city1,
      country: country1,
    };
    Axios.post("http://localhost:5000/create", data).then((res) => {
      window.location.reload();
    });
  };

  return (
    <>
      <div className="Card-container">
        <div>
          <h3 className="card-heading">User Info.</h3>
          <h5>Name :</h5>
          <input
            value={name1}
            onChange={(e) => setName(e.target.value)}
            className="input-brackets"
          />
          <h5>Age :</h5>
          <input
            value={age1}
            onChange={(e) => setAge(e.target.value)}
            className="input-brackets"
          />
          <h5>City :</h5>
          <input
            value={city1}
            onChange={(e) => setCity(e.target.value)}
            className="input-brackets"
          />
          <h5>Country :</h5>
          <input
            value={country1}
            onChange={(e) => setCountry(e.target.value)}
            className="input-brackets"
          />
        </div>
        <button className="cards-button" onClick={() => postData()}>
          Add User
        </button>
      </div>
    </>
  );
}

export default Cards;
