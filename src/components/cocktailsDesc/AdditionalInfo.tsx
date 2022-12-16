import React, { useMemo } from 'react';
import { ExtraInfo } from './CocktailDesc.styled';
import { IIngredient } from './CocktailDesc';

interface AdditionalInfoProps {
  ingredient: IIngredient;
}
const AdditionalInfo = ({ ingredient }: AdditionalInfoProps) => {
  const content = useMemo(() => {
    const { garnish, optional, substitute } = ingredient;
    if (garnish && optional && substitute) {
      return `garnish, optional, or ${substitute}`;
    } else if (!garnish && optional && substitute) {
      return `optional, or ${substitute}`;
    } else if (garnish && optional && !substitute) {
      return `garnish, optional`;
    } else if (garnish && !optional && substitute) {
      return `garnish, ${substitute}`;
    } else if (garnish && !optional && !substitute) {
      return `garnish`;
    } else if (!garnish && optional && !substitute) {
      return `optional`;
    } else {
      return `or ${substitute}`;
    }
  }, [ingredient]);
  return <ExtraInfo>({content})</ExtraInfo>;
};

export default AdditionalInfo;
