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
        <div className={classes.ModalContentWrapper}>
          <p className={classes.ModalContentTitle}>
            Your data has been send successfully!
          </p>
          <p className={classes.ModalContentData}>Name: {name}</p>
          <p className={classes.ModalContentData}>Surname: {lastName}</p>
          <p className={classes.ModalContentData}>Username: {username}</p>
          <p className={classes.ModalContentData}>Email: {email}</p>
          <p className={classes.ModalContentData}>Pesel: {pesel}</p>
          <p className={classes.ModalContentData}>Birth date: {birthDate}</p>
          <p className={classes.ModalContentData}>ZIP code: {zipCode}</p>
          <p className={classes.ModalContentData}>City: {city}</p>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
