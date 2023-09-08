
  
 export default function Toolbar({ onPlayMovie, onUploadImage }) {

    const handleIdleClick = () => alert(`Idle message >>> Sorry I'm chilling!`);

    return (
      <div>
        <h1>Play Toolbar</h1>
        <Button onClick={onPlayMovie}>
          Play Movie
        </Button>
        <Button onClick={onUploadImage}>
          Upload Image
        </Button>
        <Button onClick={handleIdleClick}>
            I don't do anything!
        </Button>
        <AlertButton message={'Hello from Alert Button'} >
            Click me for an Alert!
        </AlertButton>
      </div>
    );
  }

  function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }

  function AlertButton({ message, children}){

    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    )
  }
