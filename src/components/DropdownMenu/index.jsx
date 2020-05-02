import React from 'react';
import { ReactComponent as Arrow } from 'assets/arrow-down.svg';
import { ReactComponent as Like } from 'assets/like.svg';
import { ReactComponent as Search } from 'assets/search.svg';
import { ReactComponent as Shop } from 'assets/shop.svg';
import { DropdownMenu, NavItem } from './styled';

export default () => {
  return (
    <DropdownMenu>
      <NavItem>
        <Like />
      </NavItem>
      <NavItem>
        <Search />
      </NavItem>
      <NavItem>
        <Shop />
      </NavItem>
      <NavItem>
        <Arrow />
      </NavItem>
    </DropdownMenu>
  );
};
