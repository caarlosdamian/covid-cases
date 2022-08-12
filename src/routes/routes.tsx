import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages';
import { DataGrid } from '../components/DataGrid';
import { ReduxTest } from '../redux/redux';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataGrid />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<ReduxTest />} />
      </Routes>
    </BrowserRouter>
  );
}
