import React, { Component } from "react";
import { View, CheckBox, Alert, Text } from "react-native";
import stores from "../../stores";
import { observer } from "mobx-react";


@observer
export default class Languages extends Component {
    onChangeEnglish = () => {
        stores.languagesStore.changeLanguage("english");

    };
    onChangeTelugu = () => {
        stores.languagesStore.changeLanguage("telugu");

    };
    onChangeHindi = () => {
        stores.languagesStore.changeLanguage("hindi");

    };
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    {stores.languagesStore.language == "english" ? (
                        <CheckBox value={true} onValueChange={this.onChangeEnglish} />
                    ) : (
                            <CheckBox value={false} onValueChange={this.onChangeEnglish} />
                        )}
                    <Text>English</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    {stores.languagesStore.language == "telugu" ? (
                        <CheckBox value={true} onValueChange={this.onChangeTelugu} />
                    ) : (
                            <CheckBox value={false} onValueChange={this.onChangeTelugu} />
                        )}
                    <Text>Telugu</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    {stores.languagesStore.language == "hindi" ? (
                        <CheckBox value={true} onValueChange={this.onChangeHindi} />
                    ) : (
                            <CheckBox value={false} onValueChange={this.onChangeHindi} />
                        )}
                    <Text>Hindi</Text>
                </View>
            </View>
        );
    }
}
