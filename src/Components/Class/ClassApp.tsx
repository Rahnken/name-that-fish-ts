import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    gameOver: false,
    answersLeft: ["trout", "salmon", "tuna", "shark"],
  };
  handleCorrectGuess = () => {
    this.setState({ correctCount: this.state.correctCount + 1 });
  };
  handleIncorrectGuess = () => {
    this.setState({ incorrectCount: this.state.incorrectCount + 1 });
  };
  removeFishFromAnswersLeft = (fishToRemove: string) => {
    this.setState({
      answersLeft: this.state.answersLeft.filter(
        (fish) => fish !== fishToRemove
      ),
    });
  };
  handleGameOver = (guessesRemaining: number) => {
    if (guessesRemaining === 0) this.setState({ gameOver: true });
  };

  render() {
    const { incorrectCount, correctCount, answersLeft, gameOver } = this.state;
    return (
      <>
        {!gameOver && (
          <>
            <ClassScoreBoard
              answersLeft={answersLeft}
              correctCount={correctCount}
              incorrectCount={incorrectCount}
            />
            <ClassGameBoard
              handleGameOver={this.handleGameOver}
              handleCorrectGuess={this.handleCorrectGuess}
              handleIncorrectGuess={this.handleIncorrectGuess}
              removeFishFromAnswersLeft={this.removeFishFromAnswersLeft}
            />
          </>
        )}
        {gameOver && (
          <ClassFinalScore
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
        )}
      </>
    );
  }
}
