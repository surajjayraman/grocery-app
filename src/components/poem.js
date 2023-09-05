const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };

  export default function Poem() {
    return (
        <>
           <h3>Welcome to My Poem</h3> 
           <article>
            {poem.lines.map((line, index) =>
            <p key={index}>
               <i>{line}</i> 
            </p>
            )}
            </article>
        </>
    );
  }