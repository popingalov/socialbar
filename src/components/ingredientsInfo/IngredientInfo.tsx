import { useEffect, useRef, useState } from 'react';
import { HiPencil } from 'react-icons/hi';
import { HiShoppingCart } from 'react-icons/hi';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import Box from 'components/box/Box';
import { IIngredient } from 'types/ingredient';

import {
  CartBtn,
  Checkbox,
  Decsription,
  EditBtn,
  Image,
  ShowMoreBtn,
  Title,
} from './IngredientInfo.styled';

interface IProps {
  ingredient: IIngredient | null;
}

const IngredientInfo: React.FC<IProps> = ({ ingredient }) => {
  const [heightEl, setHeightEl] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);
  // const [isShop, setIsShop] = useState<boolean | undefined>(ingredient?.shop);
  const [isShop, setIsShop] = useState(false);

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
          <Checkbox type="checkbox" />
        </Box>
      </Box>

      <Image src={ingredient.picture} />

      {/* <Decsription>{ingredient.description}</Decsription> */}
      <Decsription ref={refComponent} showMore={showMore}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio
        quas corrupti reprehenderit fugiat laudantium enim, deserunt ratione a
        fugit, iste laborum? Deleniti, amet exercitationem temporibus, neque
        fuga quidem doloribus nihil voluptatibus dolor labore placeat optio unde
        doloremque magni. Magni quos eum facilis incidunt adipisci reiciendis in
        quae accusantium nemo totam non, ut beatae, numquam rem fugiat cum sunt
        iusto ab necessitatibus autem. Eveniet quos consequuntur praesentium
        odit eum. At exercitationem iure sunt nihil nemo dolorem beatae unde
        sint nesciunt amet nobis labore accusamus assumenda molestiae corporis
        doloribus veritatis fugiat architecto, corrupti deserunt optio velit
        praesentium rerum est? Eveniet, corrupti? Temporibus, harum! Eos ea
        ipsum aliquid perferendis minima? Facilis voluptatem velit vitae impedit
        temporibus voluptate inventore nisi illum explicabo molestiae.
      </Decsription>
      <ShowMoreBtn type="button" onClick={showDescription}>
        {showMore && <BiChevronUp size={24} />}
        {!showMore && heightEl > 44 && <BiChevronDown size={24} />}
      </ShowMoreBtn>
    </Box>
  );
};

export default IngredientInfo;
