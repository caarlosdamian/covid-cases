import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from '../pages';
import { DataGrid } from '../components/DataGrid';
import { ProtectedRoute } from './protectedRoute';

export function Router() {
  interface IState {
    loginSlice: { value: boolean };
  }

  const loginState = useSelector((state: IState) => state.loginSlice);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={loginState.value} redirectPath="/login">
              <DataGrid />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
