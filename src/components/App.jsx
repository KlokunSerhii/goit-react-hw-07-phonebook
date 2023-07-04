import { BsFillPersonPlusFill } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

import ContactList from './ContactList';
import Modal from './Modal/Modal';
import Filter from './Filter';
import { Div, TitleList, Button, DivFlex } from './App.styled';
import { openModal } from '../redux/modal/sliceModal';
import * as contactsSelectors from '../redux/contacts/contactsSelectors';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import Loader from './Loader/Loader';

const App = () => {
  const { isOpen } = useSelector(state => state.modal);
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const error = useSelector(contactsSelectors.selectError);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
 

  return (
    <Div>
      <TitleList>Contacts</TitleList>
      <DivFlex>
        <Button
          type="submit"
          aria-label="add contact"
          onClick={() => dispatch(openModal())}
        >
          <BsFillPersonPlusFill />
        </Button>
        <Filter />
      </DivFlex>
      {isOpen && <Modal />}
      {isLoading && <Loader/>}
      {error && <b>{error}</b>}
      <ContactList />
      <ToastContainer />
    </Div>
  );
};

export default App;
