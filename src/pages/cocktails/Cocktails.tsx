import { PagesNavigation } from 'components/pagesNavigation/PagesNavigation';
import { CocktailList } from 'components/cocktailList/CocktailList';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const container = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 },
// };
// const Container = styled(motion.div)``;

export const Cocktails = () => {
  return (
    // <Container
    //   variants={container}
    //   initial="hidden"
    //   animate="show"
    //   exit="hidden"
    //   transition={{ duration: 0.2 }}
    // >
    //   <PagesNavigation type="cocktails" />
    //   <CocktailList />
    // </Container>
    <>
      <PagesNavigation type="cocktails" />
      <CocktailList />
    </>
  );
};
