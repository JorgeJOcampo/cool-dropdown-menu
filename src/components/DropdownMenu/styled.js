import styled from 'styled-components';

const DropdownMenu = styled.div`
  background-color: #252d38;
  color: ${({ theme }) => theme.fontColor};
  height: ${({ height }) => height || '60px'};
  display: flex;
  justify-content: flex-end;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  svg {
    height: calc(60px * 0.5);
    width: calc(60px * 0.5);
    g > path {
      fill: white !important;
    }
  }
  :hover {
    svg > g > path {
      fill: ${({ theme }) => theme.accent} !important;
    }
  }
`;

export { DropdownMenu, NavItem };
