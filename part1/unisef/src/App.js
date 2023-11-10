import React, { useState } from 'react';

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Button = ({ text, handleClick }) => (
  <button style={{ padding: "8px", marginTop: "4px" }} onClick={handleClick}>
    {text}
  </button>
);

const Statistics = ({ good, bad, neutral, all }) => {
  return (
    <div>
      <h1>statics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={all ? (good - bad) / all : 0} />
          <StatisticLine text="positive" value={all ? (good / all) * 100 : 0 + '%'} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>give Feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      {(good || neutral || bad) ? <Statistics good={good} neutral={neutral} bad={bad} all={all} /> : <h1>No Feedback given</h1>}
    </div>
  );
};

export default App;
