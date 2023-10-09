import { useEffect } from "react";
import axios from 'axios';

const Quote = () => {

    useEffect(() => {
        axios.get('https://api.kanye.rest/')
            .then(res => {
                console.log(res.data);
            })
    },[])

    return (
        <>
        <p className='highlighted'>Famous and funny quotes!</p>
        </>
    )

}

export default Quote;