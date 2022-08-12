/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages';
import { DataGrid } from '../components/DataGrid';
import { loginContext } from '../hooks/loginContext';
import { ProtectedRoute } from './protectedRoute';

export function Router() {
  const [userLog, setUserLog] = useState(false);
  return (
    <loginContext.Provider value={{ userLog, setUserLog }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute user={userLog} redirectPath="/login">
                <DataGrid />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </loginContext.Provider>
  );
}
