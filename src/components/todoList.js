const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
    const name = 'Gregorio Y. Zara';
    return (
        <>
            <h1>{name}'s To Do List</h1>
            <h3>To Do List for {formatDate(today)}</h3>
            <ul style={{
                        backgroundColor: 'black',
                        color: 'pink'
                        }}>
                        <li>Improve the videophone</li>
                        <li>Prepare aeronautics lectures</li>
                        <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </>
    );
}