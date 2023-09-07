
  
 export default function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
      <div>
        <h1>Play Toolbar</h1>
        <Button onClick={onPlayMovie}>
          Play Movie
        </Button>
        <Button onClick={onUploadImage}>
          Upload Image
        </Button>
        <Button onClick={() => alert(`Sorry I'm chilling!`)}>
            I don't do anything!
        </Button>
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
  