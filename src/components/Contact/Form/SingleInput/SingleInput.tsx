import classes from './SingleInput.module.scss';

type availableInputTypes = 'text' | 'number' | 'date';

interface IProps {
  name: string;
  type: availableInputTypes;
  errors: any;
  register: any;
  placeholder?: string;
  defaultValue?: string;
  required: boolean;
  label: string;
  maxDate?: any;
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
  maxDate,
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
        max={maxDate ? maxDate : null}
      />
      {errors[name] && (
        <p className={classes.ErrorField}>{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default SingleInput;
