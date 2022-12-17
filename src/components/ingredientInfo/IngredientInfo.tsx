import { HiPencil } from 'react-icons/hi';
import { HiShoppingCart } from 'react-icons/hi';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import Box from 'components/box/Box';

import {
  CartBtn,
  Checkbox,
  Decsription,
  EditBtn,
  Image,
  ShowMoreBtn,
  Title,
} from './IngredientInfo.styled';
import { useState } from 'react';
import { useTakeIngredientsQuery } from 'redux/apis/ingredients';

interface IProps {
  id: string | undefined;
}

const IngredientInfo: React.FC<IProps> = ({ id }) => {
  const { data: ingredients = [] } = useTakeIngredientsQuery(undefined);
  const [showMore, setShowMore] = useState<boolean>(false);
  
  const detailsIngredient = ingredients.find(item => item._id === id);
  const [isShop, setIsShop] = useState<boolean | undefined>(detailsIngredient?.shop);
  
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

  if (!detailsIngredient) return null
  

  return (
    <Box px={3} py={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} >
        <Title>{detailsIngredient.name}</Title>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <EditBtn onClick={onClickEdit}>
            <HiPencil size={28} />
          </EditBtn>
          <CartBtn onClick={toggleCart} isShop={isShop}>
            <HiShoppingCart size={28} />
          </CartBtn>
          <Checkbox type="checkbox" />
        </Box>
      </Box>

      <Image src={detailsIngredient.image} />
      
        {/* <Decs>{detailsIngredient.description}</Decs> */}
        <Decsription showMore={showMore}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae esse
          sit modi amet cupiditate dolores facilis quibusdam animi placeat
          numquam facere cum veritatis doloribus tempore aliquid, corporis
          cumque ipsam odio perspiciatis? Aperiam, quibusdam? Nostrum veniam
          recusandae nemo non explicabo itaque excepturi consequuntur, qui, iste
          vitae dolorem sequi quaerat, ullam voluptates corporis minus eos
          laboriosam? Aperiam ut, dolores similique ipsa quos repellendus
          dolorem. Dignissimos doloribus illo quasi debitis tempore nihil.
          Porro, aspernatur! Praesentium odit ipsa consequuntur labore
          perferendis quia expedita accusamus dolorum possimus accusantium
          maiores libero vitae iste, adipisci aut omnis quos minima, doloremque
          explicabo aliquam suscipit sint! Omnis, magni laudantium? doloribus
          illo quasi debitis tempore nihil. Porro, aspernatur! Praesentium odit
          ipsa consequuntur labore perferendis quia expedita accusamus dolorum
          possimus accusantium maiores libero vitae iste, adipisci aut omnis
          quos minima, doloremque explicabo aliquam suscipit sint! Omnis, magni
          laudantium?
        </Decsription>
        <ShowMoreBtn type="button" onClick={showDescription}>
          {showMore ? <BiChevronUp size={24} /> : <BiChevronDown size={24} />}
        </ShowMoreBtn>
    </Box> 
  );
};
 
export default IngredientInfo;