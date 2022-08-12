/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages';
import { DataGrid } from '../components/DataGrid';
import { loginContext } from '../hooks/loginContext';

export function Router() {
  const [userLog, setUserLog] = useState(true);
  return (
    <loginContext.Provider value={{ userLog, setUserLog }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DataGrid />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </loginContext.Provider>
  );
}
