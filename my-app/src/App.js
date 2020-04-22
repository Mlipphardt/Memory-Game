import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters: characters,
    clicked: [],
  };

  displayCharacters = function () {
    console.log("hi");
  };

  render() {
    return this.state.characters.map((character) => {
      return <CharacterCard name={character.name} image={character.image} />;
    });
  }
}

export default App;
