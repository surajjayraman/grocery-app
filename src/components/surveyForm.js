import { useState } from 'react';

const SurveyForm = () => {
    const [answer, setAnswer] = useState('Excellent vacation!')
    const [isEdit, setIsEdit] = useState(false);

    if (isEdit) {
        return <p>Thank You for the feedback!</p>
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEdit(true);
    }

    return (
        <>
        <h1 style={{color:'darkorchid'}}>Choosing the State Structure</h1>
        <form onSubmit={handleSubmit}>
            <p>How was your stay at The Prancing Pony?</p>
            <textarea value={answer} onChange={e => setAnswer(e.target.value)}>
            </textarea>
            <button type='submit'>
                Send
            </button>
        </form>

        </>

    )
}

export default SurveyForm;