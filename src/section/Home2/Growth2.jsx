import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GrowthBGImage from '../../assets/images/bg/growth-two-bg-dark.png';



const growthData = [
  {
    value: 90,
    title: "Scalable Solutions",
    text: "End to end fiber optic cable connectivity for stable",
    delay: "00ms",
  },
  {
    value: 85,
    title: "Automation Features",
    text: "End to end fiber optic cable nnectivity for stable",
    delay: "200ms",
  },
  {
    value: 80,
    title: "24/7 Support",
    text: "End to end fiber optic cable nnectivity for stable",
    delay: "400ms",
  },
];

const GrowthItem = ({ value, title, text, delay }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const animateCount = () => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 20);

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);
  };

  return (
    <div
      className="col-md-6 col-xl-4 wow fadeInLeft"
      data-wow-delay={delay}
      data-wow-duration="1500ms"
      ref={ref}
    >
      <div className="growth-block">
        <div className="pie-graph">
          <div
            className="graph-outer"
            style={{ width: 120, height: 120, position: "relative" }}
          >
            <CircularProgressbar
              value={value}
              strokeWidth={8}
              styles={buildStyles({
                pathColor: "var(--theme-color1)",
                trailColor: "#fff",
              })}
            />
            <div
              className="inner-text"
              style={{
                width: 80,
                height: 80,
                lineHeight: "80px",
                backgroundColor: "var(--theme-color2)",
                fontWeight: 700,
                fontSize: 20,
                color: "#fff",
                textAlign: "center",
                borderRadius: "50%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {count}%
            </div>
          </div>
        </div>
        <div className="content-box">
          <h4 className="title">{title}</h4>
          <p className="text">{text}</p>
        </div>
      </div>
    </div>
  );
};

function Growth() {

  return (
    <>
    <section className="growth-section-two pt-120 pb-120" style={{ backgroundImage: `url(${GrowthBGImage})` }}>
      <div className="container">
        <div className="outer-box">
          <div className="row g-5">
            {growthData.map((item, index) => (
            <GrowthItem
              key={index}
              value={item.value}
              title={item.title}
              text={item.text}
              delay={item.delay}
            />
          ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Growth;
