import React, { useState } from "react";
import "./Displaycards.css";
import Axios from "axios";

function Displaycards({ name, age, city, country, id }) {
  const [name1, setName] = useState(name);
  const [age1, setAge] = useState(age);
  const [city1, setCity] = useState(city);
  const [country1, setCountry] = useState(country);

  const [update, setUpdate] = useState(false);

  const deleteData = () => {
    Axios.post("http://localhost:5000/delete", { _id: id }).then((res) =>
      window.location.reload()
    );
  };

  const updateData = () => {
    const data = {
      name: name1,
      age: age1,
      city: city1,
      country: country1,
      _id: id,
    };
    Axios.post("http://localhost:5000/update", data).then((res) => {
      window.location.reload();
    });
  };

  return (
    <div className="Card-cont">
      <p>
        Name :
        {update ? (
          <input
            className="ip"
            value={name1}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          name1
        )}
      </p>
      <p>
        Age :
        {update ? (
          <input
            className="ip"
            value={age1}
            onChange={(e) => setAge(e.target.value)}
          />
        ) : (
          age1
        )}
      </p>
      <p>
        City :
        {update ? (
          <input
            className="ip"
            value={city1}
            onChange={(e) => setCity(e.target.value)}
          />
        ) : (
          city1
        )}
      </p>
      <p>
        Country :
        {update ? (
          <input
            className="ip"
            value={country1}
            onChange={(e) => setCountry(e.target.value)}
          />
        ) : (
          country1
        )}
      </p>
      {update ? (
        <button className="btn2" onClick={() => updateData()}>
          Update
        </button>
      ) : null}
      <button className="btn2" onClick={() => setUpdate(true)}>
        Edit
      </button>
      <button className="btn2" onClick={() => deleteData()}>
        Delete
      </button>
    </div>
  );
}

export default Displaycards;
