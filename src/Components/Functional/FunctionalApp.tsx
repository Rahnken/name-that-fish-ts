import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";

export function FunctionalApp() {
  const [gameOver, setGameOver] = useState(false);
  const [answersLeft, setAnswersLeft] = useState<string[]>([
    "trout",
    "salmon",
    "tuna",
    "shark",
  ]);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const handleCorrectGuess = () => {
    setCorrectCount(correctCount + 1);
  };
  const handleIncorrectGuess = () => {
    setIncorrectCount(incorrectCount + 1);
  };
  const removeFishFromAnswersLeft = (fishToRemove: string) => {
    setAnswersLeft(answersLeft.filter((fish) => fish !== fishToRemove));
  };
  const handleGameOver = (guessesRemaining: number) => {
    if (guessesRemaining === 0) setGameOver(true);
  };

  return (
    <>
      {!gameOver && (
        <>
          <FunctionalScoreBoard
            answersLeft={answersLeft}
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
          <FunctionalGameBoard
            handleGameOver={handleGameOver}
            handleCorrectGuess={handleCorrectGuess}
            handleIncorrectGuess={handleIncorrectGuess}
            removeFishFromAnswersLeft={removeFishFromAnswersLeft}
          />
        </>
      )}
      {gameOver && <FunctionalFinalScore />}
    </>
  );
}
