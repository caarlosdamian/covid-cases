import './ListItem.scss';

interface ListItemProps {
  itemTitle: string | number;
  itemText?: string | number;
  lastItem?: boolean;
}

export const ListItem = ({ itemTitle, itemText, lastItem }: ListItemProps) => (
  <li
    className="list-item"
    style={{ borderBlockEnd: lastItem ? 'none' : '2px solid #DFE0EB' }}
  >
    <div className="item-title">{itemTitle}</div>
    <div className="item-extras">{itemText}</div>
  </li>
);

ListItem.defaultProps = {
  itemText: 'Nan',
  lastItem: false,
};
