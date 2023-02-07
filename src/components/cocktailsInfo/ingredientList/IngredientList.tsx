import { useNavigate } from 'react-router';
import AdditionalInfo from '../AdditionalInfo';
import Box from 'components/box';
import { BiCheck } from 'react-icons/bi';
import { IIngredientIn } from 'types/cocktail';
import {
  IngredientImage,
  IngredientItem,
  IngredientName,
  IngredientQuantity,
} from './IngredientList.styled';
import defaultIngredientPicture from 'assets/images/default-ingredient.jpg';

interface IProps {
  ingredients: IIngredientIn[];
}

const IngredientList: React.FC<IProps> = ({ ingredients }) => {
  const navigate = useNavigate();

  const onClickIngredient = (id: string) => {
    navigate(`/ingredients/${id}`);
  };

  return (
    <Box as="ul" borderTop="1px solid" borderColor="borderBottom">
      {ingredients.map(ingredient => {
        const {
          measure,
          data,
          alternatives,
          isDressing,
          isOptional,
          measureType,
        } = ingredient;

        const { id, title, picture } = data;
        const isInMyBar = false;
        const image = picture ? picture : defaultIngredientPicture;
        return (
          <IngredientItem
            key={title + measure}
            isInMyBar={isInMyBar}
            onClick={() => onClickIngredient(id)}
          >
            <IngredientImage src={image} alt={title} />
            <Box flexGrow={1} alignSelf="start" pt={2}>
              <IngredientName>{title}</IngredientName>
              {(isDressing || isOptional || alternatives.length > 0) && (
                <AdditionalInfo ingredient={ingredient} />
              )}
            </Box>
            <IngredientQuantity>{`${measure} ${measureType}`}</IngredientQuantity>
            <Box width="30px" height="30px" color="accent">
              {isInMyBar && <BiCheck size={30} />}
            </Box>
          </IngredientItem>
        );
      })}
    </Box>
  );
};

export default IngredientList;
