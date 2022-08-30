/* eslint-disable */
import { GridRowsProp } from '@mui/x-data-grid';
import { columns } from '../../utils/tableColumns';
import { useGetCovidDataQuery } from '../../hooks/useApi';
import { Table } from '../../components/table/Table';
import { Irow } from '../../interfaces';
import { CircularProgress } from '@mui/material';

export const DataGrid = () => {
  const { data, error, isLoading } = useGetCovidDataQuery();
  const rows: GridRowsProp = data as Irow[];

  return (
    <>
      {error ? (
        <span>Oh no, there was an error</span>
      ) : isLoading ? (
        <CircularProgress />
      ) : data ? (
        <Table columns={columns} rows={rows} />
      ) : null}
    </>
  );
};
