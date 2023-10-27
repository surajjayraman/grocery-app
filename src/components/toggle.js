import { useState } from 'react';

export default function Toggle() {
  const [isOnRef, setIsOnRef] = useState(false);

  return (
    <>
    <p className='highlighted'>Fix a component failing to re-render </p>
    <button onClick={() => {
      setIsOnRef(!isOnRef)
    }}>
      {isOnRef ? 'On' : 'Off'}
    </button>
    </>
  );
}
