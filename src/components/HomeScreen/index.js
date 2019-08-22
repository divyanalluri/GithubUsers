import { Scene, Router } from "react-native-router-flux"
import React, { Component } from "react"
import { observer } from "mobx-react";

import Users from "../Users"
import User from "../Users/User"

@observer
class HomeScreen extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        title="Users"
                        key="users"
                        component={Users}
                        initial
                    />

                </Scene>
            </Router>
        )
    }
}
export default HomeScreen