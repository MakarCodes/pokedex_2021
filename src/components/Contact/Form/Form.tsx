import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';

import classes from './Form.module.scss';

import { cityData } from '../../../constans/constans';

import SingleInput from './SingleInput/SingleInput';
import SelectInput from './SelectInput/SelectInput';
import { postData } from '../../../requestMethods/postData';

interface IDataFromForm {
  name: string;
  lastName: string;
  username: string;
  email: string;
  pesel: number;
  zipCode: string;
  city: string;
  birthDate: string;
}

interface IProps {
  onSuccessPostRequest: (data: IDataFromForm) => void;
}

const Form: React.FC<IProps> = ({ onSuccessPostRequest }) => {
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const resetForm = () => {
    setValue('name', '');
    setValue('lastName', '');
    setValue('username', '');
    setValue('email', '');
    setValue('pesel', '');
    setValue('zipCode', '');
    setValue('city', '');
    setValue('birthDate', '');
  };

  const onSubmit = (data: IDataFromForm) => {
    postData('https://jsonplaceholder.typicode.com/posts/', data).then(() => {
      console.log(data, 'Your data has been send successfully!');
      onSuccessPostRequest(data);
    });
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
          name='birthDate'
          type='date'
          required={true}
          label='Birth Date'
          placeholder='dd.mm.rrrr'
          maxDate={new Date().toISOString().substring(0, 10)}
        />
        <SingleInput
          register={register}
          errors={errors}
          name='zipCode'
          type='text'
          required={true}
          label='ZIP Code'
          placeholder='_ _ - _ _ _'
        />
        <SelectInput
          data={cityData}
          register={register}
          errors={errors}
          name='city'
          required={true}
          label='City'
          placeholder='City...'
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
