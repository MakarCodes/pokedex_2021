import classes from './SelectInput.module.scss';

interface IProps {
  data: string[];
  name: string;
  register: any;
  errors: any;
  required: boolean;
  label: string;
  placeholder?: string;
  defaultValue?: string;
}

const SelectInput: React.FC<IProps> = ({
  data,
  name,
  register,
  errors,
  required,
  label,
  placeholder,
  defaultValue,
}) => {
  return (
    <div className={classes.InputGroup}>
      <label className={required ? classes.LabelRequired : classes.Label}>
        {label}:
      </label>
      <select
        className={classes.Input}
        ref={register}
        name={name}
        defaultValue={defaultValue ? defaultValue : ''}
        placeholder={placeholder ? placeholder : ''}
      >
        <option value='' />
        {data.map((item, idx) => (
          <option value={item} key={item + idx}>
            {item}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className={classes.ErrorField}>{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default SelectInput;
