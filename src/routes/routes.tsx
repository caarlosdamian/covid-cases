import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, DataGrid } from '../pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataGrid />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
