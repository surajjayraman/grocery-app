import Avatar from './avatar.js';

function Card({ children, title }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
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
        <Card title='Photo'>
          <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card title='About'>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
  </div>
  );
}
