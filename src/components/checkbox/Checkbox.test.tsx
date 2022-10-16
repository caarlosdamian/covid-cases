import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Basic test of Checkbox component', () => {
  beforeAll(() => {
    render(<Checkbox labelCheckbox="Finish ticket update" />);
  });

  it('Render correctly ', () => {
    expect(screen.getByTestId('checkbox-testing')).toBeDefined();
    expect(screen.getByText(/Finish ticket update/i)).toBeDefined();
  });
});
