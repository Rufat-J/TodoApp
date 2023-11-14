import React, {useEffect, useState} from 'react';
import {getProjects} from '../api/api';

const ProjectList = ({onSelectProject}) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projects = await getProjects();
                console.log('Projects in React:', projects);
                setProjects(projects);
            } catch (error) {
                console.error('Error fetching projects in React:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <div className="selectPage">
                <h2 >Select a Project</h2>
            </div>

            <div>
                {projects.map((project) => (
                    <button key={project.id} onClick={() => onSelectProject(project.id)}>
                        {project.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
