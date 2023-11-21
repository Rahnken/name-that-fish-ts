import "./styles/final-score.css";

export const FunctionalFinalScore = ({
  correctCount,
  incorrectCount,
}: {
  correctCount: number;
  incorrectCount: number;
}) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{correctCount + incorrectCount}</p>
    </div>
  </div>
);
