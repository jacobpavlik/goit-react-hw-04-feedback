import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  const addGood = evt => {
    setGood(prevGood => prevGood + 1);
  };
  const addNeutral = evt => {
    setNeutral(prevNeutral => prevNeutral + 1);
  };
  const addBad = evt => {
    setBad(prevBad => prevBad + 1);
  };

  const handleBtns = evt => {
    const buttonName = evt.target.innerText;
    if (buttonName === 'Good') {
      addGood();
    }
    if (buttonName === 'Neutral') {
      addNeutral();
    }
    if (buttonName === 'Bad') {
      addBad();
    }
  };

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    } else {
      return Math.round((good / total) * 100);
    }
  }
  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleBtns}
        />

        <h1 className={css.title}>Statistics</h1>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
// na githubie nie widać - komentarz aby przesłać jeszcze raz
