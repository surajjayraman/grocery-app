import { useState } from 'react';

export default function FavoriteCity() {
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState('');
  if (showHint) {
    return (
      <div>
        <p className='highlighted'><i>Hint: Your favorite city?</i></p>
        <Form text={text} onChange={e => setText(e.target.value)}/>
        <button onClick={() => {
          setShowHint(false);
        }}>Hide hint</button>
      </div>
    );
  }
  return (
      <>
      <p className='highlighted'>Favorite City</p>
      <Form text={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => {
        setShowHint(true);
      }}>Show hint</button>
      </>
  );
}

function Form(props) {

  return (
    <div>
        <br/>
    <textarea
      value={props.text}
      onChange={props.onChange}
    />
    </div>
  );
}
