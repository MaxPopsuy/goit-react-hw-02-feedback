import React, { Component } from "react";
import Statistics from "./Statistics/Statistics.jsx";
import Section from "./Section/Section.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrease = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotal = () => this.state.good + this.state.bad + this.state.neutral;

  countPositivePercent = () =>
    `${Math.round((this.state.good / this.countTotal()) * 100) || 0}%`;

  feedback = () => {
    return this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleIncrease}
          />
        </Section>
        <Section title="Statistics">
          {this.feedback() ? (<Notification message="There is no feedback" />) : (
            <Statistics
              good = {this.state.good}
              neutral = {this.state.neutral}
              bad = {this.state.bad}
              total = {this.countTotal()}
              positivePercentage = {this.countPositivePercent()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;