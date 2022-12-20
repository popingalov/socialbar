import { Link } from 'react-router-dom';

const IngredientBottomMessage = () => {
  return (
    <>
      Can't find an ingredient? <Link to="new">You can create one!</Link>
    </>
  );
};

export default IngredientBottomMessage;
