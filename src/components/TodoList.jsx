import React, { useState } from 'react';

const TodoList = ({ projectId, todos, onAddTodo, onRemoveTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        onAddTodo(newTodo);
        setNewTodo('');
    };

    const handleRemoveTodo = (id) => {
        onRemoveTodo(id);
    };

    return (
        <div>
            <h2>Todo List for Page {projectId}:</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button className="buttonRemove" onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter a new todo"
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </div>
    );
};

export default TodoList;
