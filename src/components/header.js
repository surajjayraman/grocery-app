import { useState } from "react";

const testData = [
    {uid: 'aaa', name: 'Ali Barber'},
    {uid: 'bbb', name: 'Jim Holden'}
]

const Header = (props) => {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);

      const addFriends = (e) => {
        e.preventDefault();
        setData([
                ...testData,
                {
                    uid: 'ccc',
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
                    <button type='button'>
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