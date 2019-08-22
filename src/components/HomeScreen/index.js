import { ScrollView } from "react-native"
import React, { Component } from "react"
import { observer } from "mobx-react";

import Users from "../Users"
import User from "../Users/User"

import stores from "../../stores"
@observer
class HomeScreen extends Component {
    componentDidMount() {
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