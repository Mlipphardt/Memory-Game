import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters: characters,
    clicked: [],
  };

  handleClick = function (id) {
    console.log("You clicked a button! ID: " + id);
  };

  render() {
    return this.state.characters.map((character) => {
      return (
        <CharacterCard
          name={character.name}
          image={character.image}
          key={character.id}
          id={character.id}
          handleClick={this.handleClick}
        />
      );
    });
  }
}

export default App;
