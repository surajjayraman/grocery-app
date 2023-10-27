import { useState } from "react";
import { v4 } from 'uuid';

const testData = [
    {uid: 'aaa', name: 'Ali Barber'},
    {uid: 'bbb', name: 'Jim Holden'}
]

const Header = (props) => {
    const [input, setInput] = useState('');
    const [data, setData] = useState(testData);
    const uniqueId = v4();

      const addFriends = (e) => {
        e.preventDefault();
        setData([
                ...data,
                {
                    uid: uniqueId,
                    name: input
                }
            ]);
        }

        const list = data.map(item => {
            return (
                <li key={item.uid}>
                    {item.name}
                </li>
                )
        })

    return (
        <>
            <p className="highlighted">React Review - My Friends App</p>
            <h2>{props.text}</h2>
            <div className="input-form">
                <form onSubmit={addFriends}>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <button>
                        Add friend
                    </button>
                </form>
            </div>
            {input} <br/>
            <ul>
                    {list}
            </ul>
        </>
    )

}

export default Header;