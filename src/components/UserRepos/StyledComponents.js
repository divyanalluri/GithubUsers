import styled from 'styled-components';
export const Header = styled.View`
  height: 70;
  position: absolute;
  top: 0;
  width: ${props => props.width};
  background-color: darkblue;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const RepoList = styled.View`
  margin-top:70;
`;
export const HeaderText = styled.Text`
  color: white;
  font-size: 20;
`;
export const ErrorText = styled.Text`
  font-weight: bold;
  color: red;
  font-size: 25;
`;
