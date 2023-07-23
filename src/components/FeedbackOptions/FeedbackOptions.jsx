import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <button type="button" onClick={onLeaveFeedback} className={css.button}>
        {options[0]}
      </button>
      <button type="button" onClick={onLeaveFeedback} className={css.button}>
        {options[1]}
      </button>
      <button type="button" onClick={onLeaveFeedback} className={css.button}>
        {options[2]}
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
