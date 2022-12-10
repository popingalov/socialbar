import { cocktailsNavItems, ingredientsNavItems } from 'constants/navItems';
import { Link, NavigationListStyled } from './PagesNavigation.styled';

interface IProps {
  type: 'ingredients' | 'cocktails';
}

export const PagesNavigation: React.FC<IProps> = ({ type }) => {
  const navigation =
    type === 'ingredients' ? ingredientsNavItems : cocktailsNavItems;

  return (
    <NavigationListStyled>
      {navigation.map(({ href, label }) => (
        <li key={href}>
          <Link to={href}>{label}</Link>
        </li>
      ))}
    </NavigationListStyled>
  );
};
