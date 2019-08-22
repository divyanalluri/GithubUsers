import styled from 'styled-components';
export const Header = styled.View`
  height: 100;
  width: ${props => props.width};
  background-color: darkblue;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const HeaderText = styled.Text`
  color: white;
  font-size: 20;
`;
