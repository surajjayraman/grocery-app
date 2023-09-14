import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <>
      <h1>State as a snapshot - over time</h1>  
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 3000);
      }}>+5 {`state render value:  `}{number}</button>
      <h2>Updated value of number: {number}</h2>
      <h1>React keeps the state values “fixed” within one render's event handlers</h1>
      <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
    <h2>State value of Message:{message}</h2>
    </>
  )
}
