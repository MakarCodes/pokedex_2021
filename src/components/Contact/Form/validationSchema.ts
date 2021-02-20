import * as yup from 'yup';

const zipCodeRegExp = /[0-9]{2}-[0-9]{3}/;

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('This field is required')
    .min(3, 'Minimum 3 letters'),
  lastName: yup
    .string()
    .required('This field is required')
    .min(3, 'Minimum 3 letters'),
  username: yup
    .string()
    .required('This field is required')
    .min(3, 'Minimum 3 letters'),
  email: yup
    .string()
    .required('This field is required')
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Invalid email address'
    ),
  pesel: yup
    .number()
    .required('This field is required')
    .min(11, 'Must be exactly 11 digits')
    .max(11, 'Must be exactly 11 digits')
    .typeError('This must be a number!'),
  zipCode: yup
    .string()
    .matches(zipCodeRegExp, 'Invalid ZIP-code')
    .required('This field is required'),
});
