
let statuses = [
    'empty',
    'typing',
    'submitting',
    'success',
    'error'
]

export default function QuizForm() {
    
    return (
      <>
      <h1>City quiz</h1>
        
        { 
            statuses.map( status => (
                
                <section key={status}>
                    <h4>Form ({status}):</h4>
                    <p>
                    In which city is there a billboard that turns air into drinkable water?
                    </p>
                    <form>
                        
                        <textarea>

                        </textarea>
                        <br/>
                        <button disabled={status === 'empty' || status === 'submitting'}>
                        Submit
                        </button>
                    </form>
                    
                </section>
            ))
        }
        
      </>
    )
  }


/*export default function QuizForm() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  } 

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <p style={{color: 'darkorchid'}}>Managing State Demo</p>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea
         value={answer}
         onChange={handleTextareaChange}
        ></textarea>
        <br/>
        <button onClick={handleSubmit}
            disabled={answer.length === 0}>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
*/