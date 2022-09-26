import React from 'react';
import { ListItem } from '../listItems/listItem';
import './list.scss';

interface Prop {
  obj: Array<Array<number | string>>;
  width?: string | number | undefined;
  height?: string | number | undefined;
}

export const List = ({ obj, width, height }: Prop) => (
  <div
    className="list-container"
    style={{ width: width || '100%', height: height || 'auto' }}
  >
    {obj.map((item) => (
      <ListItem title={item[0]} items={item.slice(1)} />
    ))}
  </div>
);

List.defaultProps = {
  width: undefined,
  height: undefined,
};
