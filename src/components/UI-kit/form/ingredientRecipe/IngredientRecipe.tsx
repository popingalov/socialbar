import Box from 'components/box';
import Checkbox from 'components/UI-kit/checkbox';

const IngredientRecipe = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      border="1px solid blue"
      mb={4}
      p={1}
    >
      <input placeholder="Name" />
      <input placeholder="Should be select measure" />
      <div>
        Garnish
        <Checkbox checked={false} onChange={() => {}} />
      </div>
      <div>
        Optional
        <Checkbox checked={false} onChange={() => {}} />
      </div>
      <button>Add substitute</button>
    </Box>
  );
};

export default IngredientRecipe;
