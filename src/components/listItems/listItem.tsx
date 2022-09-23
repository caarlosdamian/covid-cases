import './listItem.scss';

interface Props {
  title: string | number;
  items?: Array<string | number> | string | number;
}

export const ListItem = ({ title, items }: Props) => (
  <div className="listitem">
    <div className="title">{title}</div>
    <div className="items">
      {typeof items === 'object' ? (
        items.map((item) => <div className="item">{item}</div>)
      ) : (
        <div className="item">{items || 'Nan'}</div>
      )}
    </div>
  </div>
);

ListItem.defaultProps = {
  items: 'Nan',
};
