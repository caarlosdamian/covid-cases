/* eslint-disable no-nested-ternary */
import { GridRowsProp } from '@mui/x-data-grid';
import { columns } from '../utils/tableColumns';
import { useGetCovidDataQuery } from '../hooks/useApi';
import { Table } from './table/Table';
import { Irow } from '../interfaces';

export function DataGrid() {
  const { data, error, isLoading } = useGetCovidDataQuery('x');
  const rows: GridRowsProp = data as Irow[];

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <Table columns={columns} rows={rows} />
      ) : null}
    </div>
  );
}
