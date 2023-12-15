import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { addContact } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsIsLoading } from '../redux/selectors';
import Loader from 'components/Loader/Loader';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().min(2).max(36).required(),
  number: yup.string().min(8).max(14).required(),
});


const AddContact = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);

  const handleSubmit = data => {
    const name = data.name;
    const number = data.number;
    dispatch(addContact({ name, number }));
  };

  return (
    <>
      {isLoading && <Loader />}
      <MainForm
        title="Add contact"
        handleSubmit={handleSubmit}
        validationSchema={schema}
      />
    </>
  );
};
export default AddContact;