import React from 'react'

const SearchBar = ({ filterText, inStockOnly }) => {
  return (
    <div>
      <h1>This is the page title</h1>
     
        <form>
            <input type="text" 
                value={filterText}
                placeholder="Search..." />
            <label>
                <input type="checkbox"
                    checked={inStockOnly} />
                {' '}
                Only show products in stock
            </label>
        </form>
    </div>
  )
}

export default SearchBar