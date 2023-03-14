import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  LableName,
  FormInput,
  FormButton,
  CardContainer,
} from './Login.styled';

export const Login = () => {
  const dispath = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispath(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <CardContainer>
      <form onSubmit={handleSubmit}>
        <label>
          <LableName>Email</LableName>
          <FormInput type="email" name="email" />
        </label>
        <LableName>Password</LableName>
        <label>
          <FormInput type="password" name="password" />
        </label>
        <FormButton type="submit">Log In</FormButton>
      </form>
    </CardContainer>
  );
};
