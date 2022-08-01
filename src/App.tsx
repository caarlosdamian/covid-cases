import  { useState, useEffect } from 'react' 
import {DataGrid, GridColDef, GridRowsProp, GridToolbar, GridValueFormatterParams} from '@mui/x-data-grid'
import styled from '@mui/styled-engine-sc'
import './App.css'


function App() {
  
  function numberWithCommas(n: number){
    return n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  const [arr, setArr] = useState([]);
  
  const columns: GridColDef[] =[ 
    { field: 'date', headerName: "ID",  width: 150},
    { field: 'lastModified', headerName: "Date",  width: 150, type: 'date', valueFormatter: (params: GridValueFormatterParams<string>) =>{
      if (params.value == null){
        return '';
      }
      const valueFormatted = new Date(params.value).toString();
      const [week, month, day, year, time, extra1, extra2] = valueFormatted.split(' ');
      const valueReformatted =  week + ' ' + month + ' ' + day + ' ' + year
      return valueReformatted;
    },},
    { field: 'states', headerName: "Infected States",  width: 150, type: 'number'},

    //Positive
    { field: 'positive', headerName: "Positive",  width: 150, type: 'number' , valueFormatter:(params: GridValueFormatterParams<number>) =>{
      if (params.value == null){
        return '0';
      }
      return numberWithCommas(params.value)},},
    { field: 'positiveIncrease', headerName: "Positive Increase",  width: 150, type: 'number', valueFormatter:(params: GridValueFormatterParams<number>) =>{
      if (params.value == null){
        return '0';
      }
      return numberWithCommas(params.value)},},

    //Negative 
    { field: 'negative', headerName: "Negative",  width: 150, type: 'number', valueFormatter:(params: GridValueFormatterParams<number>) =>{
      if (params.value == null){
        return '0';
      }
      return numberWithCommas(params.value)},},
    { field: 'negativeIncrease', headerName: "Negative Increase",  width: 150, type: 'number', valueFormatter:(params: GridValueFormatterParams<number>) =>{
      if (params.value == null){
        return '0';
      }
      return numberWithCommas(params.value)},},

    //Pending
    { field: 'pending', headerName: "Pending",  width: 150, type: 'number', valueFormatter:(params: GridValueFormatterParams<number>) =>{
      if (params.value == null){
        return '0';
      }
      return numberWithCommas(params.value)},},

    //Deaths
    { field: 'death', headerName: "Deaths",  width: 150, type: 'number', valueFormatter:(params: GridValueFormatterParams<number>) =>{
      if (params.value == null){
        return '0';
      }
      return numberWithCommas(params.value)},},
    { field: 'deathIncrease', headerName: "Death Increase",  width: 150, type: 'number', valueFormatter:(params: GridValueFormatterParams<number>) =>{
      if (params.value == null){
        return '0';
      }
      return numberWithCommas(params.value)},},

    //Total 
    { field: 'totalTestResults', headerName: "Total Tests",  width: 150, type: 'number', valueFormatter:(params: GridValueFormatterParams<number>) =>{
      if (params.value == null){
        return '0';
      }
      return numberWithCommas(params.value)},},
    { field: 'totalTestResultsIncrease', headerName: "Total Increase",  width: 150, type: 'number', valueFormatter:(params: GridValueFormatterParams<number>) =>{
      if (params.value == null){
        return '0';
      }
      return numberWithCommas(params.value)},},

    //Hospitilized
    { field: 'hospitalized', headerName: "Hospitalized",  width: 150, type: 'number', valueFormatter:(params: GridValueFormatterParams<number>) =>{
      if (params.value == null){
        return '0';
      }
      return numberWithCommas(params.value)},},
    { field: 'hospitalizedIncrease', headerName: "Hospitalized Increase",  width: 170, type: 'number', valueFormatter:(params: GridValueFormatterParams<number>) =>{
      if (params.value == null){
        return '0';
      }
      return numberWithCommas(params.value)},},];
  

  const getData = async () => {
    const getter = await fetch(
      "https://api.covidtracking.com/v1/us/daily.json"
    );
    const data = await getter.json();
    setArr(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const rows: GridRowsProp = arr;

  return (
    <div className="App">
      <div className="table-container">
      <DataGrid
        className="datagrid-table"
        getRowId={(row) => row.date}
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
    </div>
  );
}

export default App
