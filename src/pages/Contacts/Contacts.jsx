import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, CardContainer, MainTite, Title } from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <MainTite>Phonebook</MainTite>
      <Container>
        <CardContainer>
          <ContactForm />
        </CardContainer>
        <CardContainer>
          <Title>Contacts</Title>
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </CardContainer>
      </Container>
    </>
  );
};
