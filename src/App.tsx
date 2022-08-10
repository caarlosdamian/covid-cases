import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login, DataGrid } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DataGrid />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
