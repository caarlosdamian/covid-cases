import { useDispatch, useSelector } from 'react-redux';
import { VscListFlat } from 'react-icons/vsc';
import {
  ISidebarMenuCard,
  ISidebarMenuItem,
  State,
} from '../../../interfaces/index';
import { SidebarMenuItemView } from '../SidebarMenuItemView/SidebarMenuItemView';
import { SidebarMenuCardView } from '../SidebarMenuCardView/SidebarMenuCardView';

import './SidebarMenu.scss';
import { toggle } from '../../../redux/toggleSlice';

interface SidebarMenuProps {
  items: ISidebarMenuItem[];
  card: ISidebarMenuCard;
}

export const SidebarMenu = ({ items, card }: SidebarMenuProps) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: State) => state.toggle);

  return (
    <div
      data-testid="sidebar"
      className={`sidebar-menu ${isOpen ? 'expanded' : 'collapsed'}`}
    >
      <div className="sidebar_menu-button">
        <VscListFlat
          size="20"
          className="sidebar_menu-button-icon"
          onClick={() => dispatch(toggle())}
        />
        {isOpen ? <span className="sidebar_span">Dashboard</span> : ''}
      </div>

      <hr className="sidebar-line" />

      {items.map((item) => (
        <SidebarMenuItemView key={item.id} item={item} isOpen={isOpen} />
      ))}

      <SidebarMenuCardView card={card} isOpen={isOpen} />
    </div>
  );
};
