import React from 'react';
import { useTranslation } from 'react-i18next';
import './Tootltip.scss';

interface Props {
  type?: 'warning' | 'success' | 'error';
  label?: string | undefined;
}

export const Tooltip = ({ type, label }: Props) => {
  const { t } = useTranslation('common');
  return (
    <div data-testid={type} className={`tip ${type}`}>
      {label || t(`tooltip.${type}`)}
    </div>
  );
};

Tooltip.defaultProps = {
  type: 'success',
  label: undefined,
};
