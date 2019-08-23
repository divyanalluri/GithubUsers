import { persist } from "mobx-persist";
import { observable } from "mobx";
class LanguagesStore {
    @persist @observable language = "english";

    changeLanguage(value) {
        this.language = value;
    }
}
export default LanguagesStore;
