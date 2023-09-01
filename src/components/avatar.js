import React from 'react';
import { getImageUrl } from  './utils.js'

 const Avatar = () => {
    const person = {
        name : 'Gregorio Y. Zara',
        baseUrl : 'https://i.imgur.com/',
        imageId : '7vQD0fPs',
        imageSize : 's',
        theme : {
            backgroundColor: 'black',
            color : 'pink'
        }
    };

    return (
            <div style={person.theme}>
                <h2>JavaScript in JSX with Curly Braces</h2>
                <img
                    className="avatar"
                    src={getImageUrl(person)}
                    alt={person.description}
                />
            </div>
    );
  }

  export default Avatar;