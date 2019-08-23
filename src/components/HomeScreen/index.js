import { ScrollView } from "react-native"
import React, { Component } from "react"
import { observer } from "mobx-react";

import Users from "../Users"
import User from "../Users/User"
import stores, { hydrateLanguageStore } from "../../stores"
import { setI18nConfig } from "../ConfigFile"
@observer
class HomeScreen extends Component {
    componentDidMount() {
        setI18nConfig(stores.languagesStore.language);
        hydrateLanguageStore()
        stores.userStore.getUsers()
    }
    render() {
        return (
            <ScrollView >
                <Users userStore={stores.userStore} />
            </ScrollView>
        )
    }
}
export default HomeScreen