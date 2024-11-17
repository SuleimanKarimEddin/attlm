"use client";

import { useEffect, useRef, useState } from 'react';

// This is your Layout Component
const WithVisible = ({ children,...props }:any) => {
  const ref = useRef<any>();
  const [isVisible, setIsVisible] = useState(false);
  console.log("WithVisible");
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(isVisible === false){
          setIsVisible(entry.isIntersecting);
        }
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]); 
  return (
    <div ref={ref} {...props} >
      {isVisible && children}
    </div>
  );
};

export default WithVisible;
