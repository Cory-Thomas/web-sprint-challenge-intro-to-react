import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Character from "./components/Character";

const StyledDiv1 = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const StyledH1 = styled.h1`
  margin: 5% auto;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2%;
  text-align: center;
  border-radius: 50px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

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
        setCharacter(pokemon["data"]["results"]);
      })
      .catch((error) => {
        debugger;
        console.log(`first catch: ${error}`);
      });
  }, []);

  return (
    <StyledDiv1>
      <StyledH1>Pokemon Starters and Their Evolutions</StyledH1>
      <StyledDiv className="App">
        {character.map((char) => (
          <Character key={char["name"]} url={char["url"]} />
        ))}
      </StyledDiv>
    </StyledDiv1>
  );
};

export default App;
