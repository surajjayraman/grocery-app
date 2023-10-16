import { useState } from 'react';

export default function SwapFormFields() {
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

  return reverse ? (
    <>
    <Field key="lastName" label="Last name" />
    <Field key="firstName" label="First name" />
     {checkbox}
     </>
  ) : (
    <>
    <Field key="firstName" label="First name" />
    <Field key="lastName" label="Last name" />
    {checkbox}
    </>
  )
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
