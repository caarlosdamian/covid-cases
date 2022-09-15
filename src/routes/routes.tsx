import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from '../pages';
import { ProtectedRoute } from './protectedRoute';
import { Content } from '../components/content/Content';
import { items } from '.';
import { State } from '../interfaces';

export const Router = () => {
  const { isLogged } = useSelector((state: State) => state.login);

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
