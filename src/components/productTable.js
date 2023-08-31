import React from 'react';
import ProductCategoryRow from "./productCategoryRow";
import ProductRow from "./productRow";
import ProductTableHeader from "./productTableHeader";

const ProductTable = ({ products, filterText, inStockOnly }) => {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((product) => {
      if (
        product.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }

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