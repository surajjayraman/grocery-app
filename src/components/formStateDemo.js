import { useState } from "react";

const FormStateDemo = () => {
    const [isSent,setIsSent]= useState(false);
    const [message, setMessage] = useState('Hi!');

    if (isSent){
        return (
            <h1>Your message is on its way!</h1>
        )
    }
    const handleTextChange = (e) => {
        setMessage(e.target.value);
    }


    return (
        <>
        <form>
            <textarea
                placeholder="Message"
                value={message}
                onChange={handleTextChange}>    
            </textarea>
            <br />
            <button type="submit"
                onClick={ 
                    (e) => {
                        e.preventDefault();
                        setIsSent(true);
                    }
                }>
                Send
            </button>
        </form>
        </>
    )





}

export default FormStateDemo;