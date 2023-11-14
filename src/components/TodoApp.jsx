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
                <TodoList projectId={selectedPage} todos={todosByPage[selectedPage] || []} setTodosByPage={setTodosByPage} />
            )}
        </div>
    );
};

export default TodoApp;
