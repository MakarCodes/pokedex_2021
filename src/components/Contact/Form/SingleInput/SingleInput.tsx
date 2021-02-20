import classes from './SingleInput.module.scss';

type availableInputTypes = 'text' | 'number';

interface IProps {
  name: string;
  type: availableInputTypes;
  errors: any;
  register: any;
  placeholder?: string;
  defaultValue?: string;
  required: boolean;
  label: string;
}

const SingleInput: React.FC<IProps> = ({
  name,
  type,
  placeholder,
  defaultValue,
  errors,
  register,
  required,
  label,
}) => {
  return (
    <div className={classes.InputGroup}>
      <label className={required ? classes.LabelRequired : classes.Label}>
        {label}:
      </label>
      <input
        className={classes.Input}
        ref={register}
        name={name}
        type={type}
        defaultValue={defaultValue ? defaultValue : ''}
        placeholder={placeholder ? placeholder : ''}
      />
      {errors[name] && (
        <p className={classes.ErrorField}>{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default SingleInput;
