import React from "react";
import SearchBar from "./searchBar";
import ProductTable from "./productTable";

const FilterableProductTable = ({ products }) => {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
}

export default FilterableProductTable;

