import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Irow } from '../../interfaces';
import './Table.scss';

interface ITable {
  rows: readonly Irow[];
  columns: GridColDef[];
}

export const Table = ({ rows, columns }: ITable) => (
  <div data-testid="table" className="table-container">
    <DataGrid
      className="datagrid-table"
      getRowId={(row: Irow) => row.date}
      rows={rows}
      columns={columns}
      rowsPerPageOptions={[10, 25, 50, 100]}
      initialState={{
        columns: {
          columnVisibilityModel: {
            date: false,
            deathIncrease: false,
            positiveIncrease: false,
            negativeIncrease: false,
            hospitalizedIncrease: false,
          },
        },
        pagination: {
          pageSize: 15,
        },
      }}
      components={{ Toolbar: GridToolbar }}
    />
  </div>
);
