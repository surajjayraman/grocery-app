import useAxios from "../hooks/useAxios";


export default function KanyeQuote() {
    const url = 'https://api.kanye.rest';
    const [body, error, pending] = useAxios(url);

    return (
        <>
           <p className="highlighted">Kanye's Latest Quotes!</p>
            <ul>
                <li>
                    {body && body.quote}
                    {error && error.message}
                    {pending && "Please await.."}
                </li>
            </ul>
        </>
    );

}