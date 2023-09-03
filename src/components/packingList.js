function Item({ name, isPacked }) {
    return isPacked ? <li className="item">{name} ✔</li>
         :<li className="item">{name}</li>;
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Conditional Rendering</h1>
        <h2>Sally Ride's Packing List</h2>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }