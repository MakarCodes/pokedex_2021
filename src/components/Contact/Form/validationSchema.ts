import * as yup from 'yup';

const zipCodeRegExp = /[0-9]{2}\-[0-9]{3}/;
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
    .matches(emailRegExp, 'Invalid email address'),
  pesel: yup
    .number()
    .required('This field is required')
    .test('len', 'Number must be exactly 11 digits', val => {
      if (val) return val.toString().length === 11;
      return false;
    })
    .typeError('This must be a number!'),
  zipCode: yup
    .string()
    .required('This field is required')
    .matches(zipCodeRegExp, 'Invalid ZIP-code')
    .length(6, 'Invalid ZIP-code'),
});
