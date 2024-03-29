import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { BASE_URL, GOOGLE_AUTH_URL } from 'constants/api';
import { FiLogIn } from 'react-icons/fi';
import { IoMdPerson } from 'react-icons/io';
import MobileNavigation from 'components/mobileMenu/mobileNavigation';
import MobileMenuButton from 'components/UI-kit/buttons/mobileMenuButton';
import { mobileMenuAnimation } from 'constants/animations';
import {
  Menu,
  MenuHeader,
  UserEmail,
  UserIconWrapper,
} from './MobileMenu.styled';
import Overlay from 'components/modal/overlay';
import { userState } from 'redux/auth/authSelectors';
import Box from 'components/box';

const MobileMenu = () => {
  const { t } = useTranslation();
  const redirectToGoogleAuth = () => {
    window.open(
      `${BASE_URL}${GOOGLE_AUTH_URL}`,
      '_self',
      'width=500,height=600,top=50%,left=50%',
    );
  };

  const user = useSelector(userState);

  return (
    <Overlay modalType="mobileMenu">
      <Menu
        key="mobileMenu"
        {...mobileMenuAnimation}
        transition={{ duration: 0.2 }}
      >
        <MenuHeader>
          <UserIconWrapper>
            {user ? <img src={user.picture} alt={user.name} /> : <IoMdPerson />}
          </UserIconWrapper>

          {user ? (
            <UserEmail>{user.email}</UserEmail>
          ) : (
            <MobileMenuButton onClick={redirectToGoogleAuth}>
              {t('auth')}
              <FiLogIn />
            </MobileMenuButton>
          )}
        </MenuHeader>
        <Box
          flexGrow={1}
          style={{ backdropFilter: 'blur(50px)' }}
          backgroundColor="mainBackgroundColor"
        >
          <MobileNavigation />
        </Box>
      </Menu>
    </Overlay>
  );
};

export default MobileMenu;
