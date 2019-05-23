import React, { PureComponent } from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import AppText from '../components/app-text';
import { connect } from 'react-redux';
import * as actions from './../redux/actions/index';

class HomeScreen extends PureComponent {

    setLanguage = language => {
        this.setState({ language });
        this.props.setLanguage(language);
    }

    render() {
        const { language } = this.props;
        const isVNLang = language === 'vi' ? true : false;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AppText i18nKey={'this-is-home-page'}>This is home screen</AppText>
                <View style={{ flexDirection: 'row' }}>
                    <AppText i18nKey={'set-language'}>Chọn ngôn ngữ</AppText>
                    <TouchableOpacity onPress={() => this.setLanguage('vi')}
                        style={{ marginLeft: 20 }}>
                        <Text style={{ color: isVNLang ? 'blue' : 'grey' }}>Việt Nam</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setLanguage('en')}
                        style={{ marginLeft: 5 }}>
                        <Text style={{ color: !isVNLang ? 'blue' : 'grey' }}>England</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
	return {
		language: state.languageReducer.language
	};
};

const mapDispatchToProps = dispatch => {
    return {
        setLanguage: language => {
            dispatch(actions.changeLanguage(language));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);