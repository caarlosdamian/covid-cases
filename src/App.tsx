import  { useState, useEffect } from 'react' 
import {DataGrid, GridColDef, GridRowsProp, GridToolbar} from '@mui/x-data-grid'
import styled from '@mui/styled-engine-sc'
import './App.css'


function App() {
  

  const [arr, setArr] = useState([]);
  
  const columns: GridColDef[] =[ 
    { field: 'date', headerName: "ID",  width: 150},
    { field: 'positive', headerName: "Positive",  width: 150}, 
    { field: 'negative', headerName: "Negative",  width: 150},
    { field: 'pending', headerName: "Pending",  width: 150},
    { field: 'death', headerName: "Deaths",  width: 150}, 
    { field: 'totalTestResults', headerName: "Total",  width: 150}];


 

  const getData = async () =>{
    const getter = await fetch("https://api.covidtracking.com/v1/us/daily.json");
    const data = await getter.json();
    setArr(data);
  }


  useEffect(() => {
    getData();
  }, [])

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