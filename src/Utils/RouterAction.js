import {Actions} from 'react-native-router-flux';

class RouterAction {
  getRepoScreen = user => {
    Actions.userRepos({user, title: user.name + '- Repository'});
  };
}
export default new RouterAction();
