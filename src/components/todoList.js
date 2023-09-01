const today = new Date();
const person = {
    name : 'Gregorio Y. Zara',
    theme : {
        backgroundColor: 'black',
        color : 'pink'
    }
}

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
    
    return (
        <div style={person.theme}>
            <h1>{person.name}'s To Do List</h1>
            <h3>To Do List for {formatDate(today)}</h3>
            <ul>
                        <li>Improve the videophone</li>
                        <li>Prepare aeronautics lectures</li>
                        <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}

