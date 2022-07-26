import { GridColDef, GridValueFormatterParams } from '@mui/x-data-grid';
import { numberWithCommas } from './functions';

export const columns: GridColDef[] = [
  { field: 'date', headerName: 'ID', width: 150 },
  {
    field: 'lastModified',
    headerName: 'Date',
    width: 150,
    type: 'date',
    valueFormatter: (params: GridValueFormatterParams<string>) => {
      if (params.value == null) {
        return '';
      }
      const valueFormatted = new Date(params.value).toString();
      const [week, month, day, year] = valueFormatted.split(' ');
      const valueReformatted = `${week} ${month} ${day} ${year}`;
      return valueReformatted;
    },
  },
  {
    field: 'states',
    headerName: 'Infected States',
    width: 150,
    type: 'number',
  },

  // Positive
  {
    field: 'positive',
    headerName: 'Positive',
    width: 150,
    type: 'number',
    valueFormatter: (params: GridValueFormatterParams<number>) => {
      if (params.value == null) {
        return '0';
      }
      return numberWithCommas(params.value);
    },
  },
  {
    field: 'positiveIncrease',
    headerName: 'Positive Increase',
    width: 150,
    type: 'number',
    valueFormatter: (params: GridValueFormatterParams<number>) => {
      if (params.value == null) {
        return '0';
      }
      return numberWithCommas(params.value);
    },
  },

  // Negative
  {
    field: 'negative',
    headerName: 'Negative',
    width: 150,
    type: 'number',
    valueFormatter: (params: GridValueFormatterParams<number>) => {
      if (params.value == null) {
        return '0';
      }
      return numberWithCommas(params.value);
    },
  },
  {
    field: 'negativeIncrease',
    headerName: 'Negative Increase',
    width: 150,
    type: 'number',
    valueFormatter: (params: GridValueFormatterParams<number>) => {
      if (params.value == null) {
        return '0';
      }
      return numberWithCommas(params.value);
    },
  },

  // Pending
  {
    field: 'pending',
    headerName: 'Pending',
    width: 150,
    type: 'number',
    valueFormatter: (params: GridValueFormatterParams<number>) => {
      if (params.value == null) {
        return '0';
      }
      return numberWithCommas(params.value);
    },
  },

  // Deaths
  {
    field: 'death',
    headerName: 'Deaths',
    width: 150,
    type: 'number',
    valueFormatter: (params: GridValueFormatterParams<number>) => {
      if (params.value == null) {
        return '0';
      }
      return numberWithCommas(params.value);
    },
  },
  {
    field: 'deathIncrease',
    headerName: 'Death Increase',
    width: 150,
    type: 'number',
    valueFormatter: (params: GridValueFormatterParams<number>) => {
      if (params.value == null) {
        return '0';
      }
      return numberWithCommas(params.value);
    },
  },

  // Total
  {
    field: 'totalTestResults',
    headerName: 'Total Tests',
    width: 150,
    type: 'number',
    valueFormatter: (params: GridValueFormatterParams<number>) => {
      if (params.value == null) {
        return '0';
      }
      return numberWithCommas(params.value);
    },
  },
  {
    field: 'totalTestResultsIncrease',
    headerName: 'Total Increase',
    width: 150,
    type: 'number',
    valueFormatter: (params: GridValueFormatterParams<number>) => {
      if (params.value == null) {
        return '0';
      }
      return numberWithCommas(params.value);
    },
  },

  // Hospitilized
  {
    field: 'hospitalized',
    headerName: 'Hospitalized',
    width: 150,
    type: 'number',
    valueFormatter: (params: GridValueFormatterParams<number>) => {
      if (params.value == null) {
        return '0';
      }
      return numberWithCommas(params.value);
    },
  },
];
