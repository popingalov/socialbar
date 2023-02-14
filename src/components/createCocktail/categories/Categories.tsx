import Box from 'components/box';
import FormSelect from 'components/UI-kit/form/formSelect';
import { useGetCategoriesQuery } from 'redux/api/manualApi';

interface IProps {
  categories: string[];
  handleCategorySelect: (value: string) => void;
}

const Categories: React.FC<IProps> = ({ categories, handleCategorySelect }) => {
  const { data } = useGetCategoriesQuery();
  const cocktailCategories = data?.cocktails.map(({ title }) => title);

  return (
    <Box display="flex" gridGap={4} alignItems="center" mb={4}>
      <p>Categories:</p>
      {categories &&
        categories.map((category, index) => <p key={index}>{category}</p>)}

      {cocktailCategories && (
        <FormSelect
          options={cocktailCategories}
          onChange={handleCategorySelect}
        />
      )}
    </Box>
  );
};

export default Categories;
