import { useState } from 'react';

const SurveyForm = () => {
    const [answer, setAnswer] = useState('Excellent vacation!')
    //const [isSent, setIsSent] = useState(false);
    //const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState('typing'); // typing, sending and sent

    const isSent = status === 'sent';
    const isSending = status === 'sending';

    if (isSent) {
        return <p>Thank You for the feedback!</p>
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        await sendMessage();
        setStatus('sent');
    }

    // Pretend to send a message.
   const sendMessage = () => {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  }

    return (
        <>
        <h1 style={{color:'darkorchid'}}>Choosing the State Structure</h1>
        <form onSubmit={handleSubmit}>
            <p>How was your stay at The Prancing Pony?</p>
            <textarea value={answer}
                disabled={isSending}
                onChange={e => setAnswer(e.target.value)}>
            </textarea>
            <button type='submit'
                disabled={isSending}>
                Send
            </button>
            {isSending && <p>Sending...{answer}</p>}
        </form>

        </>

    )
}

export default SurveyForm;