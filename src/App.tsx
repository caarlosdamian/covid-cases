import  { useState } from 'react'
import './App.css'
import axios from 'axios'  
import styled from '@mui/styled-engine-sc'
import {DataGrid, GridColDef, GridRowsProp, GridToolbar} from '@mui/x-data-grid'

function App() {
  //Hard coding for testing

  const [arr, setArr] = useState([]);
  
  const columns: GridColDef[] =[ 
    { field: 'date', headerName: "ID",  width: 150},
    { field: 'positive', headerName: "Positive",  width: 150}, 
    { field: 'negative', headerName: "Negative",  width: 150},
    { field: 'pending', headerName: "Pending",  width: 150},
    { field: 'death', headerName: "Deaths",  width: 150}, 
    { field: 'totalTestResults', headerName: "Total",  width: 150}];


  //Get data for table

  const getData = async () =>{
    const getter = await fetch("https://api.covidtracking.com/v1/us/daily.json");
    const data = await getter.json();
    console.log("Data: ", data)
    setArr(data);
    return(data);
  }
  
  
  console.log("Get data:", getData());
  
  const rows: GridRowsProp =  arr;
  return (
    <div className="App">
      <DataGrid
      getRowId={(row) => row.date}
         rows={rows}
         columns={columns}
         components={{Toolbar: GridToolbar,}}
      />
    </div>
  )
}

export default App
