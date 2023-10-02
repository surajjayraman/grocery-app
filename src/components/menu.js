import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(
    items[0]
  )

  const handleItemChange = (e, id) => {
    const updatedItems = items.map(item => {
        if (id === item.id){
            return {
                id: item.id,
                title: e.target.value
            };
        }
        return item;
     } );
     setItems(updatedItems);
  }


  return (
    <>
      <p style={{color: 'darkmagenta'}}>British Airway's Meal Plan</p>
      <h2>What's your travel snack?</h2>
       <ul>
        {items.map(item => (
          <li>
            <input key={item.id}
            value={item.title}
            onChange={e => handleItemChange(e, item.id)}/>
            {' '}
            <button onClick={() => setSelectedItem(item)}>Choose</button>
            </li>

        ))}
        </ul>

      <p>You picked {selectedItem.title}.</p>
    </>
  );
}
