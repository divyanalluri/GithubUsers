import styled from 'styled-components';

export const RepoList = styled.View`
  height: ${props => props.height};
  width: ${props => props.width};
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.Text`
  font-weight: bold;
  color: red;
  font-size: 25;
`;
