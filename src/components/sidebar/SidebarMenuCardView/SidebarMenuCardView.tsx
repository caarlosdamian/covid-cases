import { ISidebarMenuCard } from '../../../interfaces/index';
import './SidebarMenuCardView.scss';

interface SidebarMenuCardViewProps {
  card: ISidebarMenuCard;
  isOpen: boolean;
}

export const SidebarMenuCardView = ({
  card,
  isOpen,
}: SidebarMenuCardViewProps) => (
  <div className={`sidebar_menu-card-view ${isOpen ? '' : 'collapsed'}`}>
    <img
      className={`sidebar_profile-img ${isOpen ? '' : 'collapsed'}`}
      src={card.photoUrl}
      alt="User"
    />
    {isOpen ? (
      <div className={`sidebar_profile-info ${isOpen ? '' : 'collapsed'}`}>
        <div className="sidebar_name">
          <span> {card.displayName}</span>
        </div>
      </div>
    ) : (
      ''
    )}
  </div>
);
