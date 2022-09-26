import './listItem.scss';

interface Props {
  title: string | number;
  items?: Array<string | number> | string | number;
}

export const ListItem = ({ title, items }: Props) => (
  <div className="list-item">
    <div className="item-title">{title}</div>
    <div className="item-extras">
      {typeof items === 'object' ? (
        items.map((item) => <div className="single-extra">{item}</div>)
      ) : (
        <div className="single-extra">{items || 'Nan'}</div>
      )}
    </div>
  </div>
);

ListItem.defaultProps = {
  items: 'Nan',
};
