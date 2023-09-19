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
import ClockRender from "./components/clockRender";
import FixProfile from "./components/fixProfile";
import StoryTray from "./components/storyTray";
import Toolbar from "./components/toolBar";
import SignUp from "./components/signUp";
import LightSwitch from "./components/lightSwitch";
import ColorSwitch from "./components/colorSwitch";
import SculptureGallery from "./components/sculptureGallery";
import Page from "./components/page";
import Form from "./components/form";
import FeedbackForm from "./components/feedbackForm";
import FormStateDemo from "./components/formStateDemo";
import Counter from "./components/counter";
import TrafficLight from "./components/trafficLight";
import RequestTracker from "./components/requestTracker";
import AsyncRequestTracker from "./components/asyncRequestTracker";
import ProcessQueue from "./components/processQueue";
import MovingDot from "./components/movingDot";
import FormUpdate from "./components/formUpdate";
import ImmerForm from "./components/immerForm";
import Scoreboard from "./components/scoreBoard";
import ListUpdate from "./components/listUpdate";
import CounterList from "./components/counterList";
import ListAdd from "./components/listAdd";
import ListInsert from "./components/listInsert";
import ListReverse from "./components/listReverse";
import BucketList from "./components/bucketList";
import ShoppingCart from "./components/shoppingCart";

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
      <h1>Panel Profiles</h1>
      <FixProfile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <FixProfile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
      <h1> Story Board</h1>
      <p>It is <Clock color={color} time={time.toLocaleTimeString()} /> now!</p>
      <StoryTray stories=
        {[{
          id: "My Story 1",
          label: 'Create Story 1'
        },
        {
          id: "My Story 2",
          label: 'Create Story 2'

        }]}/>
        <Toolbar
        onPlayMovie={() => alert('Playing!')}
        onUploadImage={() => alert('Uploading!')}
        />
        <SignUp />
        <LightSwitch />
        <ColorSwitch />
        <SculptureGallery />
        <Page />
        <Form />
        <FeedbackForm />
        <FormStateDemo />
        <Counter />
        <TrafficLight />
        <RequestTracker />
        <AsyncRequestTracker />
        <ProcessQueue baseState={0} queue={[1,1,1]}/>
        <ProcessQueue baseState={0} queue={[n => n+1, n => n+1, n => n+1]}/>
        <ProcessQueue baseState={0} queue={[5, n => n+1]}/>
        <ProcessQueue baseState={0} queue={[5, n => n+1, 42]}/>
        <ProcessQueue baseState={0} queue={[5, n => n+1, () => 'Hello Suraj']}/>
        <MovingDot />
        <FormUpdate />
        <ImmerForm />
        <Scoreboard />
        <ListUpdate />
        <CounterList />
        <ListAdd />
        <ListInsert />
        <ListReverse />
        <BucketList />
        <ShoppingCart />
    </div>
  );
}


