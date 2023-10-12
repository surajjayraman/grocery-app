import axios from "axios";
import { useEffect, useState } from "react"


const useAxios = (url) => {
    const [body, setBody] = useState('');

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setBody(res.data);
            });
    }, [url])

    return body;
}

export default useAxios;