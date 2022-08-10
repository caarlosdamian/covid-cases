import { GridRowsProp } from '@mui/x-data-grid';
import { columns } from '../utils/tableColumns';
import { useApi } from '../hooks/useApi';
import { Table } from './table/Table';

export function DataGrid() {
  const { fetchData } = useApi();
  const rows: GridRowsProp = fetchData;

  return <Table columns={columns} rows={rows} />;
}
