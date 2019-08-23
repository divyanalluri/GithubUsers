import styled from 'styled-components';

export const DisplayStatus = styled.View`
  width: ${props => props.width};
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.Text`
  font-weight: bold;
  color: red;
  font-size: 25;
`;
