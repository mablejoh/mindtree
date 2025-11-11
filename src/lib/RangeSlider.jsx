import { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSlider = ({ min, max, defaultValue }) => {
  const [price, setPrice] = useState(defaultValue);

  const handleSliderChange = (value) => {
    setPrice(value);
  };

  return (
    <div className="range-slider clearfix">
      <div className="price-range-slider">
        <Slider
          range
          min={min}
          max={max}
          defaultValue={defaultValue}
          onChange={handleSliderChange}
          value={price}
        />
      </div>
      <div className="clearfix">
        <p>Price: {price[0]} - {price[1]}</p>
        <div className="input">
          <input
            type="text"
            className="property-amount"
            name="field-name"
            value={`$${price[0]} - $${price[1]}`}
            readOnly
          />
        </div>
        <input type="submit" value="Filter" />
      </div>
    </div>
  );
};

// ✅ Prop validation added
RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.arrayOf(PropTypes.number).isRequired,
};

// ✅ Default props for flexibility
RangeSlider.defaultProps = {
  min: 0,
  max: 100,
};

export default RangeSlider;