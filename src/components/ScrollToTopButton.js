import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiFillUpSquare } from 'react-icons/ai';

const ScrollButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  cursor: pointer;
  transition: transform 0.2s ease; /* Add a transition for smooth animation */

  &:hover {
    transform: translateY(-3px); /* Move the button up by 5 pixels when hovered */
  }
`;

const ScrollButton = styled.button`
  background-color: transparent;
  color: inherit;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: inherit;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease; /* Add a color transition for smooth color change */

  &:hover {
    color: #64ffda;
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollButtonWrapper visible={isVisible} onClick={scrollToTop}>
      <ScrollButton>
        <AiFillUpSquare />
      </ScrollButton>
    </ScrollButtonWrapper>
  );
};

export default ScrollToTopButton;
