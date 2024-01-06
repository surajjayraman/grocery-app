import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

import Input from "./Input";
import Button from "./Button";

function InputRow({ addTodoItem }) {
    const [input, setInput] = useState("");

    function addTodo() {
        addTodoItem(input);
        setInput("");
    }

    return (
        <form>
            <Input value={input} onChange={(e) => setInput(e.target.value)} />
            <Button onClick={addTodo} color="primary" variant="outlined">
                Add Item
            </Button>
        </form>
    );
}

export function TodoList() {
    const [todos, setTodos] = useState(["Improve JS skills 💪", "Pet dog 🐶"]);

    function addTodoItem(todo) {
        todo.length && setTodos([...todos, todo]);
    }

    function removeTodoItem(i) {
        todos.splice(i, 1);
        setTodos([...todos]);
    }

    return (
        <div className="todo-list">
            <h1>Todo Items</h1>
            <InputRow addTodoItem={addTodoItem} />
            <List>
                {todos.map((todo, i) => (
                    <ListItem key={`${todo}-${i}`}>
                        <ListItemText>{todo}</ListItemText>
                        <Button color="secondary" onClick={() => removeTodoItem(i)}>
                            Remove
                        </Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
