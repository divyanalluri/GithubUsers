import React from "react";
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize";

import { I18nManager, StyleSheet, Text, View, Alert } from "react-native";
import { observer } from "mobx-react";
const translationGetters = {
    // lazy requires (metro bundler does not support symlinks)
    telugu: () => require("../Translations/telugu.json"),
    english: () => require("../Translations/english.json"),
    hindi: () => require("../Translations/hindi.json")
};

const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key)
);
export const setI18nConfig = language => {
    const languageTag = language;
    const isRTL = false;
    // clear translation cache
    translate.cache.clear();
    // update layout direction
    I18nManager.forceRTL(isRTL);
    // set i18n-js config
    i18n.translations = { [languageTag]: translationGetters[languageTag]() };
    i18n.locale = languageTag;
};

//////////////////

