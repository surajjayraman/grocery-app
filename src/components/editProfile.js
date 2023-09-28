import { useState } from 'react';

export default function EditProfile() {

   const [count, setCount] = useState(0);

   const increment = () => {
    setCount(c => c + 1);
   }

    const para = <p>Hello Paragraph!</p>

    const Button = (props) => {
        return (
            <>
             <p>Hello {props.text}</p>
             <button onClick={props.onClick}>{props.children}</button>
            </>
        )
    }

    return (
        <>
        <p style={{color:'darkorange'}}>Edit Profile Demo</p>
        <form>
            <label>
            First name:{' '}
            <b>Jane</b>
            <input />
            </label>
            <label>
            Last name:{' '}
            <b>Jacobs</b>
            <input />
            </label>
            <button type="submit">
            Edit Profile
            </button>
            <p><i>Hello, Jane Jacobs!</i></p>
        </form>
        <input value={count}/>
        {count}
        <Button text='Alice' onClick={increment}>
            <h4>Click Me!</h4>
        </Button>
        {para}
      </>
    );
  }
  