import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later.',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  console.log(votes)
  const randomize = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const vote = () => {
    const newVotes = [...votes];
    newVotes[selected]++ ;
    setVotes(newVotes);
  }

  const anecdoteWithMostVotes = () => {
    let maxVotes = votes[0];
    let maxIndex = 0;
    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > maxVotes) {
        maxVotes = votes[i];
        maxIndex = i;
      }
    }
    return maxIndex;
  }

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      {anecdotes[selected]}
      <p>Has {votes[selected]} votes</p>
      <br />
      <button onClick={vote}>Vote</button>
      <button onClick={randomize}>Next Anecdote</button>
      <h2>Anecdote with Most Votes</h2>
      {anecdotes[anecdoteWithMostVotes()]}
      <p>Has {votes[anecdoteWithMostVotes()]} votes</p>
    </div>
  );
}

export default App;
