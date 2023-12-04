import { useState, useEffect } from 'react';

export default function StatusBar() {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }
        function handleOffline() {
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <>
            <p className='highlighted'>Custom Hooks: Sharing logic between components</p>
            <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
        </>
    )
}
