import { useState } from 'react';
import { initialLetters } from './data.js';
import Letter from './letter.js';

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetter, setHighlightedLetter] = useState(null);

  function handleHover(letterId) {
    setHighlightedLetter(letterId);
  }

  function handleStar(starred) {
    setLetters(letters.map(letter => {
      if (letter.id === starred) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <p style={{color: 'orangered'}}>My GMAIL Clone!</p>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter.id === highlightedLetter
            }
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
