import { useEffect, useRef, useState } from 'react';

export default function Counter({ end = 100, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const intervalRef = useRef(null); // keep track of interval

  const increment = end / (duration / 100); // adjust increment for smooth counting

  const startCount = () => {
    if (intervalRef.current) return; // prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        if (newCount >= end) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return end;
        }
        return newCount;
      });
    }, 100); // interval runs every 100ms
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCount();
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    if (countRef.current) observer.observe(countRef.current);

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // cleanup interval on unmount
        intervalRef.current = null;
      }
    };
  }, [end, increment]);

  return (
    <span ref={countRef}>
      <span>{Math.round(count)}</span>
    </span>
  );
}
