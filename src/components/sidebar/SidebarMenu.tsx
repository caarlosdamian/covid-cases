import { useState } from 'react';
import { VscListFlat, VscSearch } from 'react-icons/vsc';
import { ISidebarMenuCard, ISidebarMenuItem } from '../../interfaces/index';
import { SidebarMenuItemView } from './SidebarMenuItemView';
import { SidebarMenuCardView } from './SidebarMenuCardView';
import { classNames } from '../../utils/classes';

import './SidebarMenu.scss';

interface SidebarMenuProps {
  items: ISidebarMenuItem[];
  card: ISidebarMenuCard;
}

export function SidebarMenu({ items, card }: SidebarMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames('sidebar-menu', isOpen ? 'expanded' : 'collapsed')}
    >
      <div className="sidebar_menu-button">
        <button
          type="button"
          className="hamburger-button"
          onClick={handleToggle}
        >
          <VscListFlat />
        </button>
      </div>

      {isOpen ? (
        <div className="search-content-expanded">
          <div className="search-input">
            <VscSearch size="20" className="sidebar_search-icon" />
          </div>
          <input placeholder="Search" className="sidebar_input-search" />
        </div>
      ) : (
        <div className="search-content-collapsed">
          <div className="sidebar_search-input">
            <VscSearch size="20" />
          </div>
        </div>
      )}

      {items.map((item) => (
        <SidebarMenuItemView key={item.id} item={item} isOpen={isOpen} />
      ))}

      <SidebarMenuCardView card={card} isOpen={isOpen} />
    </div>
  );
}
