import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import i18n from "i18n-js";

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
    const { repo } = this.props;

    return (
      <RepoContainer width={width}>
        <RepoText>{repo.name}</RepoText>
        <FeatureBox>
          <Features>
            <Icon source={require('./star.png')} />
            <Property>{i18n.t("stars")}: {repo.starsCount} </Property>
          </Features>
          <Features>
            <Icon source={require('./fork.png')} />
            <Property>{i18n.t("forks")}: {repo.forksCount}</Property>
          </Features>
        </FeatureBox>
      </RepoContainer>
    );
  }
}
