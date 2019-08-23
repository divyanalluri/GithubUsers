import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import i18n from "i18n-js";
import { observer } from 'mobx-react';

import HomeScreen from './src/components/HomeScreen';
import UserRepos from './src/components/UserRepos';
import Languages from "./src/components/Languages";

import stores, { hydrateLanguageStore } from "./src/stores"
import { setI18nConfig } from "./src/components/ConfigFile"

import routerAction from "./src/NavigationUtils/RouterAction"
@observer
class App extends Component {

  render() {
    setI18nConfig(stores.languagesStore.language)
    return (
      <Router key={stores.languagesStore.language} >
        <Scene key="root">
          <Scene
            key="home"
            component={HomeScreen}
            title={i18n.t("users")}
            initial
            navigationBarStyle={styles.navigationBar}
            onRight={() => {
              routerAction.goToLanguageScreen()
            }}
            rightTitle="Language"
          />
          <Scene
            key="userRepos"
            languagesStore={stores.languagesStore.language}
            component={UserRepos}
            navigationBarStyle={styles.navigationBar}
          />
          <Scene key="languages" component={Languages} title="Select Languages" onChangeLanguage={this.onChangeLanguage} navigationBarStyle={styles.navigationBar} />
        </Scene>
      </ Router>
    );
  }
}
const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: 'grey',
  },
});
export default App;