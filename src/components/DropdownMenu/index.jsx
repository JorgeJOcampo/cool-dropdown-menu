import React, { useState } from 'react';
import SubMenu from 'components/SubMenu';
import { ReactComponent as Arrow } from 'assets/arrow-down.svg';
import { ReactComponent as Like } from 'assets/like.svg';
import { ReactComponent as Search } from 'assets/search.svg';
import { ReactComponent as Shop } from 'assets/shop.svg';
import { Transition } from 'react-transition-group';
import { DropdownMenu, NavItem } from './styled';

export default () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <DropdownMenu height="60px">
      <NavItem height="60px">
        <Like />
      </NavItem>
      <NavItem height="60px">
        <Search />
      </NavItem>
      <NavItem height="60px">
        <Shop />
      </NavItem>
      <NavItem height="60px">
        <Arrow onClick={() => setMenuOpen(!menuOpen)} />
        <Transition timeout={1000} in={menuOpen}>
          {(state) => <SubMenu state={state} />}
        </Transition>
      </NavItem>
    </DropdownMenu>
  );
};
