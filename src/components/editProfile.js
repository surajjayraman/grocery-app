export default function EditProfile() {
    let count = 0;

    const para = <p>Hello Paragraph!</p>

    const Button = (props) => {
       
        return (
            <>
             <p>Hello {props.text}</p>
             <button>{props.children}</button>
            </>
        )
    }
    return (
        <>
        <p style={{color:'darkorange'}}>Edit Profile Demo</p>
        <form>
            <label>
            First name:{' '}
            <b>Jane</b>
            <input />
            </label>
            <label>
            Last name:{' '}
            <b>Jacobs</b>
            <input />
            </label>
            <button type="submit">
            Edit Profile
            </button>
            <p><i>Hello, Jane Jacobs!</i></p>
        </form>
        <Button text='Alice'>
            <h4>{count} {' '} Click Me!</h4>
        </Button>
        {para}
      </>
    );
  }
  