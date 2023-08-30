import React from 'react';
import ProductCategoryRow from "./productCategoryRow";
import ProductRow from "./productRow";
import ProductTableHeader from "./productTableHeader";

const ProductTable = ({ products }) => {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (
      <div>
       <ProductTableHeader />
        {rows}
      </div>
    );
  }

  export default ProductTable;