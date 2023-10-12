import { useState } from 'react';
import useCounter from '../hooks/useCounter';

// simple custom hook invocation useCounter
const MyGreeting = ({ greet }) => {
    const [greeting, setGreeting] = useState('Good Day!')
    const [count, increment, decrement, clear] = useCounter(0);
    return (
        <>
        <p onClick={() => {
            setGreeting(greet);
            increment();
        }}
            className='highlighted'>My Custom Hook!</p>
        This is my greeting count{' '}{count}!! {' '} {greeting}
        <p className='highlighted'
            onClick={() => decrement()}>Decrement Count</p>
        <button onClick={() => clear()}>Clear</button>    
        </>
        
    
    )
}

export default function ResetCounter() {
  const [showB, setShowB] = useState(true);
  const [isFancy, setIsFancy] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const counter = <Counter isFancy={isFancy} />;
  return (
    <div>
    <p className='highlighted'>preserving-and-resetting-state</p>
      {isFancy ? <Counter isFancy={true} />
      : <Counter isFancy={false}/>
      }
      {showB && counter}
      {isPaused ? <p>See you later!</p>
      : <Counter isPaused={false}/>
      }
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
      <label>
        <input type='checkbox'
         checked={isPaused}
         onChange={e => setIsPaused(e.target.checked)}/>
         Take a break
      </label>
      <MyGreeting greet='Good Evening!'/>
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
