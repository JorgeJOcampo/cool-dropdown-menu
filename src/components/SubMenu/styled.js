import styled from 'styled-components';

const getTransform = (state) => {
  switch (state) {
    case 'entering':
    case 'entered':
      return 0;
    case 'exiting':
    case 'exited':
      return '-20px';
    default:
      return '-20px';
  }
};

const SubMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  top: 60px;
  right: 0;
  width: 200px;
  border-radius: 8px;
  color: black;
  background: white;
  transition: 0.5s;
  transform: translateY(${({ state }) => getTransform(state)});
  overflow: hidden;
  opacity: ${({ state }) =>
    state === 'entering' || state === 'entered' ? 1 : 0};
`;

const Item = styled.div`
  font-size: 20px;
  display: flex;
  justify-items: flex-start;
  padding: 4px 16px;
`;

const Line = styled.div`
  height: 1px;
  background-color: black;
  margin: 4px 0;
`;

export { SubMenu, Item, Line };
