import useAxios from "../hooks/useAxios";


export default function OfficeQuote() {
    const url = 'https://officeapi.akashrajpurohit.com/quote/random';
    const [body, error, pending] = useAxios(url);

    return (
        <>
           <p className="highlighted">Latest Office Quotes!</p>
            <ul>
                <li>
                    {body &&
                    <div>
                        {body.quote}<br/>
                        <span style={{color:'blue'}}>{body.character}</span>
                    </div>
                    }
                    {error && error.message}
                    {pending && "Please await.."}
                </li>
            </ul>
        </>
    );

}