import React from 'react'

const SearchBar = ({ children }) => {
  return (
    <div>
      <h1>This is the page title</h1>
      { children }
        <form>
            <input type="text" placeholder="Search..." />
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
        </form>
    </div>
  )
}

export default SearchBar