import { Outlet } from 'react-router-dom';
import { HeaderBox, HeaderLink, NavBox } from './SharedLayout.styled';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/userMenu/userMenu';
import { Navigation } from 'components/Navigation/Navigation';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <HeaderBox>
        <NavBox>
          {isLoggedIn && <HeaderLink to="/contacts">Contacts</HeaderLink>}
          {isLoggedIn ? <UserMenu /> : <Navigation />}
        </NavBox>
      </HeaderBox>
      <Outlet />
    </div>
  );
};
