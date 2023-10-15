import { useState } from 'react';
import Chat from './chat.js';
import ContactList from './contactList.js';

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <p className='highlighted'>Resetting a form with a key</p>  
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.id} contact={to} onChange={e => setText(e.target.value)}
        text={text}/>
    </div>
  )
}


