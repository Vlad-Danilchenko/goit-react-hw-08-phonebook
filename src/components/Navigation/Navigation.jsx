import { HeaderLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <HeaderLink to="/login">Login</HeaderLink>
      <HeaderLink to="/register">Register</HeaderLink>
    </>
  );
};
