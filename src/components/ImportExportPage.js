import React from 'react';
import ImportCSV from '../components/ImportCSV';
import ExportCSV from '../components/ExportCSV';

const ImportExportPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Import/Export CSV</h1>
      <ImportCSV />
      <ExportCSV />
    </div>
  );
};

export default ImportExportPage;
