import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters: characters,
    clicked: [],
    score: 0,
    topScore: 0,
  };

  componentDidUpdate() {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  }

  handleClick = (id) => {
    console.log("You clicked a button! ID: " + id);
    if (!this.state.clicked.includes(id)) {
      this.setState((state) => ({
        clicked: state.clicked.concat([id]),
        score: this.state.score + 1,
      }));
    }
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
