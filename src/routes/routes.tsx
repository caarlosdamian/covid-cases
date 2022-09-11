import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from '../pages';
import { ProtectedRoute } from './protectedRoute';
import { Content } from '../components/content/Content';
import { items } from '.';

export const Router = () => {
  interface IState {
    loginSlice: { user: { token: string; isLogged: boolean } };
  }

  const { isLogged } = useSelector((state: IState) => state.loginSlice.user);
  return (
    <BrowserRouter>
      <Routes>
        {items.map((item) => (
          <Route
            path={item.url}
            element={
              <ProtectedRoute user={isLogged} redirectPath="/login">
                <Content>{item.component}</Content>
              </ProtectedRoute>
            }
          />
        ))}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
