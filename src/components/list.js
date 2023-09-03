const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
  
  export default function List() {
    const listItems = people.map((person) => {
       return <li>{person}</li>
    });

    return (
        <>
        <h2>Rendering Lists</h2>
        <ul>{listItems}</ul>
        </>
        
    );
}