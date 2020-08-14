import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledSection = styled.section`
  background-color: rgba(255, 255, 255, 0.7);
  margin: 2%;
  width: 34%;
  padding: 5%;
`;

const StyledDiv = styled.div``;

export default function Character({ url }) {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then((poke) => {
        return poke["data"];
      })
      .then((pokeInfo) => {
        axios
          .get(pokeInfo["species"]["url"])
          .then((resp) => {
            const one = { ...pokeInfo };
            const two = resp["data"];
            setData({ ...one, ...two });
          })
          .catch((error) => {
            debugger;
            console.log(`second catch: ${error}`);
          });
      })
      .catch((error) => {
        debugger;
        console.log(`third catch: ${error}`);
      });
  }, [url]);
  console.log(data);
  return (
    <StyledSection>
      <h2>{data["name"]}</h2>
      <StyledDiv>
        {data["sprites"] && (
          <img src={data["sprites"]["front_default"]} alt={`${data["name"]}`} />
        )}
      </StyledDiv>
    </StyledSection>
  );
}
