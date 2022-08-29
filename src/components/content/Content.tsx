/* eslint-disable */

import React from 'react';
import { Card, CardContent, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { State } from '../../interfaces';
import { SidebarPage } from '../sidebar/SidebarPage';
import './Content.scss';

interface Props {
  children?: JSX.Element[] | JSX.Element;
}
export const Content = ({ children = <CircularProgress /> }: Props) => {
  const { isOpen } = useSelector((state: State) => state.toggleSlice);
  return (
    <div className="content__container">
      <SidebarPage />
      <div className="card__padding">
        <Card className={`card__container ${isOpen ? '' : 'collapse'}`}>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </div>
  );
};
