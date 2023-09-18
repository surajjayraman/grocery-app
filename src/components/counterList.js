
import { useState } from 'react';

export default function CounterList() {
  const [counter, setCounter] = useState([0,0,0]);

  const handleClick = (index) => {
    //const newCounter = [...counter];
    //newCounter[index] += 1;
    const newCounter = counter.map((c,i) => {
      if (i === index){
        return c + 1;
      }
      return c;
    });
    setCounter([
      ...newCounter
    ]);
  }


  return (
    <>
    <p style={{color:'darkcyan'}}>Replacing items in an array - Demo</p>
    <ul>
      {counter.map((c,i) => {
        return <li key={i}>
          {c}{' '}
        <button onClick={() => handleClick(i)}>+1</button>
      </li>
      })}
    </ul>
    </>
  );
}
