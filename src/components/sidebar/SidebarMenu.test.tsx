import { render, screen } from '@testing-library/react';
import { SidebarMenu } from './SidebarMenu';
import { card } from '../../utils/ISidebarMenuCard';
import { items } from '../../utils/ISiderbarMenuItem';

describe('Sidebar component render correctly', () => {
  beforeAll(() => {
    render(<SidebarMenu items={items} card={card} />);
  });

  it('Render Sidebar div', () => {
    expect(screen.getByTestId('sidebar')).toBeDefined();
  });
});
