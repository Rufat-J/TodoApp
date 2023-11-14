import React, { useState } from 'react';

const TodoList = ({ projectId, todos, setTodosByPage }) => {
    const [newTodo, setNewTodo] = useState({ title: '', text: '' });

    const handleAddTodo = () => {
        if (newTodo.title.length > 0 && newTodo.text.length > 0) {
            const updatedTodos = [...todos, { id: todos.length + 1, title: newTodo.title, text: newTodo.text, done: false }];
            setTodosByPage((prevTodosByPage) => ({
                ...prevTodosByPage,
                [projectId]: updatedTodos,
            }));

            setNewTodo({ title: '', text: '' });
        }
    };

    const handleRemoveTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodosByPage((prevTodosByPage) => ({
            ...prevTodosByPage,
            [projectId]: updatedTodos,
        }));
    };

    const handleToggleDone = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        setTodosByPage((prevTodosByPage) => ({
            ...prevTodosByPage,
            [projectId]: updatedTodos,
        }));
    };

    return (

        <div className= "container">
            <div className= "todo">
                <input
                    type="text"
                    value={newTodo.title}
                    onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
                    placeholder="Title"
                />
                <input
                    type="text"
                    value={newTodo.text}
                    onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
                    placeholder="Task"
                />
            </div>
            <div>
                <button className="buttonAddTask" onClick={handleAddTodo}>Add Task</button>
                <h2>Todo List for {projectId}</h2>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={`todo-card ${todo.done ? 'done' : ''}`}>
                        {todo.title && <div className="todo-title"> {todo.title}</div>}
                        <div className="todo-task"> {todo.text}</div>
                        <button className="buttonDone" onClick={() => handleToggleDone(todo.id)}>
                            {todo.done ? 'Undone' : 'Done'}
                        </button>
                        <button className="buttonRemove" onClick={() => handleRemoveTodo(todo.id)}>
                            Remove
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
