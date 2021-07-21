import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onIncrement, options }) => {
  return (
    <ul className={styles.feedbackButtons}>
      {options.map(option => (
        <li key={option} className={styles.button}>
          <button
            type="button"
            name={option}
            className="btn"
            onClick={onIncrement}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default FeedbackOptions;
