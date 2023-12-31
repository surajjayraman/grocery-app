import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [products,setProducts] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    // use the map function to create a new array, 
    // and then use the ... object spread syntax to create a copy of the changed object
    // for the new array:
    const newProducts = products.map((product) => {
      if (product.id === productId){
        return {
          ...product,
          count: product.count + 1
        }
      }
      return product;
    });

    setProducts(newProducts);
  }

  function handleDecreaseClick(productId) {
    // use the map function to create a new array,
    // and then use the ... object spread syntax to create a copy of the changed object
    // for the new array:
    const newProducts = products.map((product) => {
      if (product.id === productId){
        return {
          ...product,
          count: product.count - 1
        }
      }
      return product;
    });

    const availableProds = newProducts.filter( p => {
      return p.count > 0;
    } )

    setProducts(availableProds);
  }

  return (
    <>
    <p style={{color:'darkorchid'}}>Update an item in the shopping cart</p>
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={()=> {
            handleDecreaseClick(product.id)
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
    </>
  );
}
