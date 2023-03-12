import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Box from 'components/box/Box';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import { HiPencil, HiShoppingCart, HiTrash } from 'react-icons/hi';

import {
  CartBtn,
  Description,
  EditBtn,
  Image,
  ItemButton,
  ShowMoreBtn,
  Title,
  DelBtn,
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
import {
  useDeleteIngredientMutation,
  useUpdateIngredientMutation,
} from 'redux/api/ingredientApi';
import { IIngredient } from 'types/ingredient';
import Loader from 'components/loader';

import Notification from 'components/notification';

interface IProps {
  ingredient: IIngredient;
}

const IngredientInfo: React.FC<IProps> = ({ ingredient }) => {
  const { title, id, iHave, shopping, picture, description, isDefault } =
    ingredient;
  // console.log('ingredient', ingredient);

  const [addToMyBar, { isLoading: addingToMyBar }] = useAddToBarMutation();
  const [deleteFromMyBar, { isLoading: deletingFromMyBar }] =
    useDeleteFromBarMutation();
  const [deleteFromShoppingList, { isLoading: deletingFromShopping }] =
    useDeleteFromShoppingMutation();
  const [addToShoppingList, { isLoading: addingToShoppingList }] =
    useAddToShoppingMutation();
  const [deleteIngredientMutation, { isLoading: dellingIngredient }] =
    useDeleteIngredientMutation();
  const [UpdateIngredientMutation, { isLoading: updateIngredient }] =
    useUpdateIngredientMutation();

  const isUpdating =
    addingToMyBar ||
    deletingFromMyBar ||
    deletingFromShopping ||
    addingToShoppingList ||
    dellingIngredient ||
    updateIngredient;
  const navigate = useNavigate();

  const [heightEl, setHeightEl] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [del, setDel] = useState<boolean>(true);
  const [update, setUpdate] = useState<boolean>(true);

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

  const onClickEdit = (
    isUpdate: boolean,
    id: string,
    title: string,
    picture: string,
    description: string,
    isDefault: boolean,
    // ingredientName: string,
  ) => {
    if (!isDefault) {
      navigate('/ingredients/new');
      console.log('Edit ingredient:', id);
      console.log('title:', title);
      console.log('picture:', picture);
      console.log('description:', description);
      console.log('isUpdate:', isUpdate);
      console.log('isDefault:', isDefault);
      // ingredientName = title;

      // UpdateIngredientMutation(id);
      // deleteIngredientMutation(id);
      // setDel(false);
      // navigate('/ingredients');
      return;
    }
    // console.log('Ingredient:', id, 'already removed');
    // console.log('edit ingredient');
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

  const deleteCard = (isDelete: boolean, id: string) => {
    if (isDelete) {
      alert('Are you shoore wont to delete this ingredient?');
      console.log('Ingredient:', id, 'removed');
      deleteIngredientMutation(id);
      setDel(false);
      navigate('/ingredients');
      return;
    }
    console.log('Ingredient:', id, 'already removed');
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
              <EditBtn
                onClick={() => {
                  onClickEdit(
                    update,
                    id,
                    title,
                    picture,
                    description,
                    isDefault,
                  );
                }}
                isUpdate={update}
              >
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
              <DelBtn
                onClick={() => {
                  deleteCard(del, id);
                }}
                isDelete={del}
              >
                <HiTrash size={24} />
              </DelBtn>
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
