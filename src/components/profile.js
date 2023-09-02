import Avatar from './avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <h3>Passing JSX as children</h3>  
      <Avatar
        size={100}
        person={{ 
          baseUrl:'https://i.imgur.com/' , 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
       <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    </Card>
  );
}
