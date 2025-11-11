import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ title, targetPercentage }) => {
  const [percentage, setPercentage] = useState(0);
  const animationDuration = 3000;

  useEffect(() => {
    const increment = targetPercentage / (animationDuration / 10);
    let currentPercentage = 0;

    const interval = setInterval(() => {
      currentPercentage += increment;
      if (currentPercentage >= targetPercentage) {
        currentPercentage = targetPercentage;
        clearInterval(interval);
      }
      setPercentage(Math.floor(currentPercentage));
    }, 10);

    return () => clearInterval(interval);
  }, [targetPercentage, animationDuration]);

  return (
    <div className="bar" aria-label={title}>
      <div
        className="bar-inner count-bar"
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={targetPercentage}
      ></div>
    </div>
  );
};

// ✅ Prop validation added
ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  targetPercentage: PropTypes.number.isRequired,
};

export default ProgressBar;