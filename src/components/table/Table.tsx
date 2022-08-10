import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Irow } from '../../interfaces';

interface ITable {
  rows: readonly Irow[];
  columns: GridColDef[];
}

export function Table({ rows, columns }: ITable) {
  return (
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
            pageSize: 25,
          },
        }}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
}
