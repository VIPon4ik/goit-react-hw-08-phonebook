import React from 'react';
import { HeaderContainer, NavContainer, HeaderLink } from './Header.styled';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectName } from '../../redux/selectors';

const Header = () => {
  const name = useSelector(selectName);
  const isLoading = useSelector(selectIsLoading);

  return (
    <HeaderContainer>
      <NavContainer>
        <Button
          variant="contained"
          LinkComponent={HeaderLink}
          disableElevation
          to="/"
        >
          <HomeIcon />
        </Button>
        <Button
          variant="contained"
          LinkComponent={HeaderLink}
          disableElevation
          to="add-contact"
        >
          Add contact
        </Button>
        <Button
          variant="contained"
          LinkComponent={HeaderLink}
          disableElevation
          to="contacts"
        >
          Contacts
        </Button>
      </NavContainer>
      {!isLoading && (name ? <UserMenu name={name} /> : <AuthMenu />)}
    </HeaderContainer>
  );
};

export default Header;
