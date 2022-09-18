import { render, screen } from '@testing-library/react';
import { Tooltip } from './Tootltip';

describe('Tooltips render correctly', () => {
  beforeAll(() => {
    render(
      <div>
        <Tooltip type="warning" />
        <Tooltip type="error" />
        <Tooltip label="custom" />
      </div>
    );
  });

  it('Renders all different types of tooltips', () => {
    expect(screen.getByTestId('success')).toBeDefined();
    expect(screen.getByTestId('warning')).toBeDefined();
    expect(screen.getByTestId('error')).toBeDefined();
  });

  it('Renders custom tooltips', () => {
    expect(screen.queryByText('custom')).toBeDefined();
  });
});
