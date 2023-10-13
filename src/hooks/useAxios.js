import axios from "axios";
import { useEffect, useState } from "react"


const useAxios = (url) => {
    const [body, setBody] = useState('');
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        setPending(true);
        setTimeout(() => {
            axios.get(url)
            .then(res => {
                setBody(res.data);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => setPending(false));

        }, 2000);
    }, [url])

    return [body, error, pending];
}

export default useAxios;