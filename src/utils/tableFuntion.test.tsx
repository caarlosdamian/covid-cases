/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { numberWithCommas } from './functions';
import { columns } from './tableColumns';
import { DataGrid } from '../pages/DataGrid';

describe('Funtions working', () => {
  it('Should return the proper separation of numbers in a string', () => {
    expect(numberWithCommas(1000)).toBe('1,000');
  });

  it('Should return the proper separation of string numbers as a new string', () => {
    expect(numberWithCommas('1000')).toBe('1,000');
  });
});

// Each should be re-snapshotted if changed.
describe('All Snapshots Match', () => {
  it("Column's snapshot match", () => {
    expect(columns).toMatchSnapshot();
  });
});

// Tests around the DataGrid
describe('Components Render Correctly', () => {
  beforeEach(() => {
    render(<DataGrid />);
  });
  it('Renders Table without crashing', () => {
    expect(screen.getByTestId('table')).toBeDefined();
  });
  // Date should be shown while ID should not
  it('Renders columns Correctly', () => {
    expect(screen.getByText('Date')).toBeDefined();
    expect(screen.queryByText('ID')).toBeNull();
  });
  // ID can be turned on and off by the Columns
  it('Shows hidden Columns', async () => {
    fireEvent.click(screen.getByText('Columns'));
    fireEvent.click(screen.getByText('ID'));
    fireEvent.click(screen.getByText('Columns'));
    expect(await screen.findAllByText('ID')).toBeDefined();
  });
});
