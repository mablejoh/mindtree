import { useState, useEffect } from "react";

function useScrollPosition(offset = 100) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldBeSticky = lastKnownScrollPosition > offset;
          setIsSticky(prev => {
            if (prev !== shouldBeSticky) {
              return shouldBeSticky;
            }
            return prev;
          });
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return isSticky;
}

export default useScrollPosition;