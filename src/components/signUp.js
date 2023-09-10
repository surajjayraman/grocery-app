const SignUp = () => {
    return (
        <>
            <h1>Preventing Default Behaviour</h1>
            <form onSubmit={
                    e => {
                        e.preventDefault();
                        alert('Submitting');
                    }
                }
             >
            <input />
            <button>
                Send
            </button>
            </form>
        </>
    )
}

export default SignUp;