
import React, { Component } from 'react';
import { Router, Scene } from "react-native-router-flux";
import HomeScreen from "./src/components/HomeScreen";
import UserRepos from "./src/components/UserRepos";

class App extends Component {

  render() {
    return (
      <Router>
        <Scene key="root" >
          <Scene key="home" component={HomeScreen} title="Users" initial />
          <Scene key="userRepos" component={UserRepos} title="repos" hideNavBar />
        </Scene>
      </Router>
    );
  };
}

export default App;
