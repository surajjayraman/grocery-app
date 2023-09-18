import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function ListUpdate() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return(
    <div>
    <p style={{color:'darkcyan'}} >Mutation - Removing from an array</p>
    <h1>Inspiring Sculptors</h1>
    <ul>
      {artists.map(artist => {
        return <li key={artist.id}>{artist.name}{' '}
                <button onClick={() => {
                  setArtists(artists.filter(a => a.id !== artist.id))
                }}>
                  Delete
                </button>
        </li>
      })}
    </ul>
    </div>
  );
}