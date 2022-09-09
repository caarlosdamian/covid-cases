import React from 'react';
import { CardComponent } from '../../components/card/card';
import './overview.scss';

export const Overview = () => (
  <div className="overview-container">
    <CardComponent label="Unresolved" value={60} />
    <CardComponent label="Overdue" value={16} />
    <CardComponent label="Open" value={43} />
    <CardComponent label="On hold" value={64} />
  </div>
);
