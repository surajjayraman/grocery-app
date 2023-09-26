export default function EditProfile() {

    const para = <p>Hello Paragraph!</p>

    const Button = ({ text }) => {
        return <button>{text}</button>
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
        <Button text='Alice'/>
        {para}
      </>
    );
  }
  