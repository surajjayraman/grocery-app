import { useState } from 'react';
import { foods } from './data';



export default function FilterableList() {
  const [query, setQuery] = useState('');
  const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <p className='highlighted'>Filtering a Food Recipe list </p>
      <SearchBar query={query} onChange={handleChange}/>
      <hr />
      <List items={results} />

    </>
  );
}

function SearchBar({query, onChange}) {


  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function filterItems(items, query) {
    query = query.toLowerCase();
    return items.filter(item =>
      item.name.split(' ').some(word =>
        word.toLowerCase().match(query)
      )
    );
  }

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
