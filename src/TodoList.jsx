import List from '@mui/material/List';
import { useState } from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList() {
    const initialTodos = [
        { id: 1, text: "Walk the Dog", completed: false },
        { id: 3, text: "Walk the Cat", completed: false },
        { id: 14, text: "Walk the Fish", completed: true },
        { id: 2, text: "Walk the Lion", completed: false }
    ]

    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo = id => {
        setTodos(currTodos => (
            currTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo
                }
            })))
    }
    const removeTodo = id => {
        setTodos(currTodos => (
            currTodos.filter(todo => todo.id !== id)
        ))
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <ToDoItem todo={todo} key={todo.id}
                    removeTodo={() => removeTodo(todo.id)}
                    toggle={() => toggleTodo(todo.id)}
                />
            ))}
        </List>
    );
}
