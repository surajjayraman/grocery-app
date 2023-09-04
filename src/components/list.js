import { people } from './data';
import { getImageUrl } from "./utils";

/*const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];*/
  
  export default function List() {
    const chemists = people.filter((person) => {
        return person.profession === 'chemist';
    });

    const listItems = people.map((person) => {
       return (
        <>
        <li key={person.id}>
        <img
                src={getImageUrl(person)}
                alt={person.name}
                />
            
            {person.name}
        </li>
       </>
       );
    });

    const chemistList = chemists.map((chemist) => {
        return (
        <>
          <li key={chemist.id}>
            <img
                src={getImageUrl(chemist)}
                alt={chemist.name}
                />
                <p>
                    <b>{chemist.name}:</b>
                    {' ' + chemist.profession + ' '}
                    known for {chemist.accomplishment}
                </p>
          </li>
            
        </> )

    });

    return (
        <article>
            <h2>Rendering Lists</h2>
            <ul>{listItems}</ul>
            <h2>All chemists</h2>
            <ul>{chemistList}</ul>
        </article>
        
    );
}