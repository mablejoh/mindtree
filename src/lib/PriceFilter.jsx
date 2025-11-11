import { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = ({
  min = 0,
  max = 2000,
  defaultValue = [0, 1000],
  onSubmit,
}) => {
  const [price, setPrice] = useState(defaultValue);

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(price);
    } else {
      alert(`Selected Price Range: ${price[0]} - ${price[1]}`);
    }
  };

  return (
    <div className="range-slider">
      <Slider
        range
        min={min}
        max={max}
        value={price}
        onChange={handlePriceChange}
        allowCross={false}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="property-amount"
          name="field-name"
          value={`$${price[0]} - $${price[1]}`}
          readOnly
        />
        <input type="submit" value="Filter" />
      </form>
    </div>
  );
};

// ✅ Prop validation
PriceFilter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.arrayOf(PropTypes.number),
  onSubmit: PropTypes.func,
};

export default PriceFilter;