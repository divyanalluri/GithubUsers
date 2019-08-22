import React, {Component} from 'react';
import {Dimensions} from 'react-native';

import {RepoContainer, RepoText, Features, Property} from './StyledComponents';

const width = Dimensions.get('window').width;

export default class UserRepo extends Component {
  render() {
    return (
      <RepoContainer width={width}>
        <RepoText>{this.props.repo.name}</RepoText>
        <Features>
          <Property>Stars: {this.props.repo.starsCount} </Property>
          <Property>Forks: {this.props.repo.forksCount}</Property>
        </Features>
      </RepoContainer>
    );
  }
}
