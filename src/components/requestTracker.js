import { useState } from 'react';

const RequestTracker = () => {
    const [order, setOrder] = useState(0);

    const handleOrder = () => {
        setOrder(order => order + 1);
    }
    return (
        <>
            <h1>Track your orders!</h1>
            <p style={{color: 'purple'}}>Order Completed: {order}</p>
            <button onClick={handleOrder}>
                Buy
            </button>
        </>
    )
}

export default RequestTracker;