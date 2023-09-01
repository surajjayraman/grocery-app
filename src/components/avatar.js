import React from 'react';

 const Avatar = () => {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara'
    return (
            <>
                <h2>JavaScript in JSX with Curly Braces</h2>
                <img
                    className="avatar"
                    src={avatar}
                    alt={description}
                />
            </>
    );
  }

  export default Avatar;