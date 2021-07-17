import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onIncrement }) => {
  return (
    <ul className={styles.feedbackButtons}>
      <li className={styles.button}>
        <button type="button" name="good" className="btn" onClick={onIncrement}>
          good
        </button>
      </li>
      <li className={styles.button}>
        <button type="button" name="neutral" onClick={onIncrement}>
          neutral
        </button>
      </li>
      <li className={styles.button}>
        <button type="button" name="bad" onClick={onIncrement}>
          bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};
export default FeedbackOptions;
