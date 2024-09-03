import React from 'react';
import axios from 'axios';

const ExportCSV = () => {
    const handleExport = async () => {
        try {
            const response = await axios.get('http://localhost:5000/exportUser', {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'users.csv');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Failed to export file');
        }
    };

    return (
        <div>
            <h2>Export CSV</h2>
            <button onClick={handleExport}>Download CSV</button>
        </div>
    );
};

export default ExportCSV;
