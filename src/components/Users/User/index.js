import React, { Component } from "react"
import { TouchableOpacity } from "react-native"

import { UserImage, UserName, UserContainer } from "./styledcomponents"

class User extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this._onPressButton}>
                <UserContainer>
                    <UserImage source={{ uri: this.props.user.avatar_url }} />
                    <UserName>{this.props.user.name}</UserName>
                </UserContainer>
            </TouchableOpacity>
        )
    }
}
export default User