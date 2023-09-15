import { useState } from  'react';

const TrafficLight = () => {
    const [walk,setWalk] = useState(true);

    const handleClick = () => {
        setWalk(!walk);
        walk ? alert('Stop is next') : alert('Walk is next');
    }

    return (
        <>
        <h1 style={{color: 'red'}}>Watch for the Lights before you Walk!</h1>
        <button onClick={handleClick}>
            Change to { walk ? 'Stop' : 'Walk'}
        </button>
        <h1 style={{
            color : walk ? 'darkgreen' : 'darkred'
        }}>
            {walk ? 'Walk' : 'Stop'}
        </h1>
        <p>
            React waits until all code in the event handlers has run before processing your state updates
        </p>
        </>
    );
}

export default TrafficLight;
