import { useEffect } from 'react';
import { createConnection } from './chatConnect.js';

export default function ChatRoom() {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();
    }, []);
    return (
        <>
            <p className='highlighted'>You are invited to our ChatRoom</p>
            <h1>Welcome to the chat!</h1>
        </>
    );
}
