import { useState } from  'react';

const TrafficLight = () => {
    const [walk,setWalk] = useState(true);

    const handleClick = () => {
        setWalk(!walk);
        walk ? alert('Stop is next') : alert('Walk is next');
    }

    return (
        <>
        <h1>Watch for the Lights before you Walk!</h1>
        <button onClick={handleClick}>
            Change to { walk ? 'Stop' : 'Walk'}
        </button>
        <h1 style={{
            color : walk ? 'darkgreen' : 'darkred'
        }}>
            {walk ? 'Walk' : 'Stop'}
        </h1>
        </>
    );
}

export default TrafficLight;
