import { ISidebarMenuItem } from '../../interfaces/index';
import { classNames } from '../../utils/classes';
import './SidebarMenu.scss';

interface SidebarMenuItemViewProps {
  item: ISidebarMenuItem;
  isOpen: boolean;
}

export function SidebarMenuItemView({
  item,
  isOpen,
}: SidebarMenuItemViewProps) {
  return (
    <div className="sidebar_menu-item-view">
      <a href={item.url}>
        <div className={classNames('item-content', isOpen ? '' : 'collapsed')}>
          <div className="icon">
            <item.icon size="20" />
          </div>
          <span className="sidebar_label"> {item.label}</span>
        </div>
      </a>
    </div>
  );
}
