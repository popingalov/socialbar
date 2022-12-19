const pageAnimationType = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const pageAnimation = {
  variants: pageAnimationType,
  initial: 'hidden',
  animate: 'show',
  exit: 'hidden',
};

const mobileAnimationType = {
  hidden: { opacity: 0, translateX: '-100px' },
  show: { opacity: 1, translateX: 0 },
};

export const mobileMenuAnimation = {
  variants: mobileAnimationType,
  initial: 'hidden',
  animate: 'show',
  exit: 'hidden',
};
