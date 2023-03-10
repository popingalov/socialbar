import { useEffect, useRef, useState } from 'react';
import Box from 'components/box/Box';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import { HiPencil, HiShoppingCart } from 'react-icons/hi';

import {
  CartBtn,
  Description,
  EditBtn,
  Image,
  ItemButton,
  ShowMoreBtn,
  Title,
} from './IngredientInfo.styled';
import Checkbox from 'components/UI-kit/checkbox';
import {
  useAddToBarMutation,
  useDeleteFromBarMutation,
} from 'redux/api/myBarApi';
import {
  useAddToShoppingMutation,
  useDeleteFromShoppingMutation,
} from 'redux/api/shoppingApi';
import { IIngredient } from 'types/ingredient';
import Loader from 'components/loader';

interface IProps {
  ingredient: IIngredient;
}

const IngredientInfo: React.FC<IProps> = ({ ingredient }) => {
  const { title, id, iHave, shopping, picture, description } = ingredient;
  // console.log('ingredient', ingredient);

  const [addToMyBar, { isLoading: addingToMyBar }] = useAddToBarMutation();
  const [deleteFromMyBar, { isLoading: deletingFromMyBar }] =
    useDeleteFromBarMutation();
  const [deleteFromShoppingList, { isLoading: deletingFromShopping }] =
    useDeleteFromShoppingMutation();
  const [addToShoppingList, { isLoading: addingToShoppingList }] =
    useAddToShoppingMutation();
  const isUpdating =
    addingToMyBar ||
    deletingFromMyBar ||
    deletingFromShopping ||
    addingToShoppingList;

  const [heightEl, setHeightEl] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);

  const refComponent = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (refComponent?.current?.clientHeight) {
      const height = refComponent?.current?.clientHeight;
      setHeightEl(height);
    }
  }, [refComponent]);

  const showDescription = () => {
    setShowMore(prev => !prev);
  };

  const onClickEdit = () => {
    console.log('edit ingredient');
  };

  const toggleCart = (isInShopping: boolean, id: string) => {
    console.log('isInShopping', isInShopping);

    if (isInShopping) {
      console.log('deleteFromShopping', id);
      deleteFromShoppingList(id);
      return;
    }
    console.log('addtoShopping', id);
    addToShoppingList(id);
  };

  const toggleCheckBox = (isInMyBar: boolean, id: string) => {
    console.log('isInMyBar', isInMyBar);
    if (isInMyBar) {
      console.log('deleteFromMyBar', id);
      deleteFromMyBar(id);
      return;
    }
    console.log('addtoMyBAr', id);
    addToMyBar(id);
  };

  return (
    <>
      <Loader isLoading={isUpdating} />
      <Box px={3} py={3} backgroundColor="mainBackgroundColor">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Title>{title}</Title>
          <Box
            as={'ul'}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gridGap={1}
          >
            <ItemButton>
              <EditBtn onClick={onClickEdit}>
                <HiPencil size={24} />
              </EditBtn>
            </ItemButton>
            <ItemButton>
              <CartBtn
                onClick={() => {
                  toggleCart(shopping, id);
                }}
                isShopping={shopping}
              >
                <HiShoppingCart size={24} />
              </CartBtn>
            </ItemButton>
            <ItemButton>
              <Checkbox
                checked={iHave}
                onChange={() => {
                  toggleCheckBox(iHave, id);
                }}
              />
            </ItemButton>
          </Box>
        </Box>
        <Image src={picture} />
        <Description ref={refComponent} showMore={showMore}>
          {description}
        </Description>
        <ShowMoreBtn type="button" onClick={showDescription}>
          {showMore && <BiChevronUp size={24} />}
          {!showMore && heightEl > 44 && <BiChevronDown size={24} />}
        </ShowMoreBtn>
      </Box>
    </>
  );
};

export default IngredientInfo;
