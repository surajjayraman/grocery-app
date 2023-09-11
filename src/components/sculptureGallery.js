import { sculptureList } from './data.js';
import { useState } from 'react';

export default function SculptureGallery() {
  // let index = 0;
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let sculpture = sculptureList[index];

  // adds a guarding condition inside both event handlers
  // and disables the buttons when needed
  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
        setIndex(index - 1);
    }
  }

  function handleClick() {
    if (hasNext){
        setIndex(index + 1);
    }

  }

  // show details
  function handleMoreClick() {
    setShowMore(!showMore);
  }


  return (
    <>
       <h1>------------------------------------------------</h1>
       <h2>Sculpture Museum</h2> 
       <button
        onClick={handlePrevClick}
        disabled={!hasPrev}
        >
        Previous
      </button>
       <button onClick={handleClick}
        disabled={!hasNext}>
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
