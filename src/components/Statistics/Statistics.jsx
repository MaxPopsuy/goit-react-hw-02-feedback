import React from "react";
import PropTypes from 'prop-types';

const Statistics = (props) => {
  return (
    <div>
      <p>Good: <span>{props.good}</span></p>
      <p>Neutral: <span>{props.neutral}</span></p>
      <p>Bad: <span>{props.bad}</span></p>
      <p>Total: <span>{props.total}</span></p>
      <p>Positive feedback: <span>{props.positivePercentage}</span></p>
    </div>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;