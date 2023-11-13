import {useEffect, useState} from "react";
import {getProjects} from "../api/api";

const TodoApp = () => {
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
        <div className="container">
            <h2>List of Projects:</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp;