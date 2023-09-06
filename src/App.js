import "./styles.css";
import FilterableProductTable from "./components/filterableProductTable";
import Gallery from "./components/gallery";
import Bio from "./components/bio";
import Avatar from "./components/avatar";
import TodoList from "./components/todoList";
import Profile from "./components/profile";
import Clock from "./components/clock"
import { useState, useEffect } from 'react';
import PackingList from "./components/packingList";
import DrinkList from "./components/drinkList";
import List from "./components/list";
import RecipeList from "./components/recipeList";
import Poem from './components/poem';
import TeaSet from "./components/teaSet";
import ClockRender from "./components/clockRender"

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: true, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: false, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: true, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  return (
    <div>
      <FilterableProductTable products={PRODUCTS} />
      <Bio />
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
      <Avatar person={{ baseUrl:'https://i.imgur.com/', name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
      />
      <TodoList />
      <Profile />
        <div>
          <h3>How props change over time</h3>
          <p>
            Pick a color:{' '}
            <select value={color} onChange={e => setColor(e.target.value)}>
              <option value="lightcoral">lightcoral</option>
              <option value="midnightblue">midnightblue</option>
              <option value="rebeccapurple">rebeccapurple</option>
            </select>
          </p>
        <Clock color={color} time={time.toLocaleTimeString()} />
      </div>
      <Gallery person={ { baseUrl :'https://i.imgur.com/', imageId: 'szV5sdG'} } size={70} />
      <Gallery person={ { baseUrl :'https://i.imgur.com/', imageId: 'YfeOqp2'} } size={70} />
      <PackingList />
      <DrinkList />
      <List />
      <RecipeList />
      <Poem />
      <TeaSet />
      <ClockRender time={time} />
    </div>

  );
}


