import { useState } from 'react';

export default function Picture() {
    const [style, setStyle] = useState('');
    const [status, setStatus] = useState(false);
    const handleStyle = () => {
        status ? setStyle('background background--active') : setStyle('background picture--active');
        setStatus(!status);
    }
    return (
        <>
        <p style={{color:'darkorange'}}>Add and remove a CSS class </p>
        <div className={style} onClick = {handleStyle}>
            <img
            className="picture"
            alt="Rainbow houses in Kampung Pelangi, Indonesia"
            src="https://i.imgur.com/5qwVYb1.jpeg"
            
            />
        </div>
        </>
    );
  }
