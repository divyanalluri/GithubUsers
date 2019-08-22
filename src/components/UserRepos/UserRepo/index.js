import React, {Component} from 'react';
import {Dimensions} from 'react-native';

import {
  RepoContainer,
  RepoText,
  Features,
  Property,
  Icon,
  FeatureBox,
} from './StyledComponents';

const width = Dimensions.get('window').width;

export default class UserRepo extends Component {
  render() {
    return (
      <RepoContainer width={width}>
        <RepoText>{this.props.repo.name}</RepoText>
        <FeatureBox>
          <Features>
            <Icon source={require('./star.png')} />
            <Property> Stars: {this.props.repo.starsCount} </Property>
          </Features>
          <Features>
            <Icon source={require('./fork.png')} />
            <Property> Forks: {this.props.repo.forksCount}</Property>
          </Features>
        </FeatureBox>
      </RepoContainer>
    );
  }
}
