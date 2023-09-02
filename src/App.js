import "./styles.css";
import FilterableProductTable from "./components/filterableProductTable";
import Gallery from "./components/gallery";
import Bio from "./components/bio";
import Avatar from "./components/avatar";
import TodoList from "./components/todoList"

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: true, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: false, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: true, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return (
    <div>
      <FilterableProductTable products={PRODUCTS} />
      <Bio />      
      <Gallery />
      <h1>Hedy Lamarr's Todos</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo"
      />
      <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
      </ul>
      <Avatar personProp={{ baseUrl:'https://i.imgur.com/', name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
      />
      <TodoList />
    </div>
    
  );
}


