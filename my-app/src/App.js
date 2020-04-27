import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters: characters,
    clicked: [],
    score: 0,
    topScore: 0,
  };

  //Checks if new top score has been reached when score updates.
  componentDidUpdate() {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  }

  //Increments score by one.
  incrementScore = (id) => {
    this.setState((state) => ({
      clicked: state.clicked.concat([id]),
      score: this.state.score + 1,
    }));
  };

  // Fires if image clicked
  handleClick = (id) => {
    //Shuffles characters in state, redisplays them in new order.
    this.setState({ characters: this.shuffleArray(characters) });
    //If picture has not been clicked this game, keep track in state, add to score.
    if (!this.state.clicked.includes(id) && this.state.clicked.length < 11) {
      this.incrementScore(id);
    } else if (this.state.clicked.length === 11) {
      //If all pictures have been clicked, display win modal.
      this.incrementScore(id);
      this.resetGame();
      document.getElementById("results-text").textContent = "You win!";
      this.modalSwitch();
    } else {
      //If picture has been clicked this game, show loss, reset score.
      //Shakes pictures upon loss.
      document.getElementById("wrapper").classList.add("wrapper-shake");
      setTimeout(
        () =>
          document.getElementById("wrapper").classList.remove("wrapper-shake"),
        1000
      );
      //Display loss to user in modal.
      document.getElementById("results-text").textContent = "You lose!";
      this.modalSwitch();
      this.resetGame();
    }
  };

  //Displays modal for 2 seconds upon win or loss.
  modalSwitch = () => {
    document.getElementById("results-modal").classList.add("show");
    setTimeout(() => {
      document.getElementById("results-modal").classList.remove("show");
    }, 2000);
  };

  //Resets game
  resetGame = () => {
    this.setState((state) => ({
      clicked: [],
      score: 0,
    }));
  };

  //Fisher-Yates algorithim for shuffling cards.
  shuffleArray(array) {
    //Variables to save current index, save a random index, and transfer numbers.
    let currentIndex = array.length,
      rolledIndex,
      tempHolder;

    //Will end when no numbers left to shuffle.
    while (currentIndex) {
      //Rolls to pick a random unshuffled item.
      rolledIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      //Back of array of unshuffled item saved.
      tempHolder = array[currentIndex];
      //Randomly rolled item placed in back of unshuffled array items.
      array[currentIndex] = array[rolledIndex];
      //Former rolled index now becomes the number formerly in the back of the unshuffled array.
      array[rolledIndex] = tempHolder;
    }
    //Return the shuffled array.
    return array;
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <div id="background">
          <Wrapper>
            {this.state.characters.map((character) => (
              <CharacterCard
                name={character.name}
                image={character.image}
                key={character.id}
                id={character.id}
                handleClick={this.handleClick}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
