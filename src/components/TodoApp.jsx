import React, { useState } from 'react';
import ProjectList from './ProjectList';
import PageList from './PageList';
import TodoList from './TodoList';
import "../styles/TodoApp.css"

const TodoApp = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedPage, setSelectedPage] = useState(null);

    const handleProjectSelect = (projectId) => {
        setSelectedProject(projectId);
        setSelectedPage(null); // Reset selected page when changing the project
    };

    const handlePageSelect = (pageId) => {
        setSelectedPage(pageId);
    };

    return (
        <div className="container">
            <ProjectList onSelectProject={handleProjectSelect} />
            {selectedProject && <PageList projectId={selectedProject} onSelectPage={handlePageSelect} />}
            {selectedPage && <TodoList projectId={selectedPage} />}
        </div>
    );
};

export default TodoApp;
