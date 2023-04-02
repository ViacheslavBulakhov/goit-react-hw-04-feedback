import { useState } from 'react';
import Statistics from './CounterReviews/statistics';
import FeedbackOptions from './CounterReviews/feedbackOptions';
import Notification from './CounterReviews/notification';
import Section from './CounterReviews/section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positivePercentage = `${Math.ceil((good / total) * 100 || 0)}%`;

  function handleIncrement(option) {
    switch (option) {
      case 'good':
        setGood(option => option + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleIncrement}
          />
        </Section>

        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    </div>
  );
}

// const [total, setTotal] = useState(0);
// const [positivePercentage, setPositivePercentage] = useState('');
// useEffect(() => {
//   setTotal(good + neutral + bad);
// }, [good, neutral, bad]);

// useEffect(() => {
//   setPositivePercentage(`${Math.ceil((good / total) * 100 || 0)}%`);
// }, [good, total]);
