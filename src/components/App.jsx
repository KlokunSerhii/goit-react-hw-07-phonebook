import { BsFillPersonPlusFill } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import ContactList from './ContactList';
import Modal from 'components/Modal/Modal';
import Filter from './Filter';
import { Div, TitleList, Button, DivFlex } from './App.styled';
import { openModal } from '../redux/modal/sliceModal';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const App = () => {
  const { isOpen } = useSelector(state => state.modal);
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
      <ContactList />
      <ToastContainer />
    </Div>
  );
};

export default App;
