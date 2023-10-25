import { useState } from "react";

const testData = [
    {uid: 'aaa', name: 'Ali Barber'},
    {uid: 'bbb', name: 'Jim Holden'}
]

const Header = (props) => {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);

      const addFriends = () => {

        setData([
            ...testData,
            {
                uid: 'ccc',
                name: input
            }
        ]);

    }

    return (
        <>
            <p className="highlighted">React Review - My Friends App</p>
            <h2>{props.text}</h2>
            <div className="input-form">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            </div>
            {input} <br/>
            <button type='submit' onClick={addFriends}>
                Add friend
            </button>
            <ul>
                    {data.map(item => {
                        return (
                            <li>
                                {item.name}
                            </li>
                            )
                        })
                    }
            </ul>
        </>
    )

}

export default Header;