import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

// I like this here instead of passing it in, and then deriving the names away to remove from the other element
const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];
type PropsTypes = {
  handleGameOver: (guessesRemaining: number) => void;
  handleCorrectGuess: () => void;
  handleIncorrectGuess: () => void;
  removeFishFromAnswersLeft: (fishToRemove: string) => void;
};

export class ClassGameBoard extends Component<PropsTypes> {
  state = {
    guessInput: "",
    currentFishIndex: 0,
  };
  // This is likely to be roasty toasty worth,
  // but I couldn't get it to work another way that wasn't super ugly
  getNextFishToName() {
    return initialFishes[this.state.currentFishIndex];
  }

  handleGuess = (guess: string): void => {
    guess.trim() === initialFishes[this.state.currentFishIndex].name
      ? this.props.handleCorrectGuess()
      : this.props.handleIncorrectGuess();
    this.props.removeFishFromAnswersLeft(this.getNextFishToName().name);
    this.setState({ guessInput: "" });
    if (this.state.currentFishIndex === initialFishes.length - 1) {
      this.props.handleGameOver(
        initialFishes.length - (this.state.currentFishIndex + 1)
      );
      return;
    }
    this.setState({ currentFishIndex: this.state.currentFishIndex + 1 });
    this.props.handleGameOver(
      initialFishes.length - (this.state.currentFishIndex + 1)
    );
    this.setState({ currentFishIndex: this.state.currentFishIndex + 1 });
    this.getNextFishToName();
  };
  render() {
    const { guessInput } = this.state;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img
            src={this.getNextFishToName().url}
            alt={this.getNextFishToName().name}
          />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.handleGuess(guessInput);
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={guessInput}
            onChange={(e) => {
              this.setState({ guessInput: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
