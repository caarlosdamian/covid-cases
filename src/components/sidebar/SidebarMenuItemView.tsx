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
    <div className="SidebarMenuItemView">
      <a href={item.url}>
        <div className={classNames('ItemContent', isOpen ? '' : 'collapsed')}>
          <div className="icon">
            <item.icon size="20" />
          </div>
          <span className="label"> {item.label}</span>
        </div>
      </a>
    </div>
  );
}
