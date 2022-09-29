import React from 'react';
import { ListItem } from '../listItems/ListItem';
import './List.scss';

interface ListProps {
  items: Array<Array<number | string>>;
  width?: string | number | undefined;
  height?: string | number | undefined;
}

export const List = ({ items, width, height }: ListProps) => (
  <ul
    className="list-container"
    style={{ width: width || '100%', height: height || 'auto' }}
    data-testid="list"
  >
    {items.map((item, index, items) => (
      <ListItem
        itemTitle={item[0]}
        itemText={item[1]}
        lastItem={index + 1 === items.length}
      />
    ))}
  </ul>
);

List.defaultProps = {
  width: undefined,
  height: undefined,
};
