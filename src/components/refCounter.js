import { useRef } from 'react';

export default function RefCounter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <>
    <p className='highlighted'>Referencing values with refs</p>
    <button onClick={handleClick}>
      Click me!
    </button>
    </>
  );
}
