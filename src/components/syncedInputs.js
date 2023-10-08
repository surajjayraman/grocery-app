import { useState } from 'react';

export default function SyncedInputs() {

    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

  return (
    <>
      <p className='highlighted'>Lifting State Up Demo!</p>
      <Input label="First input" text={text} onChange={handleChange}/>
      <Input label="Second input" text={text} onChange={handleChange}/>
    </>
  );
}

function Input({ label, onChange, text}) {

  return (
    <>
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={onChange}
      />
    </label>
    </>
  );
}
