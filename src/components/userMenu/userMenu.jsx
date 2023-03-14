import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LogoutBtn, UserEmail } from './userMenu.styled';

export const UserMenu = () => {
  const dispath = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispath(logOut());

  return (
    <>
      <UserEmail>{user.email}</UserEmail>
      <LogoutBtn type="button" onClick={handleLogOut}>
        Logout
      </LogoutBtn>
    </>
  );
};
