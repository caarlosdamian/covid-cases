/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages';
import { DataGrid } from '../components/DataGrid';
import { ProtectedRoute } from './protectedRoute';

export function Router() {
  const userLog = useState(false);
  return (
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
  );
}
