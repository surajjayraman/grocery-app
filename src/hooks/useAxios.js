import axios from "axios";
import { useEffect, useState } from "react"


const useAxios = (url) => {
    const [body, setBody] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setBody(res.data);
            })
            .catch(err => {
                setError(err.message);

            });
    }, [url])

    return [body, error];
}

export default useAxios;