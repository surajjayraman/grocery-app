import React from 'react'

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
  return (
    <div>
      <h1>This is the page title</h1>
     
        <form>
            <input type="text" 
                value={filterText}
                placeholder="Search..."
                onChange={ (e) => onFilterTextChange(e.target.value)} />
            <label>
                <input type="checkbox"
                    checked={inStockOnly}
                    onChange={ (e) => onInStockOnlyChange(e.target.value)} />
                {' '}
                Only show products in stock
            </label>
        </form>
    </div>
  )
}

export default SearchBar

