import { useState } from 'react';
import { letters } from './data.js';
import Letter from './mailLetter.js';

export default function MailClone() {
  const [selectedIds, setSelectedIds] = useState([]);
  // allow multiple selection
  const selectedCount = selectedIds.length;

  function handleToggle(toggledId) {
   // allow multiple selection
   // Was it previously selected?
    if (selectedIds.includes(toggledId)) {
        // Then remove this ID from the array.
    return setSelectedIds(selectedIds.filter(id =>
        id !== toggledId
        ));
    } 
    // Otherwise, add this ID to the array.
    return setSelectedIds([
        ...selectedIds,
        toggledId
        ]);
  }

  return (
    <>
      <p className='highlighted'>Updated Inbox!</p>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // allow multiple selection
              selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}
