/*const poem = {
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
  }*/

  const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  
  export default function Poem() {
    let output = [];
  
    // Fill the output array
    poem.lines.forEach((line, i) => {
      output.push(
        <hr key={i + '-separator'} />
      );
      output.push(
        <p key={i + '-text'}>
          {line}
        </p>
      );
    });
    // Remove the first <hr />
    output.shift();
  
    return (
      <article>
        {output}
      </article>
    );
  }
  