import React, { useEffect, useState } from "react";
import Characters from "./Characters";
import Games from "./Games";
import "./App.css";
import axios from "axios";

function App(props) {
  const [characters, updateCharacters] = useState([]);
  useEffect(() => {
    apiCall();
  });
  const apiCall = async () => {
    const showData = await axios({
      baseURL: "https://rickandmortyapi.com/api/character",
      headers: {
        Accept: "application/json",
      },
    });
    updateCharacters(showData.data.results);
  };
  return (
    <div className="App">
      {characters.map((character) => (
        <Characters key={characters.name} character={character} />
      ))}
      <Games />
    </div>
  );
}

export default App;
