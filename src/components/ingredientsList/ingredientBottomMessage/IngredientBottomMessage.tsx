import BottomMessageLink from 'components/UI-kit/bottomMessageLink';

const IngredientBottomMessage = () => {
  return (
    <>
      Can't find an ingredient?{' '}
      <BottomMessageLink to="new">You can create one!</BottomMessageLink>
    </>
  );
};

export default IngredientBottomMessage;
