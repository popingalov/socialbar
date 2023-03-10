import Box from 'components/box';
import FormSelect from 'components/UI-kit/form/formSelect';
import { ErrorMessage } from 'formik';
import { RxCross2 } from 'react-icons/rx';
import { useGetCategoriesQuery } from 'redux/api/manualApi';
import { CategoriesListStyled, DeleteButton } from './Categories.styled';

interface IProps {
  categories: string[];
  handleCategorySelect: (type: string, value: string) => void;
  categoriesSelectIsOpen: boolean;
  openSelect: () => void;
  closeSelect: () => void;
  handleDelete: (type: string, value: string) => void;
}

const Categories: React.FC<IProps> = ({
  categories,
  handleCategorySelect,
  categoriesSelectIsOpen,
  openSelect,
  closeSelect,
  handleDelete,
}) => {
  const { data } = useGetCategoriesQuery();
  const cocktailCategories = data?.cocktails.map(({ title }) => title);

  return (
    <Box display="flex" gridGap={2} alignItems="center">
      <p>Categories:</p>
      <CategoriesListStyled>
        {categories &&
          categories.map((category, index) => (
            <li key={index}>
              <p>{category}</p>
              <DeleteButton
                type="button"
                onClick={() => {
                  handleDelete('category', category);
                }}
              >
                <RxCross2 aria-label="delete" />
              </DeleteButton>
            </li>
          ))}
      </CategoriesListStyled>
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
