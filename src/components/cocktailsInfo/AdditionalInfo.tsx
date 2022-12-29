import React, { useMemo } from 'react';
import { ExtraInfo } from './CocktailDesc.styled';
import { IIngredientIn } from 'types/cocktail';

interface AdditionalInfoProps {
  ingredient: IIngredientIn;
}

const AdditionalInfo = ({ ingredient }: AdditionalInfoProps) => {
  const content = useMemo(() => {
    const { isOptional, isDressing, alternatives } = ingredient;
    const substituteText =
      alternatives.length > 0
        ? `or ${alternatives
            .map(
              item =>
                item.title[0].toUpperCase() + item.title.slice(1).toLowerCase(),
            )
            .join(',')}${isDressing || isOptional ? ',' : ''}`
        : '';

    const optionalText = isOptional ? `optional${isDressing ? ',' : ''}` : '';
    const garnishText = isDressing ? 'garnish' : '';

    return `${substituteText}${optionalText}${garnishText}`;
  }, [ingredient]);

  return <ExtraInfo>({content})</ExtraInfo>;
};

export default AdditionalInfo;
