import './listItem.scss';

interface Props {
  title: string | number;
  item?: string | number;
  last?: boolean;
}

export const ListItem = ({ title, item, last }: Props) => (
  <div
    className="list-item"
    style={{ borderBlockEnd: last ? 'none' : '2px solid #DFE0EB' }}
  >
    <div className="item-title">{title}</div>
    <div className="item-extras">
      <div className="single-extra">{item || 'Nan'}</div>
    </div>
  </div>
);

ListItem.defaultProps = {
  item: 'Nan',
  last: false,
};
