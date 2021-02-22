import * as yup from 'yup';

const strinRegex = /^[a-zA-Z\s'-]+$/;
const zipCodeRegExp = /[0-9]{2}-[0-9]{3}/;

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('This field is required')
    .min(3, 'Minimum 3 letters')
    .max(255, 'Maximum 255 letters')
    .matches(strinRegex, 'Invalid name'),
  lastName: yup
    .string()
    .required('This field is required')
    .min(3, 'Minimum 3 letters')
    .max(255, 'Maximum 255 letters')
    .matches(strinRegex, 'Invalid surname'),
  username: yup
    .string()
    .required('This field is required')
    .min(3, 'Minimum 3 letters')
    .max(255, 'Maximum 255 letters'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('This field is required'),
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
  city: yup.string().required('This field is required'),
  birthDate: yup.string().required('This field is required'),
  agree: yup
    .bool()
    .required('The terms and conditions must be accepted.')
    .oneOf([true], 'Accept Terms & Conditions is required'),
});
