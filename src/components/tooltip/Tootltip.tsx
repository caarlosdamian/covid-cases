import React from 'react';
import './Tootltip.scss';

interface Props {
  type?: 'warn' | 'success' | 'error' | undefined;
  label?: string | undefined;
}

export const Tooltip = ({ type, label }: Props) => {
  switch (type) {
    case 'error':
      return <div className="tip red">{label || 'Error'} </div>;
    case 'warn':
      return <div className="tip warn">{label || 'Warning'} </div>;
    case 'success':
      return <div className="tip succ">{label || 'Success'} </div>;
    default:
      return <div className="tip succ">{label || 'Success'} </div>;
  }
};

Tooltip.defaultProps = {
  type: 'success',
  label: undefined,
};
