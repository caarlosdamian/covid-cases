/* eslint-disable no-nested-ternary */
import { GridRowsProp } from '@mui/x-data-grid';
import { columns } from '../utils/tableColumns';
import { useGetCovidDataQuery } from '../hooks/useApi';
import { Table } from './table/Table';
import { Irow } from '../interfaces';
import { SidebarPage } from './sidebar/SidebarPage';
import './sidebar/SidebarMenu.scss';

export const DataGrid = () => {
  const { data, error, isLoading } = useGetCovidDataQuery('x');
  const rows: GridRowsProp = data as Irow[];

  return (
    <div className="datagrid-container">
      <SidebarPage />
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <Table columns={columns} rows={rows} />
      ) : null}
    </div>
  );
};
