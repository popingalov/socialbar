import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PagerContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const PagerAnimtedContainer = styled(motion.div)`
  flex-direction: row;
  direction: ltr;
  will-change: transform;
  min-height: 0;
  flex: 1;
  display: flex;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: stretch;
  justify-content: flex-start;
  flex-shrink: 0;
  height: 100%;
  overflow: hidden;
  outline: none;
`;

export function Pager({ children, value }) {
  return (
    <PagerContainer>
      <PagerAnimtedContainer
        transition={{
          tension: 190,
          friction: 70,
          mass: 0.4,
        }}
        initial={false}
        animate={{ x: value * -100 + '%' }}
      >
        {React.Children.map(children, (child, i) => (
          <Page
            key={i}
            aria-hidden={value !== i}
            tabIndex={value === i ? 0 : -1}
          >
            {child}
          </Page>
        ))}
      </PagerAnimtedContainer>
    </PagerContainer>
  );
}
