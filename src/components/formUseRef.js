import { useRef } from 'react';

export default function FormRef() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <p className='highlighted'>Manipulating the DOM with Refs: Focusing a text input</p>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
