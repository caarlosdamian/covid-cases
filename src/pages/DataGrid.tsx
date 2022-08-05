import { GridRowsProp } from '@mui/x-data-grid';
import { columns } from '../utils/tableColumns';
import { useApi } from '../hooks/useApi';
import { Table } from '../components/table/Table';

export function DataGrid() {
  const { fetchData } = useApi();

  const rows: GridRowsProp = fetchData;

  return (
    <div>
      <Table data-testid="table" columns={columns} rows={rows} />
    </div>
  );
}
