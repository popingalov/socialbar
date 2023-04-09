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
  useAddIngredientMutation,
} from 'redux/api/ingredientApi';
import { IIngredient } from 'types/ingredient';
import Loader from 'components/loader';

import Notification from 'components/notification';

import FormIngridient from 'components/createIngredient/form/formIngridient';
import SelectMenu from 'components/createIngredient/select/select';
import { ContainerCreateIngridient } from 'components/createIngredient/FormCreateIngridient.styled';

interface IProps {
  ingredient: IIngredient;
}
const IngredientInfo: React.FC<IProps> = ({ ingredient }) => {
  const {
    title,
    id,
    iHave,
    shopping,
    picture,
    description,
    isDefault,
    category,
  } = ingredient;
  // console.log('ingredient', ingredient);
  // console.log('ingredient.title:', ingredient.title);

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
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(true);

  const [newTitle, setNewTitle] = useState<string>(title);
  const [newCategory, setNewCategory] = useState<string>(category);
  const [newDescription, setNewDescription] = useState<string>(description);
  const [open, setOpen] = useState<boolean>(false);
  const [adding] = useAddIngredientMutation();

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

  const onClickEdit = (isDefault: boolean) => {
    if (isDefault) {
      setUpdate(false);
    } else {
      setUpdate(false);
    }
  };

  const handleShowMenu = () => setOpen(isOpen => !isOpen);

  const handleChoose: React.MouseEventHandler<HTMLLabelElement> = event => {
    if (!(event.target instanceof HTMLElement)) return;
    const chooseText = (event.target as HTMLElement).innerText;
    handleShowMenu();
    setNewCategory(chooseText);
  };

  const handleInputChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, value } = event.currentTarget;
    switch (name) {
      case 'ingredientName':
        setNewTitle(value);
        break;
      case 'ingredientDescription':
        setNewDescription(value);
        break;
      case 'textCategory':
        setNewCategory(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ingredient = new FormData();
    ingredient.append('title', newTitle);
    ingredient.append('description', newDescription);
    ingredient.append('category', newCategory);
    if (isDefault) {
      (await adding(ingredient)) as {
        data: { id: string };
      };
      setUpdate(true);
    } else {
      await UpdateIngredientMutation({
        id,
        respond: ingredient,
      });
    }
    setUpdate(true);
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

  const deleteCard = () => {
    setShowNotification(true);
  };
  const clickButton = (event: any) => {
    event.preventDefault();
    setShowNotification(false);
    if (event.target.id !== 'ok') {
      return;
    } else {
      deleteIngredientMutation(id);
      navigate('/ingredients');
    }
  };
  return (
    <>
      <Loader isLoading={isUpdating} />
      {!update ? (
        <ContainerCreateIngridient>
          <FormIngridient
            changeInput={handleInputChange}
            ingredientName={newTitle}
            ingredientImg={picture}
            ingredientDescription={newDescription}
            submitForm={handleSubmitForm}
          >
            <SelectMenu
              text={newCategory}
              isMenuOpen={open}
              clickFunction={handleShowMenu}
              chooseFunction={handleChoose}
            />
          </FormIngridient>
        </ContainerCreateIngridient>
      ) : (
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
                <EditBtn onClick={() => onClickEdit(update)} isUpdate={update}>
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
                    deleteCard();
                  }}
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
          {showNotification && (
            <Notification
              message={`Are you sure you want to remove the ingredient "${title}"? `}
              buttonSelect={['ok', 'no']}
              handleClick={clickButton}
            />
          )}
        </Box>
      )}
    </>
  );
};

export default IngredientInfo;
