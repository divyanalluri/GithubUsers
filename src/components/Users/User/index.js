import React, { Component } from "react"
import { TouchableHighlight } from "react-native"

import { UserImage, UserName, UserContainer } from "./styledcomponents"
import { Actions } from "react-native-router-flux";

class User extends Component {
    onClickUser = () => {
        Actions.userRepos({ user: this.props.user })
    }
    render() {
        return (
            <TouchableHighlight onPress={this.onClickUser}>
                <UserContainer>
                    <UserImage source={{ uri: this.props.user.avatarUrl }} />
                    <UserName>{this.props.user.name}</UserName>
                </UserContainer>
            </TouchableHighlight>
        )
    }
}
export default User