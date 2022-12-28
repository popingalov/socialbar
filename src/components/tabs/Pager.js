import React from 'react';
import { Page, PagerAnimatedContainer, PagerContainer } from './Pager.styled';

export function Pager({ children, value }) {
  return (
    <PagerContainer>
      <PagerAnimatedContainer
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
      </PagerAnimatedContainer>
    </PagerContainer>
  );
}
