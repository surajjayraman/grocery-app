import { useState } from "react";

const FormStateDemo = () => {
    const [isSent,setIsSent]= useState(false);
    const [message, setMessage] = useState('Hi!');


    return (
        <>
        <form>
            <textarea
                placeholder="Message"
                value={message}>    
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