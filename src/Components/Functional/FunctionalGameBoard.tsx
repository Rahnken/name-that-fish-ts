import "./styles/game-board.css";
import { useState } from "react";
import { Images } from "../../assets/Images";

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

export function FunctionalGameBoard({
  handleGameOver,
  handleCorrectGuess,
  handleIncorrectGuess,
  removeFishFromAnswersLeft,
}: {
  handleGameOver: (guessesRemaining: number) => void;
  handleCorrectGuess: () => void;
  handleIncorrectGuess: () => void;
  removeFishFromAnswersLeft: (fishToRemove: string) => void;
}) {
  const [guessInput, setGuessInput] = useState("");
  const [currentFishIndex, setCurrentFishIndex] = useState(0);
  // This has to be inside because it uses the state variable
  const nextFishToName = initialFishes[currentFishIndex];

  const handleGuess = (guess: string) => {
    guess.trim() === nextFishToName.name
      ? handleCorrectGuess()
      : handleIncorrectGuess();
    removeFishFromAnswersLeft(nextFishToName.name);
    setGuessInput("");
    if (currentFishIndex === initialFishes.length - 1) {
      handleGameOver(initialFishes.length - (currentFishIndex + 1));
      return;
    }
    setCurrentFishIndex(currentFishIndex + 1);
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleGuess(guessInput);
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={guessInput}
          onChange={(e) => {
            setGuessInput(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
