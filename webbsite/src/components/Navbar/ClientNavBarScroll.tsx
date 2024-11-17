'use client'
import React, { useEffect } from 'react'

function ClientNavBarScroll() {

    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.querySelector('.navbar') as Element ;
          if (window.scrollY > 100) {
            navbar.classList.add('sticky');
          } else {
            navbar.classList.remove('sticky');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  return (
    <>
    </>
)
}

export default ClientNavBarScroll