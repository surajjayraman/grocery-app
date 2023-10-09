import { useEffect, useState } from "react";
import axios from 'axios';

const Quote = () => {
    const [data, setData]= useState({});

    useEffect(() => {
        axios.get('https://api.kanye.rest/')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
    },[])

    return (
        <>
        <p className='highlighted'>Famous and funny quotes!</p>
        <ul>
            <li>{data.quote}</li>
        </ul>
        </>
    )

}

export default Quote;