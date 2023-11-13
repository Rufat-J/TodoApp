const API_URL = 'https://energymachines.cloud/api/v1';
const API_Authorization = 'RuDx0YXQHIrt4tklZLxgd1YV7isBiiUCTRL6vSBSAUis8234xSSn2LOQfwZtmYbDf9T';

export const getProjects = async () => {
    try {
        const response = await fetch(`${API_URL}/projects/list`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${API_Authorization}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Projects Data:', data);

        return data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};

export const getPagesForProject = async (projectId) => {
    try {
        const response = await fetch(`${API_URL}/${projectId}/page/tree`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${API_Authorization}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.children;
    } catch (error) {
        console.error('Error fetching pages for project:', error);
        throw error;
    }
};