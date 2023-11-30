import { useState } from 'react';
import { initialTodos } from './activeTodos.js';

export default function ActiveTodoList() {

    const [todos, setTodos] = useState(initialTodos);
    const [showActive, setShowActive] = useState(false);
    const activeTodos = todos.filter(todo => !todo.completed);
    const visibleTodos = showActive ? activeTodos : todos;

    return (
        <>
            <p className='highlighted'>Transform data to show only Active Todos</p>
            <label>
                <input
                    type="checkbox"
                    checked={showActive}
                    onChange={e => setShowActive(e.target.checked)}
                />
                Show only active todos
            </label>
            <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
            <ul>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ? <s>{todo.text}</s> : todo.text}
                    </li>
                ))}
            </ul>
            <footer>
                {activeTodos.length} todos left
            </footer>
        </>
    );
}


