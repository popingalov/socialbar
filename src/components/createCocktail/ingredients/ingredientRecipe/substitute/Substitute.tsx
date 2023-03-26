import Box from 'components/box/Box';
import CocktailList from 'components/cocktailList';
import PopUp from 'components/modal/popUp';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useFetchCocktailsQuery } from 'redux/api/cocktailApi';

interface IProps {
  onChoose: (el: any) => void;
  substituteIsOpen: boolean;
  closeSubstituteSelect: () => void;
}

const Substitute: React.FC<IProps> = ({
  onChoose,
  substituteIsOpen,
  closeSubstituteSelect,
}) => {
  const { data: cocktails, isFetching: cocktailsFetching } =
    useFetchCocktailsQuery();
  // console.log('cocktails', cocktails);

  return (
    <>
      <Box>here should be list of substitutes</Box>
      <AnimatePresence>
        {cocktails && substituteIsOpen && (
          <PopUp
            type="select"
            coordinates={{ top: 0, left: 0, right: 0 }}
            onClose={closeSubstituteSelect}
          >
            <CocktailList cocktails={cocktails?.all} />
          </PopUp>
        )}

        {/* {ingredients && ingredients.length > 0 && (
          <OptionsList
            name="ingredientSelect"
            options={ingredients}
            handleIngredientChange={handleClickOnIngredient}
          />
        )} */}
      </AnimatePresence>
    </>
  );
};

export default Substitute;
