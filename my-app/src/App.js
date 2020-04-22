import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters,
  };

  render() {
    return (
      <CharacterCard
        name={this.state.characters[0].name}
        image={this.state.characters[0].image}
      />
    );
  }
}

export default App;
