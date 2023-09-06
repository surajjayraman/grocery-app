import Panel from './panel.js';
import { getImageUrl } from './utils.js';

export default function FixProfile({ person }) {

  return (
    <>
    <Panel>
      <Header name={person.name}/>
      <Avatar person={person}/>
    </Panel>
    </>
  )
}

function Header({ name }) {
  return <h1>{name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
