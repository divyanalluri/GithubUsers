import {Actions} from 'react-native-router-flux';

class RouterAction {
  getRepoScreen = user => {
    if (Actions.currentScene !== 'userRepos') {
      Actions.userRepos({user, title: user.name + '- Repository'});
    }
  };
}
export default new RouterAction();
