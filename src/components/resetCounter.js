import { useState } from 'react';

export default function ResetCounter() {
  const [showB, setShowB] = useState(true);  
  const counter = <Counter />;
  return (
    <div>
    <p className='highlighted'>preserving-and-resetting-state</p>
      {counter}
      {showB && counter}
      <label>
        <input type='checkbox'
         checked={showB}
         onChange={e => setShowB(e.target.checked)}/>
         Render the second counter
      </label>
    </div>
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
