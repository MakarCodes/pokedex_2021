import classes from './Skill.module.scss';

interface IProps {
  statName: string;
  statValue: number;
}
const Skill: React.FC<IProps> = ({ statName, statValue }) => {
  return (
    <>
      <p className={classes.StatName}>
        {statName} <span className={classes.StatValue}>{statValue}</span>
      </p>
      <div className={classes.OutsideSkillBar}>
        <div
          className={classes.InsideSkillBar}
          style={{ width: `${(statValue / 255) * 100}%` }}
        ></div>
      </div>
    </>
  );
};

export default Skill;
