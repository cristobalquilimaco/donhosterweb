import { useEffect } from "react";

const useScrollEffect = (selectors, offset) => {
    useEffect(() => {
      const handleScroll = () => {
        selectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          if (!elements.length) return;
  
          elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
  
            if (elementPosition < windowHeight * offset) {
              element.classList.add('animate-scroll');
            }
          });
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [selectors, offset]);
  };
  export default useScrollEffect;
  