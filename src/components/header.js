import { useState } from "react";


const Header = (props) => {
    const [input, setInput] = useState('');

    return (
        <>
        <p className="highlighted">React Review - My Friends App</p>
        <h2>{props.text}</h2>
        <div className="input-form">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        </div>
        {input}
        </>
    )

}

export default Header;