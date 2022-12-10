import { Button } from 'Components/button/Button';
import { cocktailsNavItems, ingredientsNavItems } from 'constants/navItems';
import { NavigationListStyled } from './PagesNavigation.styled';

interface IProps {
  type: 'ingredients' | 'cocktails';
}

export const PagesNavigation: React.FC<IProps> = ({ type }) => {
  const navigation =
    type === 'ingredients' ? ingredientsNavItems : cocktailsNavItems;

  // const filter = useSelector(selectStatusFilter); // to get filter status form state
  // const dispatch = useDispatch(); // to dispatch action
  // const handleStatusFilterChange = value => dispatch(setStatusFilter(value));

  // <Button
  //   selected={filter === statusFilter.all}
  //   onClick={() => handleStatusFilterChange(statusFilter.all)}
  // >
  //   All
  // </Button>;
  return (
    <NavigationListStyled>
      {navigation.map(({ href, label }) => (
        <li key={href}>
          <Button>{label}</Button>
        </li>
      ))}
    </NavigationListStyled>
  );
};
