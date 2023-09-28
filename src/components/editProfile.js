import { useState } from 'react';

export default function EditProfile() {

   const [count, setCount] = useState(0);
   const [text, setText] = useState('');

   const increment = () => {
    setCount(c => c + 1);
   }

    const para = <p>Hello Paragraph!</p>
    const items = [
                    <li>Item 1</li>,
                    <li>Item 2</li>,
                    <li>Item 3</li>
                  ];
    const updatedItems = items.map(item => 
        <p style={{color:'rosybrown'}}>{item}</p>
    );

    const Button = (props) => {
        return (
            <>
             <p>Hello {props.text}</p>
             <button onClick={props.onClick}>{props.children}</button>
            </>
        )
    }
    const handleText = (e) => {
        setText(e.target.value);
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
        <input value={text} onChange={handleText}/>
        <div>
            {text}
        </div>
        <ul>
            {updatedItems}
        </ul>
        
        {count}
        <Button text='Alice' onClick={increment}>
            Click Me!
        </Button>
        {para}
      </>
    );
  }
  