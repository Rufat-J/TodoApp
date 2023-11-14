import React, { useState } from 'react';
import ProjectList from './ProjectList';
import PageList from './PageList';
import TodoList from './TodoList';
import "../styles/TodoApp.css"

const TodoApp = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedPage, setSelectedPage] = useState(null);
    const [todosByPage, setTodosByPage] = useState({});
    const [isCreatingTodo, setIsCreatingTodo] = useState(false);

    const handleProjectSelect = (projectId) => {
        setSelectedProject(projectId);
        setSelectedPage(null);
        setIsCreatingTodo(false);
    };

    const handlePageSelect = (pageId) => {
        setSelectedPage(pageId);
    };

    const handleCreateTodoClick = () => {
        setIsCreatingTodo(true);
    };

    const handleAddTodo = (text) => {
        if (selectedPage && text.trim() !== '') {
            const pageTodos = todosByPage[selectedPage] || [];
            const newTodo = { id: pageTodos.length + 1, text };
            setTodosByPage({
                ...todosByPage,
                [selectedPage]: [...pageTodos, newTodo],
            });
            setIsCreatingTodo(false);
        }
    };

    const handleRemoveTodo = (pageId, todoId) => {
        const pageTodos = todosByPage[pageId] || [];
        const updatedTodos = pageTodos.filter((todo) => todo.id !== todoId);
        setTodosByPage({
            ...todosByPage,
            [pageId]: updatedTodos,
        });
    };

    return (
        <div className="container">
            {isCreatingTodo ? (
                selectedProject ? (
                    <PageList projectId={selectedProject} onSelectPage={handlePageSelect} />
                ) : (
                    <ProjectList onSelectProject={handleProjectSelect} />
                )
            ) : (
                selectedProject ? null : (
                    <button className="createButton" onClick={() => handleCreateTodoClick()}>Create Todo</button>
                )
            )}
            {selectedProject && !isCreatingTodo && <PageList projectId={selectedProject} onSelectPage={handlePageSelect} />}
            {selectedPage && !isCreatingTodo && (
                <TodoList projectId={selectedPage} todos={todosByPage[selectedPage] || []} onAddTodo={handleAddTodo} onRemoveTodo={(id) => handleRemoveTodo(selectedPage, id)} />
            )}
        </div>
    );
};

export default TodoApp;
