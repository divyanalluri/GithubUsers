import {Actions} from 'react-native-router-flux';

export default class RouterAction {
  getRepoScreen = user => {
    Actions.userRepos({user, title: user.name});
  };
}
