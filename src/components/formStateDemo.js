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
    const sendMessage = () => {
        alert(`Sent message ${message}`);
    }


    return (
        <>
        <h1> Setting state triggers renders Demo</h1>
        <form onSubmit={ (e) => {
                        e.preventDefault();
                        setIsSent(true);
                        sendMessage(message);
                    }
                }>
            <textarea
                placeholder="Message"
                value={message}
                onChange={handleTextChange}>
            </textarea>
            <br />
            <button type="submit">
                Send
            </button>
        </form>
        </>
    )





}

export default FormStateDemo;