import UserService from "../services/UserService/index.api"

import UserStore from "./UserStore"

const userService = new UserService
const userStore = new UserStore(userService)

import LanguagesStore from "../stores/LanguagesStore"
const languagesStore = new LanguagesStore();
export default { userStore, languagesStore }

export const hydrateLanguageStore = async () => {
    const hydrate = create({
        storage: AsyncStorage, // or AsyncStorage in react-native.
        // default: localStorage
        jsonify: true // if you use AsyncStorage, here shoud be true
        // default: true
    });

    // create the state
    const language = await hydrate("language", languagesStore);
    console.log("Hydrated language store", language);
};