import React from 'react';
import Profile from './profile';
import { getImageUrl } from './utils';
import Image from './image';

/*const Profile = () => {
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
  }*/

const Gallery = ({ person, size=100 }) => {
    return (
      <div>
        <section>
          <br/>
          <h1>Amazing scientists</h1>
          <Profile />
        </section>
        <h1>Notable Scientists</h1>
        <section className="profile">
          <h2>Maria Skłodowska-Curie</h2>
          <img
            className="avatar"
            src={getImageUrl(person, size)}
            alt="Maria Skłodowska-Curie"
            width={size}
            height={size}
          />
          <ul>
            <li>
              <b>Profession: </b> 
              physicist and chemist
            </li>
            <li>
              <b>Awards: 4 </b> 
              (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
            </li>
            <li>
              <b>Discovered: </b>
              polonium (element)
            </li>
          </ul>
        </section>
        <section className="profile">
          <h2>Katsuko Saruhashi</h2>
          <img
            className="avatar"
            src={getImageUrl(person, size)}
            alt="Katsuko Saruhashi"
            width={size}
            height={size}
          />
          <ul>
            <li>
              <b>Profession: </b> 
              geochemist
            </li>
            <li>
              <b>Awards: 2 </b> 
              (Miyake Prize for geochemistry, Tanaka Prize)
            </li>
            <li>
              <b>Discovered: </b>
              a method for measuring carbon dioxide in seawater
            </li>
          </ul>
        </section>
        <section>
        <h1>Inspiring Sculptures</h1>
        <Image />
        <Image />
        <Image />
        </section>
      </div>
    );
  }

export default Gallery;  

