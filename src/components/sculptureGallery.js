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
        {index <= 11 && `Next`}
       </button>
      <h2>
        <i>{index <= 11 && sculpture.name} </i> 
        by {index <= 11 && sculpture.artist}
      </h2>
      <h3>  
        ({index <= 11 && index + 1} of {index <= 11 && sculptureList.length})
      </h3>
        <button onClick={handleMoreClick}>
        {index <= 11 && showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{index <= 11 && sculpture.description}</p>}
        {index <= 11 && 
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />}
      
    </>
  );
}
