import { extraMenuNavLinks } from 'constants/navItems';
import { Link } from 'react-router-dom';

const ExtraMenu = () => {
  const navigation = extraMenuNavLinks;

  return (
    <ul>
      {navigation.map(({ href, label }) => (
        <li key={href}>
          <Link to={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};
export default ExtraMenu;
