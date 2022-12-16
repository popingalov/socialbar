import { IngredientsList } from 'components/ingredientsList/IngredientsList';
import { PagesNavigation } from 'components/pagesNavigation/PagesNavigation';
// import { motion } from 'framer-motion';
// import styled from 'styled-components';

// const container = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 },
// };

// const Container = styled(motion.div)``;

export const Ingredients = () => {
  return (
    // <Container
    //   variants={container}
    //   initial="hidden"
    //   animate="show"
    //   exit="hidden"
    //   transition={{ duration: 0.2 }}
    // >
    //   <PagesNavigation type="ingredients" />
    //   <IngredientsList />
    // </Container>
    <>
      {' '}
      <PagesNavigation type="ingredients" />
      <IngredientsList />
    </>
  );
};
