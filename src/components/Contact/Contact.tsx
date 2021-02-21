import React, { useReducer } from 'react';
import Form from './Form/Form';
import classes from './Contact.module.scss';
import Modal, { useModalLogic } from '../UI/Modal/Modal';
import formDataReducer, {
  Actions,
  ActionTypes,
  initialState,
} from '../../reducers/formDataReducer';

const actionsFactory = (dispatch: React.Dispatch<Actions>) => ({
  setFormData: (data: IDataFromForm) =>
    dispatch({
      type: ActionTypes.SET_DATA,
      payload: {
        data,
      },
    }),
});

const Contact = () => {
  const [state, dispatch] = useReducer(formDataReducer, initialState);
  const {
    name,
    lastName,
    username,
    email,
    pesel,
    zipCode,
    city,
    birthDate,
  } = state.data;
  const { isVisible, toggleVisibility } = useModalLogic();
  const actions = actionsFactory(dispatch);

  const onSuccessPostRequest = (data: IDataFromForm) => {
    toggleVisibility();
    actions.setFormData(data);
  };
  return (
    <div className={classes.Wrapper}>
      <Form onSuccessPostRequest={onSuccessPostRequest} />
      <Modal isVisible={isVisible} toggleVisibility={toggleVisibility}>
        <p>Your data has been send successfully!</p>
        <p>Name: {name}</p>
        <p>Surname: {lastName}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Pesel: {pesel}</p>
        <p>Birth date: {birthDate}</p>
        <p>ZIP code: {zipCode}</p>
        <p>City: {city}</p>
      </Modal>
    </div>
  );
};

export default Contact;
