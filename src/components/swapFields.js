import { useState } from 'react';

export default function SwapFields() {
  const [reverse, setReverse] = useState(false);
  //const [text, setText] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

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
        <Field label="Last name" text={lastName}
            onChange={e => setLastName(e.target.value)} />
        <Field label="First name" text={firstName}
            onChange={e => setFirstName(e.target.value)}/>
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <p className='highlighted'>Swap two form fields</p>
        <Field label="First name" text={firstName}
            onChange={e => setFirstName(e.target.value)}/>
        <Field label="Last name" text={lastName}
            onChange={e => setLastName(e.target.value)} />
        {checkbox}
      </>
    );
  }
}

function Field({ label, text, onChange }) {

  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={onChange}
      />
    </label>
  );
}
