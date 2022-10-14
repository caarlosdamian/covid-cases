/* eslint-disable no-nested-ternary */
import { GridRowsProp } from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@mui/material';
import { columns } from '../../utils/tableColumns';
import { useGetCovidDataQuery } from '../../hooks/useApi';
import { Table } from '../../components/table/Table';
import { Irow } from '../../interfaces';

export const DataGrid = () => {
  const { data, error, isLoading } = useGetCovidDataQuery();
  const rows: GridRowsProp = data as Irow[];

  const { t } = useTranslation('common');

  return (
    <div>
      {error ? (
        <span>{t('pages.datagrid.error')}</span>
      ) : isLoading ? (
        <CircularProgress />
      ) : data ? (
        <Table columns={columns} rows={rows} />
      ) : null}
    </div>
  );
};
