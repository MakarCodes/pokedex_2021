import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';

import classes from './Form.module.scss';
import SingleInput from './SingleInput/SingleInput';

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
    <>
      <h2 className={classes.Title}>Contact Form</h2>
      <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
        <SingleInput
          register={register}
          errors={errors}
          name='name'
          type='text'
          required={true}
          label='First name'
          placeholder='First name...'
        />
        <SingleInput
          register={register}
          errors={errors}
          name='lastName'
          type='text'
          required={true}
          label='Last name'
          placeholder='Last name...'
        />
        <SingleInput
          register={register}
          errors={errors}
          name='username'
          type='text'
          required={true}
          label='Username'
          placeholder='Username...'
        />
        <SingleInput
          register={register}
          errors={errors}
          name='email'
          type='text'
          required={true}
          label='Email'
          placeholder='Email...'
        />
        <SingleInput
          register={register}
          errors={errors}
          name='pesel'
          type='number'
          required={true}
          label='Pesel Number'
          placeholder='Pesel...'
        />
        <SingleInput
          register={register}
          errors={errors}
          name='zipCode'
          type='text'
          required={true}
          label='ZIP Code'
          placeholder='ZIP-code _ _ - _ _ _'
        />
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
    </>
  );
};

export default Form;
