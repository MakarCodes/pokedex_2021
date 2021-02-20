import classes from './SelectInput.module.scss';

interface IProps {
  data: string[];
  name: string;
  register: any;
  required: boolean;
  label: string;
  placeholder?: string;
  defaultValue?: string;
}

const SelectInput: React.FC<IProps> = ({
  data,
  name,
  register,
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
    </div>
  );
};

export default SelectInput;
