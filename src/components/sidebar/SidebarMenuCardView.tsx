import { ISidebarMenuCard } from '../../interfaces/index';
import { classNames } from '../../utils/classes';
import './SidebarMenu.scss';

interface SidebarMenuCardViewProps {
  card: ISidebarMenuCard;
  isOpen: boolean;
}

export function SidebarMenuCardView({
  card,
  isOpen,
}: SidebarMenuCardViewProps) {
  return (
    <div className="sidebar_menu-card-view">
      <img
        className="sidebar_profile-img"
        src={card.photoUrl}
        alt="User"
        width="100%"
      />
      <div
        className={classNames(
          'sidebar_profile-info',
          isOpen ? '' : 'collapsed'
        )}
      >
        <div className="sidebar_name">
          <span> {card.displayName}</span>
        </div>
      </div>
    </div>
  );
}
