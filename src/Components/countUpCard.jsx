// components/CountUpCard.jsx
import { useRef, useState, useEffect } from 'react';

const CountUpCard = ({ end, label, icon: Icon }) => {
  const ref = useRef();
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const duration = 1000;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = end / steps;

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(counter);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);

          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="countup-card">
      {Icon && <Icon style={{ marginRight: '8px' }} />}
      <h3>{count}+</h3>
      {label && <h4>{label}</h4>}
    </div>
  );
};

export default CountUpCard;