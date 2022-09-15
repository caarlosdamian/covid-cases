import { render, screen } from '@testing-library/react';
import { CardComponent } from './card';

describe('CardComponent render correctly', () => {
  beforeAll(() => {
    render(<CardComponent label="To do" value={17} />);
  });

  it('Render Card component', () => {
    expect(screen.getByTestId('card-testing')).toBeDefined();
    expect(screen.getByText(/To do/i)).toBeDefined();
  });
});
