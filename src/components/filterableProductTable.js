import React from "react";
import SearchBar from "./searchBar";
import ProductTable from "./productTable";
import { useState } from "react";

const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <SearchBar filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable 
                filterText={filterText}
                inStockOnly={inStockOnly}
                products={products}/>
        </div>
    );
}

export default FilterableProductTable;

