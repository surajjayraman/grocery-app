import { useState } from 'react';

export default function SwapFields() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <p className='highlighted'>Swap two form fields</p>
        <Field label="Last name" /> 
        <Field label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <p className='highlighted'>Swap two form fields</p>
        <Field label="First name" /> 
        <Field label="Last name" />
        {checkbox}
      </>
    );
  }
}

function Field({ label }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}
