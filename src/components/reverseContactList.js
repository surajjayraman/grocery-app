import { useState } from 'react';
import Contact from './reverseContact.js';

const contacts = [
    { id: 0, name: 'Alice', email: 'alice@mail.com' },
    { id: 1, name: 'Bob', email: 'bob@mail.com' },
    { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
  ];

export default function ReverseContactList() {
  const [reverse, setReverse] = useState(false);
  const [displayedContacts, setDisplayedContacts] = useState(contacts);

  const handleReverse = (e) => {
    setReverse(e.target.checked);
    const reversedContacts = [...displayedContacts.reverse()];
    setDisplayedContacts(reversedContacts);
  }

  return (
    <>
      <p className='highlighted'>Fix misplaced state in the list</p>
      <label>
        <input
          type="checkbox"
          value={reverse}
          onChange={handleReverse}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact) =>
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        )}
      </ul>
    </>
  );
}


