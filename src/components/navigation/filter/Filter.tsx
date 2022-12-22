import { cocktailTypes, ingredientTypes } from 'constants/categories';
import { FilterStyled } from './Filter.styled';

interface IProps {
  type: 'ingredients' | 'cocktails';
}

const Filter: React.FC<IProps> = ({ type }) => {
  const filter = type === 'ingredients' ? ingredientTypes : cocktailTypes;

  return (
    <FilterStyled htmlFor="filter">
      <select id="filter">
        <option value="0">No filter</option>
        {filter.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </FilterStyled>
  );
};

export default Filter;
