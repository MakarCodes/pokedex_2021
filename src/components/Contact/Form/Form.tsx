import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';

import classes from './Form.module.scss';

interface IDataFromForm {
  name: string;
  email: string;
}

const Form = () => {
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const resetForm = () => {
    setValue('name', '');
    setValue('email', '');
  };
  const onSubmit = (data: IDataFromForm) => {
    const { name, email } = data;
    console.log(name, email);
    resetForm();
  };

  const handleCancel = () => {
    resetForm();
  };

  return (
    <div className={classes.Wrapper}>
      <h2 className={classes.Title}>Form</h2>
      <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.InputGroup}>
          <label className={classes.LabelRequired}>Name:</label>
          <input
            className={classes.Input}
            ref={register}
            name='name'
            type='text'
            defaultValue=''
            placeholder='User name...'
          />
          {errors.name && (
            <p className={classes.ErrorField}>{errors.name?.message}</p>
          )}
        </div>
        <div className={classes.InputGroup}>
          <label className={classes.LabelRequired}>Email:</label>
          <input
            className={classes.Input}
            ref={register}
            name='email'
            type='text'
            defaultValue=''
            placeholder='Email...'
          />
          {errors.email && (
            <p className={classes.ErrorField}>{errors.email?.message}</p>
          )}
        </div>
        <div className={classes.ButtonsContainer}>
          <button
            type='button'
            onClick={() => handleCancel()}
            className={`${classes.Btn} ${classes.Cancel}`}
          >
            Cancel
          </button>
          <button type='submit' className={classes.Btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
