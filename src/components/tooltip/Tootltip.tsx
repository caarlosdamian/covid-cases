import React from 'react';
import './Tootltip.scss';

interface Props {
  type?: 'warning' | 'success' | 'error' | undefined;
  label?: string | undefined;
}

export const Tooltip = ({ type, label }: Props) => (
  <div data-testid={type} className={`tip ${type}`}>
    {' '}
    {label || type}{' '}
  </div>
);

Tooltip.defaultProps = {
  type: 'success',
  label: undefined,
};
