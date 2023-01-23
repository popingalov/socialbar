import { useEffect, useRef, useState } from 'react';
import { HiPencil } from 'react-icons/hi';
import { HiShoppingCart } from 'react-icons/hi';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import Box from 'components/box/Box';

import {
  AdditionalInfoTitle,
  CartBtn,
  // Checkbox,
  Description,
  EditBtn,
  Image,
  ItemButton,
  ShowMoreBtn,
  Title,
} from './IngredientInfo.styled';
import { useParams } from 'react-router';
import { useGetIngredientByIdQuery } from 'redux/api/ingredientApi';
import Checkbox from 'components/UI-kit/checkbox';
import Loader from 'components/loader';
import {
  useAddToBarMutation,
  useDeleteFromBarMutation,
} from 'redux/api/myBarApi';
import {
  useAddToShoppingMutation,
  useDeleteFromShoppingMutation,
} from 'redux/api/shoppingApi';
import CocktailList from 'components/cocktailList';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import CocktailBottomMessage from 'components/cocktailList/cocktailBottomMessage';
import { ICocktail } from 'types/cocktail';

const IngredientInfo: React.FC = () => {
  const { ingredientId } = useParams();
  const { data: ingredient } = useGetIngredientByIdQuery(
    ingredientId as string,
  );

  const [addToMyBar, { isLoading: addingToMyBar }] = useAddToBarMutation();
  const [deleteFromMyBar, { isLoading: deletingFromMyBar }] =
    useDeleteFromBarMutation();
  const [deleteFromShoppingList, { isLoading: deletingFromShopping }] =
    useDeleteFromShoppingMutation();
  const [addToShoppingList, { isLoading: addingToShoppingList }] =
    useAddToShoppingMutation();

  const [heightEl, setHeightEl] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);

  // console.log('ingredient', ingredient);

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
      // deleteFromShoppingList(id);
      return;
    }
    console.log('addtoShopping', id);
    // addToShoppingList(id);
  };

  const toggleCheckBox = (isInMyBar: boolean, id: string) => {
    console.log('isInMyBar', isInMyBar);
    if (isInMyBar) {
      console.log('deleteFromMyBar', id);
      // deleteFromMyBar(id);
      return;
    }
    console.log('addtoMyBAr', id);
    // addToMyBar(id);
  };

  if (!ingredient) return <Loader isLoading={!ingredient} />;

  const { title, id, iHave, shopping, picture, description, cocktails } =
    ingredient;
  // console.log('cocktails', cocktails);

  return (
    <>
      <Box px={3} py={3}>
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
      <AdditionalInfoTitle>Cocktails with {title}</AdditionalInfoTitle>
      {/* TODO: ROUTING */}
      <CocktailList
        inIngredientCard={true}
        cocktails={cocktails as ICocktail[]}
      />
      <FollowUpMessage>
        <CocktailBottomMessage isIngredient={true} />
      </FollowUpMessage>
    </>
  );
};

export default IngredientInfo;
