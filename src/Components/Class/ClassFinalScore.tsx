import { Component } from "react";

type PropsTypes = {
  correctCount: number;
  incorrectCount: number;
};

export class ClassFinalScore extends Component<PropsTypes> {
  totalCount: number = this.props.correctCount + this.props.incorrectCount;
  render() {
    const { correctCount } = this.props;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{this.totalCount}</p>
        </div>
      </div>
    );
  }
}
