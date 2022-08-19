import { render, screen } from '@testing-library/react';
import { SidebarMenu } from './SidebarMenu';
import { card } from './ISidebarMenuCard';
import { items } from './ISiderbarMenuItem';

describe('Sidebar component render correctly', () => {
  beforeAll(() => {
    render(<SidebarMenu items={items} card={card} />);
  });

  it('Render Sidebar div', () => {
    expect(screen.getByTestId('sidebar')).toBeDefined();
  });
});
