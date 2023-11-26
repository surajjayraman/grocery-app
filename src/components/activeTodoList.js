import { useState, useMemo } from 'react';
import { initialTodos, createTodo, getVisibleTodos } from './activeTodos.js';

export default function ActiveTodoList() {

    const [todos, setTodos] = useState(initialTodos);
    const [showActive, setShowActive] = useState(false);
    const [text, setText] = useState('');
    //const visibleTodos = showActive ? activeTodos : todos;
    const visibleTodos = useMemo(
        () => getVisibleTodos(todos, showActive),
        [todos, showActive]
    );

    function handleAddClick() {
        setText('');
        setTodos([...todos, createTodo(text)]);
    }


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
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={handleAddClick}>
                Add
            </button>
            <ul>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ? <s>{todo.text}</s> : todo.text}
                    </li>
                ))}
            </ul>
        </>
    );
}


