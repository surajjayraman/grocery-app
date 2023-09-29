import { useState } from 'react';

export default function EditProfile() {

   const [count, setCount] = useState(0);
   const [text, setText] = useState('');
   const [data, setData] = useState([]);
   const [editing, setEditing] = useState(false);

   const testData = [
    {id: 1, quote: 'Item 1'},
    {id: 2, quote: 'Item 2'},
    {id: 3, quote: 'Item 3'},
    {id: 4, quote: 'Item 4'},
    {id: 5, quote: 'Item 5'}
    ];

   const increment = () => {
    setCount(c => c + 1);
    setData(testData);
   }

    const para = <p>Hello Paragraph!</p>
    const items = [
                    <li>Item 1</li>,
                    <li>Item 2</li>,
                    <li>Item 3</li>
                  ];
    const updatedItems = items.map(item => {
        return <p style={{color:'rosybrown'}}>{item}</p>
        }
    );
    const dataMap = data.map(d => {
        return <li style={{color:'rosybrown'}} key={d.id}>{d.quote}</li>
    })

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditing(!editing)
    }

    return (
        <>
        <p style={{color:'darkorange'}}>Edit Profile Demo</p>
        <form onSubmit={handleSubmit}>
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
        <p style={{color: 'darkgreen'}}>Items from Test Data</p>
        <ul>
            {dataMap}
        </ul>
       
        {para}
      </>
    );
  }
  