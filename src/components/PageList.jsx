import React, { useEffect, useState } from 'react';
import { getPagesForProject } from '../api/api';

const PageList = ({ projectId, onSelectPage }) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const fetchPagesForProject = async () => {
            if (projectId) {
                try {
                    const pagesData = await getPagesForProject(projectId);
                    console.log('Pages for Project in React:', pagesData);
                    setPages(pagesData);
                } catch (error) {
                    console.error('Error fetching pages for project:', error);
                }
            }
        };

        fetchPagesForProject();
    }, [projectId]);

    return (
        <div>
            <h2>List of Pages:</h2>
            <ul>
                {pages.map((page) => (
                    <li key={page.name} onClick={() => onSelectPage(page.name)}>
                        {page.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PageList;
