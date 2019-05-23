import React, { PureComponent } from 'react';
import {
    View, Text
} from 'react-native';
import AppText from '../components/app-text';

class SettingScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AppText i18nKey={'this-is-setting-page'}>This is setting screen</AppText>
            </View>
        );
    }
}

export default SettingScreen;