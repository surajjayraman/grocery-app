import { useState } from 'react';
import AddTodo from './addTodo.js';
import TaskList from './taskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskManager() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    const newTodos = [
        ...todos,
        {
            id: nextId++,
            title: title,
            done: false
        }
    ];
    setTodos(newTodos);
  }

  function handleChangeTodo(nextTodo) {
    const updatedTodos = todos.map( todo => {
        if (todo.id === nextTodo.id){
            return {
                id: nextTodo.id,
                title : nextTodo.title,
                done : nextTodo.done
            }
        }
        return todo;
    });
    setTodos(updatedTodos);
  }

  function handleDeleteTodo(todoId) {
    const index = todos.findIndex(t =>
      t.id === todoId
    );
    todos.splice(index, 1);
  }

  return (
    <>
      <p style={{color:'rebeccapurple'}}>Task List App</p> 
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
