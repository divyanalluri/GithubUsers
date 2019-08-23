import { Actions } from 'react-native-router-flux';
import i18n from "i18n-js";
class RouterAction {
  getRepoScreen = user => {
    if (Actions.currentScene !== 'userRepos') {
      Actions.userRepos({
        user, title: user.name + ' - ' + i18n.t("repositories")
      })
    };
  }
}
export default new RouterAction();
