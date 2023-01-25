import Box from 'components/box';
import { IIngredientIn } from 'types/cocktail';
import AdditionalInfo from '../AdditionalInfo';
// import {
//   IngredientImage,
//   IngredientItem,
//   IngredientName,
//   IngredientQuantity,
// } from './AdditionalIngredientsInfo.styled';
import { BiCheck } from 'react-icons/bi';
import defaultIngredientPicture from 'assets/images/default-ingredient.jpg';
import { useNavigate } from 'react-router';
import {
  IngredientImage,
  IngredientItem,
  IngredientName,
  IngredientQuantity,
} from './IngredientList.styled';

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
