import styled from 'styled-components';
export const RepoContainer = styled.View`
  height: 120;
  width: ${props => props.width};
  border-bottom-color: grey;
  border-bottom-width: 1;
  justify-content: space-around;
`;
export const RepoText = styled.Text`
  font-weight: bold;
  margin-left: 10px;
  font-size: 25;
`;
export const Features = styled.Text`
  margin-left: 10px;
  flex-direction: row;
`;
export const Property = styled.Text`
  font-size: 20;
`;
