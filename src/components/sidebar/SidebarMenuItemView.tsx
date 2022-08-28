import { Link } from 'react-router-dom';
import { ISidebarMenuItem } from '../../interfaces/index';
import './SidebarMenu.scss';

interface SidebarMenuItemViewProps {
  item: ISidebarMenuItem;
  isOpen: boolean;
}

export const SidebarMenuItemView = ({
  item,
  isOpen,
}: SidebarMenuItemViewProps) => (
  <div className="sidebar_menu-item-view">
    <Link to={item.url}>
      <div className={`item-content ${isOpen ? '' : 'collapsed'}`}>
        <div className="icon">
          <item.icon size="20" />
        </div>
        <span className="sidebar_label"> {item.label}</span>
      </div>
    </Link>
  </div>
);
