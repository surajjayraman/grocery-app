import { useState } from 'react';

export default function FormUpdate() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });
  // nested objects
  const [artist, setArtist] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  const handleArtChange = (e) => {
    const newArtwork = {...artist.artwork,
        [e.target.name]:e.target.value
        };
    setArtist({...artist, artwork: newArtwork});
  }

 return (
    <>
      <label>
        First name:
        <input
          name='firstName'
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name='lastName'
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name='email'
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
      <h1 style={{color:'rebeccapurple'}}>Nested Artist City Objects</h1>
      <label>
        Artist Name:
        <input
          name='name'
          value={artist.name}
          onChange={handleArtChange}
        />
      </label>
      <label>
        Title:
        <input
          name='title'
          value={artist.artwork.title}
          onChange={handleArtChange}
        />
      </label>
      <label>
        City:
        <input
          name='city'
          value={artist.artwork.city}
          onChange={handleArtChange}
        />
      </label>
      <label>
        Image:
        <input
          value={artist.artwork.image}
          onChange={handleArtChange}
        />
      </label>
      <p>
        {artist.name}{' '}
      </p>
      <p>
        {artist.artwork.title}{' '}
        ({artist.artwork.city})
      </p>
      <img src={artist.artwork.image}
            alt={artist.artwork.title}/>
    </>
  );
}
