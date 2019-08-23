import styled from 'styled-components';

export const RepoContainer = styled.View`
  height: 100;
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
export const Features = styled.View`
  margin-left: 10px;
  width:50%;
  flex-direction: row;
`;
export const Property = styled.Text`
  margin-left: 5px;
  font-weight: 100;
  font-size: 18;
`;
export const Icon = styled.Image`
  height: 20;
  width: 20;
`;

export const FeatureBox = styled.View`
  flex-direction: row;
  justify-content:space-evenly;
`;
