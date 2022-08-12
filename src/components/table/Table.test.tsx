/* eslint-disable */

import { fireEvent, render, screen } from '@testing-library/react';
import { columns } from '../../utils/tableColumns';
import { mockRows } from '../../utils/MockData';
import { Table } from './Table';

describe('Components Render Correctly', () => {
  beforeAll(() => {
    render(<Table rows={mockRows} columns={columns} />);
  });
  it('Renders Table without crashing', () => {
    expect(screen.getByTestId('table')).toBeDefined();
  });
  // Date should be shown while ID should not
  it('Renders columns Correctly', () => {
    expect(screen.queryByText('Date')).toBeDefined();
    expect(screen.queryByText('ID')).toBeNull();
  });
});
