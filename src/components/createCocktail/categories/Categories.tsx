import Box from 'components/box';
import FormSelect from 'components/UI-kit/form/formSelect';
import { ErrorMessage } from 'formik';
import { useGetCategoriesQuery } from 'redux/api/manualApi';

interface IProps {
  categories: string[];
  handleCategorySelect: (type: string, value: string) => void;
  categoriesSelectIsOpen: boolean;
  openSelect: () => void;
  closeSelect: () => void;
}

const Categories: React.FC<IProps> = ({
  categories,
  handleCategorySelect,
  categoriesSelectIsOpen,
  openSelect,
  closeSelect,
}) => {
  const { data } = useGetCategoriesQuery();
  const cocktailCategories = data?.cocktails.map(({ title }) => title);

  return (
    <Box display="flex" gridGap={4} alignItems="center" mb={4}>
      <p>Categories:</p>
      {categories &&
        categories.map((category, index) => <p key={index}>{category}</p>)}

      {cocktailCategories && (
        <FormSelect
          name="category"
          selectIsOpen={categoriesSelectIsOpen}
          openSelect={openSelect}
          closeSelect={closeSelect}
          options={cocktailCategories}
          onChange={handleCategorySelect}
        />
      )}
    </Box>
  );
};

export default Categories;
