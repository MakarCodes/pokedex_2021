import classes from './CheckboxInput.module.scss';

type availableInputTypes = 'checkbox';

interface IProps {
  name: string;
  type: availableInputTypes;
  errors: any;
  register: any;
  required: boolean;
}

const CheckboxInput: React.FC<IProps> = ({
  name,
  type,
  errors,
  register,
  required,
}) => {
  return (
    <div className={classes.InputGroup}>
      <label className={required ? classes.LabelRequired : classes.Label}>
        <input
          className={classes.Input}
          ref={register}
          name={name}
          type={type}
        />
        I agree Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati eveniet officiis possimus accusantium similique! Nemo, vero
        expedita? Qui atque facilis architecto, eum sed, distinctio ad officiis
        expedita accusamus fugit voluptas! Incidunt ipsam quia suscipit
        praesentium omnis? Nemo ab dolore magni, corrupti et quos vero ad
        inventore, dignissimos, debitis voluptas quam.
      </label>
      {errors[name] && (
        <p className={classes.ErrorField}>{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default CheckboxInput;
