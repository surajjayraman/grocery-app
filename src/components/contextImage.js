import { useContext, useState } from 'react';
import { places } from './data.js';
import { getImageUrlSize } from './utils.js';
import { SizeContext } from './sizeContext.js';

export default function ContextImage() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <p className='highlighted'>Replace prop drilling with context</p>
      <SizeContext.Provider>
        <label value={imageSize}>
            <input
            type="checkbox"
            checked={isLarge}
            onChange={e => {
                setIsLarge(e.target.checked);
            }}
            />
            Use large images
        </label>
        <hr />
        <List />
      </SizeContext.Provider>
    </>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
    const imageSize = useContext(SizeContext);
    return (
        <img
        src={getImageUrlSize(place)} 
        alt={place.name}
        width={imageSize}
        height={imageSize}
        />
    );
}
