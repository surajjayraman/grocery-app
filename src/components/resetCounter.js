import { useState } from 'react';

export default function ResetCounter() {
  const counter = <Counter />;
  return (
    <>
    <p className='highlighted'>preserving-and-resetting-state</p>
    <div>
      {counter}
      {counter}
    </div>
    </>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
