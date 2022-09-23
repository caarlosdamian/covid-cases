import React from 'react';
import { ListItem } from '../listItems/listItem';

interface Prop {
  obj: Array<Array<number | string>>;
}

export const List = ({ obj }: Prop) => (
  <div className="list-container">
    {obj.map((item) => (
      <ListItem title={item[0]} items={item.slice(1)} />
    ))}
  </div>
);
