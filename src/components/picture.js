import { useState } from 'react';

export default function Picture() {

    const [isActive, setIsActive] = useState(false);

    let backgroundClassName = 'background';
    let pictureClassName = 'picture';

    isActive ? pictureClassName += ' picture--active'
            : backgroundClassName += ' background--active';


    return (
        <>
        <p style={{color:'darkorange'}}>Add and remove a CSS class </p>
        <div className={backgroundClassName} onClick = {() => {
            setIsActive(false);

        }}>
            <img
            className={pictureClassName}
            alt="Rainbow houses in Kampung Pelangi, Indonesia"
            src="https://i.imgur.com/5qwVYb1.jpeg"
            onClick={e => {
                e.stopPropagation();
                setIsActive(true);

            }}
            />
        </div>
        </>
    );
  }
