import { useState } from 'react';

export default function ResetCounter() {
  const [showB, setShowB] = useState(true);
  const [isFancy, setIsFancy] = useState(false);
  const counter = <Counter isFancy={isFancy} />;
  return (
    <div>
    <p className='highlighted'>preserving-and-resetting-state</p>
      {isFancy ? <Counter isFancy={true} />
      : <Counter isFancy={false}/>
      }
      {showB && counter}
      <label>
        <input type='checkbox'
         checked={showB}
         onChange={e => setShowB(e.target.checked)}/>
         Render the second counter
      </label>
      <label>
        <input type='checkbox'
         checked={isFancy}
         onChange={e => setIsFancy(e.target.checked)}/>
         Use fancy styling
      </label>
    </div>
  );
}

function Counter(props) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (props.isFancy){
    className += ' fancy';
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
