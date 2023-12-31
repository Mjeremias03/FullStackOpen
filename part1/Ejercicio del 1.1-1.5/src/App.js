import React from 'react';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  );
}

const Part = ({ name, exercises }) => {
  return (
    <p>{name} - {exercises} exercises</p>
  );
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
}

  const Total = ({ parts }) => {
   const totalExercices = parts.reduce((total,part) => total + part.exercises, 0)
   return(
    <p>Number of exercises {totalExercices}</p>
   )
  }
  

const App = () => {
  const course = {
    name:'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 1 },
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
