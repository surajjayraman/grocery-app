import axios from "axios";
import { useEffect, useState } from "react";
import { v4 } from 'uuid';

const testData = [
    {uid: 'aaa', name: 'Ali Barber'},
    {uid: 'bbb', name: 'Jim Holden'}
]

const url = 'https://random-data-api.com/api/name/random_name?size=5';

const Header = (props) => {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const uniqueId = v4();

    // Get randon mames during load
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data);
            });
    }, []);

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

    const getFriends = () => {
        setData(testData);
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
                <button onClick={getFriends}>
                        Get Friends
                </button>
            </div>
            {input} <br/>
            <h2 className="highlighted">Random Friends</h2>
            <ul>
                    {list}
            </ul>
        </>
    )

}

export default Header;