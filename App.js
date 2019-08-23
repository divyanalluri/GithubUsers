import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';
import HomeScreen from './src/components/HomeScreen';
import UserRepos from './src/components/UserRepos';

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="home"
            component={HomeScreen}
            title="users"
            initial
            navigationBarStyle={styles.navigationBar}
          />
          <Scene
            key="userRepos"
            component={UserRepos}
            backButtonIma="white"
            navigationBarStyle={styles.navigationBar}
          />
        </Scene>
      </Router>
    );
  }
}
const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: 'grey',
  },
});
export default App;
