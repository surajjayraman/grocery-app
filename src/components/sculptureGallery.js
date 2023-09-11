import { sculptureList } from './data.js';
import { useState } from 'react';

export default function SculptureGallery() {
  // let index = 0;
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let sculpture = sculptureList[index];

  function handleClick() {
    setIndex(index + 1);
  }

  // show details
  function handleMoreClick() {
    setShowMore(!showMore);
  }


  return (
    <>
       <h1>------------------------------------------------</h1>
       <h2>Sculpture Museum</h2> 
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
        <button onClick={handleMoreClick}>
            {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      
    </>
  );
}
