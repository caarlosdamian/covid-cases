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
    <div className="SidebarMenuCardView">
      <img className="profile" src={card.photoUrl} alt="User" width="100%" />
      <div className={classNames('profileInfo', isOpen ? '' : 'collapsed')}>
        <div className="name">
          {' '}
          <span> {card.displayName}</span>
        </div>
      </div>
    </div>
  );
}
