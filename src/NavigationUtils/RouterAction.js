import { Actions, ActionConst } from 'react-native-router-flux';
import i18n from "i18n-js";
class RouterAction {

  goToRepoScreen = user => {
    if (Actions.currentScene !== 'userRepos') {
      Actions.userRepos({
        user, title: user.name + ' - ' + i18n.t("repositories")
      })
    };
  }
  goToLanguageScreen = () => {
    Actions.languages();

  }
}
export default new RouterAction();
