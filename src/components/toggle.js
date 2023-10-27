import { useState } from 'react';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
    <p className='highlighted'>Fix a component failing to re-render </p>
    <button onClick={() => {
      setIsOn(!isOn)
    }}>
      {isOn ? 'On' : 'Off'}
    </button>
    </>
  );
}
