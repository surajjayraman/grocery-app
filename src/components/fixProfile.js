import Panel from './panel.js';
import { getImageUrl } from './utils.js';

let currentPerson;

export default function FixProfile({ person }) {
  currentPerson = person;
  return (
    <>
    <h1>Panel Profiles</h1>
    <Panel>
      <Header />
      <Avatar />
    </Panel>
    </>
    
  )
}

function Header() {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar() {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}
