import React, { PureComponent } from 'react';
import {
    View, Text
} from 'react-native';
import AppText from '../components/app-text';

class ContactScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AppText i18nKey={'this-is-contact-page'}>This is contact screen</AppText>
            </View>
        );
    }
}

export default ContactScreen;