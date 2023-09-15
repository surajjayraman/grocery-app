import { useState } from 'react';

const RequestTracker = () => {
    const [order, setOrder] = useState(0);
    const [pending,setPending] = useState(0);
    const [completed,setCompleted] = useState(0);

    const handleOrder = () => {
        setOrder(order => order + 1);
        setPending(pending => pending + 1);
    }
    return (
        <>
            <h1>Track your orders!</h1>
            <p style={{color: 'Orange'}}>Order Pending: {pending}</p>
            <p style={{color: 'rebeccapurple'}}>Order Processing: {order}</p>
            <p style={{color: 'darkgreen'}}>Order Completed: {completed}</p>
            <button onClick={ () => {
                handleOrder();
                setTimeout(() => {
                    //alert('processing order');
                    setPending(pending => pending - 1);
                    setCompleted(completed => completed + 1);
                  }, 3000);

                }

            }>
                Buy
            </button>
        </>
    )
}

export default RequestTracker;