import { useState } from 'react';

export default function SyncedInputs() {

    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

  return (
    <>
      <p className='highlighted'>Lifting State Up Demo!</p>
      <Input label="First input" value={text} onChange={handleChange}/>
      <Input label="Second input" value={text} onChange={handleChange}/>
    </>
  );
}

function Input({ label, onChange, value}) {

  return (
    <>
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
    </>
  );
}
