import { FilterStyled } from './Filter.styled';

interface IProps {
  type: 'ingredients' | 'cocktails';
}

const ingredientTypes = [
  'Strong alcohol',
  'Soft alcohol',
  'Beverages',
  'Juices',
  'Fruits',
  'Other',
];

const cocktailTypes = [
  'IBA Official',
  'Strong',
  'Moderately strong',
  'Soft',
  'Long',
  'Shooters',
  'Non-alcoholic',
];

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

/**
 * <form >
      <label  for='genre'>Genres
        <select id='genre' name='genre'>
          <option value=0 aria-placeholder="please choose genre to find">...</option>
        </select>
      </label>
    </form>
 */

// export default [
//   'Strong alcohol',
//   'Soft alcohol',
//   'Beverages',
//   'Juices',
//   'Fruits',
//   'Other',
// ];

// export default [
//   'IBA Official',
//   'Strong',
//   'Moderately strong',
//   'Soft',
//   'Long',
//   'Shooters',
//   'Non-alcoholic',
// ];
