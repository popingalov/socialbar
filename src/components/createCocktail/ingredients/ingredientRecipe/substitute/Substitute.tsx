import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Box from 'components/box/Box';
import PopUp from 'components/modal/popUp';
import { useFetchIngredientsQuery } from 'redux/api/ingredientApi';
import {
  Option,
  OptionsListStyled,
} from 'components/UI-kit/form/optionsList/OptionsList.styled';
import IngredientsList from 'components/ingredientsList';
import IngredientCard from 'components/ingredientsList/ingredientCard';

interface IProps {
  onChoose: (el: any) => void;
  substituteIsOpen: boolean;
  closeSubstituteSelect: () => void;
  coordinates: any;
}

const Substitute: React.FC<IProps> = ({
  onChoose,
  substituteIsOpen,
  closeSubstituteSelect,
  coordinates,
}) => {
  const { data: ingredients, isFetching } = useFetchIngredientsQuery();

  const handleSubstituteSelectClick = (id: string) => {
    console.log('substitute click: id', id);
  };

  return (
    <>
      <Box>here should be list of substitutes</Box>
      <AnimatePresence>
        {ingredients && substituteIsOpen && (
          <PopUp
            type="select"
            coordinates={{ top: 0, left: 0, right: 0 }}
            onClose={closeSubstituteSelect}
          >
            <IngredientsList
              onSubstituteClick={handleSubstituteSelectClick}
              ingredients={ingredients}
              isMyBar={false}
              isShoppingList={false}
              type="substitute"
            />
          </PopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default Substitute;
