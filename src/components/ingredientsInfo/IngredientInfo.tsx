import { useEffect, useRef, useState } from 'react';
import { HiPencil } from 'react-icons/hi';
import { HiShoppingCart } from 'react-icons/hi';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import Box from 'components/box/Box';

import {
  CartBtn,
  // Checkbox,
  Decsription,
  EditBtn,
  Image,
  ShowMoreBtn,
  Title,
} from './IngredientInfo.styled';
import { useParams } from 'react-router';
import { useGetIngredientByIdQuery } from 'redux/api/ingredientApi';
import Checkbox from 'components/UI-kit/checkbox/Checkbox';
// import { Checkbox } from 'components/UI-kit/checkbox/Checkbox';



const IngredientInfo: React.FC = () => {
  const { ingredientId } = useParams();
  const [isShop, setIsShop] = useState<boolean>(false);
  const [isMyBar, setIsMyBar] = useState<boolean>(false);

  const [heightEl, setHeightEl] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);

  const {data: ingredient} = useGetIngredientByIdQuery(ingredientId as string)

  const refComponent = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (refComponent?.current?.clientHeight) {
      const height = refComponent?.current?.clientHeight;
      setHeightEl(height);
    }
  }, [refComponent]);

  const onClickEdit = () => {
    console.log('edit ingredient');
  };

  const toggleCart = () => {
    setIsShop(prev => !prev);
    // PUT Запрос body {shop: isShop}
  };

  const showDescription = () => {
    setShowMore(prev => !prev);
  };

  if (!ingredient) return null;

  return (
    <Box px={3} py={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Title>{ingredient.title}</Title>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <EditBtn onClick={onClickEdit}>
            <HiPencil size={28} />
          </EditBtn>
          <CartBtn onClick={toggleCart} isShop={isShop}>
            <HiShoppingCart size={28} />
          </CartBtn>
          <Checkbox checked={isMyBar} onChange={() => setIsMyBar(prev => !prev)} />
        </Box>
      </Box>

      <Image src={ingredient.picture} />

      <Decsription ref={refComponent} showMore={showMore}>
        {ingredient.description}
      </Decsription>

      <ShowMoreBtn type="button" onClick={showDescription}>
        {showMore && <BiChevronUp size={24} />}
        {!showMore && heightEl > 44 && <BiChevronDown size={24} />}
      </ShowMoreBtn>
    </Box>
  );
};

export default IngredientInfo;
