import { extraMenuNavLinks } from 'constants/navItems';
import { useDispatch } from 'react-redux';
import { setExtraMenuIsOpen } from 'redux/modal/modalSlice';
import { LinkStyled } from './ExtraMenu.styled';

const ExtraMenu = () => {
  const navigation = extraMenuNavLinks;
  const dispatch = useDispatch();

  return (
    <>
      {navigation.map(({ href, label }) => (
        <li key={href}>
          <LinkStyled
            to={href}
            onClick={() => {
              dispatch(setExtraMenuIsOpen(false));
            }}
          >
            {label}
          </LinkStyled>
        </li>
      ))}
    </>
  );
};
export default ExtraMenu;
