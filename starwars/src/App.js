import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  const [character, setCharacter] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=9")
      .then((pokemon) => {
        // console.log(pokemon["data"]["results"]);
        setCharacter(pokemon["data"]["results"]);
      })
      .catch((error) => {
        debugger;
        console.log(`first catch: ${error}`);
      });
  }, []);

  return (
    <div className="App">
      {character.map((char) => (
        <Character key={char["name"]} url={char["url"]} />
      ))}
    </div>
  );
};

export default App;
