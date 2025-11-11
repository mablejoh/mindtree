import { useEffect, useState } from 'react';

function BackToTop({ className = '' }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Only render button when visible
  return (
    isVisible && (
      <div className="footer-bottom-two">
        <button className={`goTop-btn ${className}`} onClick={scrollToTop}><i className="fa-solid fa-angles-up"></i> <i className="fa-solid fa-angles-up"></i></button>
      </div>
    )
  );
}

export default BackToTop;