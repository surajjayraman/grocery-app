import React from 'react';

function Profile() {
    return (
        <div>
            <img
                src="https://i.imgur.com/MK3eW3As.jpg"
                alt="Katherine Johnson"
            />
            <img
                src="https://i.imgur.com/lICfvbD.jpg"
                alt="Aklilu Lemma"
            />
            <img 
                src="https://i.imgur.com/jA8hHMpm.jpg" 
                alt="Katsuko Saruhashi" 
            />
            <img
                src="https://i.imgur.com/QIrZWGIs.jpg"
                alt="Alan L. Hart"
            />
        </div>

    );
  }

const Gallery = () => {
    return (
      <section>
        <br/>
        <h1>Amazing scientists</h1>
        <Profile />
      </section>
    );
  }

export default Gallery;  

