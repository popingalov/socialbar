import { popUpMenuAnimation } from 'constants/animations';
import React from 'react';
import {
  SelectListStyled,
  OptionsListStyled,
  Option,
} from './OptionsList.styled';

interface IProps {
  options: any[];
  handleCategoryChange?: (option: string) => void;
  handleIngredientChange?: ({
    title,
    id,
  }: {
    title: string;
    id: string;
  }) => void;
  name: string;
}

const OptionsList: React.FC<IProps> = ({
  options,
  handleCategoryChange,
  handleIngredientChange,
  name,
}) => {
  return (
    <SelectListStyled
      key="popUp"
      name={name}
      {...popUpMenuAnimation}
      transition={{ duration: 0.2 }}
    >
      <OptionsListStyled>
        {options &&
          (name === 'categorySelect' || name === 'measureType') &&
          options.map((option: string) => (
            <Option
              onClick={() => {
                if (handleCategoryChange) handleCategoryChange(option);
              }}
              key={option}
            >
              {option}
            </Option>
          ))}
        {options &&
          name === 'ingredientSelect' &&
          options.map(({ title, id }) => (
            <Option
              key={id}
              onClick={() => {
                if (handleIngredientChange)
                  handleIngredientChange({ title, id });
              }}
            >
              {title}
            </Option>
          ))}
      </OptionsListStyled>
    </SelectListStyled>
  );
};

export default OptionsList;
