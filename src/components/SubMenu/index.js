import React from 'react';
import { SubMenu, Item, Line } from './styled';

export default ({ state }) => {
  return (
    <SubMenu state={state}>
      <Item>Account</Item>
      <Item>Settings</Item>
      <Line />
      <Item>Exit</Item>
    </SubMenu>
  );
};
