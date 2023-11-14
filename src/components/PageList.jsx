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
        <div className="selectPage">
            <h2>Select a Page:</h2>
            <ul>
                {pages.map((page) => (
                    <button key={page.name} onClick={() => onSelectPage(page.name)}>
                        {page.name}
                    </button>
                ))}
            </ul>
        </div>
    );
};

export default PageList;
