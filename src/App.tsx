import { GridRowsProp } from '@mui/x-data-grid';
import { columns } from './utils/tableColumns';
import { useApi } from './hooks/useApi';
import './App.css';
import { Table } from './components/table/Table';

function App() {
  const { fetchData } = useApi();

  const rows: GridRowsProp = fetchData;

  return (
    <div className="App">
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default App;
