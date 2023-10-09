import { useEffect, useState } from "react";
import axios from 'axios';

const Quote = () => {
    const [data, setData]= useState({});
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get('https://api.kanye.rest/')
            .then(res => {
                setData(res.data);
            })
    },[count])

    return (
        <>
        <p className='highlighted'>Famous and funny quotes!</p>
        <div>
            {count} {' '}
            <button onClick={() => {
                setCount(count => count + 1);
             }
            }>
                +
            </button>
            <br/>
            {data.quote}
        </div>
        </>
    )

}

export default Quote;