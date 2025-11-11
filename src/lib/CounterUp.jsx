import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

// Shared observer for all components
const observers = new WeakMap(); // Map element -> callback

let sharedObserver;

function getSharedObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = observers.get(entry.target);
          if (cb) cb(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );
  }
  return sharedObserver;
}

// Hook to detect visibility using shared observer
function useSharedVisibility(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = getSharedObserver();
    observers.set(element, setIsVisible);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observers.delete(element);
    };
  }, [ref]);

  return isVisible;
}

function CounterUp({ end, duration = 2000 }) {
  const ref = useRef();
  const isVisible = useSharedVisibility(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16); // assuming ~60fps
    let frame;

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}</span>;
}

CounterUp.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
};

export default CounterUp;