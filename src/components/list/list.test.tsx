import { render, screen } from '@testing-library/react';
import { List } from './list';

describe('List render correctly', () => {
  beforeAll(() => {
    render(
      <List
        obj={[
          ['Hello', 2],
          ['My full', 'Name'],
          ['Erik roberto', 'Carlos Eduardo'],
          [4, 5],
          [
            'This side of the list item should be around 50%',
            'and this other side will be 50% fully',
          ],
        ]}
        width="400px"
      />
    );
  });
  it('Renders list', () => {
    expect(screen.getByTestId('list')).toBeDefined();
  });
  it('Renders items and titles', () => {
    expect(screen.queryByText('Erik roberto')).toBeDefined();
    expect(screen.queryByText('Carlos Eduardo')).toBeDefined();
    expect(screen.queryByText(2)).toBeDefined();
  });
});
