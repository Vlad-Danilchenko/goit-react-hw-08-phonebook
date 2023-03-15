import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  LableName,
  FormInput,
  FormButton,
  CardContainer,
} from './Register.styled';

export const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          <LableName>Name</LableName>
          <FormInput type="text" name="name" />
        </label>

        <label>
          <LableName>Email</LableName>
          <FormInput type="email" name="email" />
        </label>
        <LableName>Password</LableName>
        <label>
          <FormInput type="text" name="password" />
        </label>
        <FormButton type="submit">Register</FormButton>
      </form>
    </CardContainer>
  );
};

// export default Register;
