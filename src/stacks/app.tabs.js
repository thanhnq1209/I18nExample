import React from "react";
import {
   createBottomTabNavigator,
   createAppContainer
} from "react-navigation";

import { StyleSheet, Text } from "react-native";
import HomeScreen from '../screens/home.screen';
import ContactScreen from '../screens/contact.screen';
import SettingScreen from "../screens/setting.screen";
import AppText from "../components/app-text";

const Tabbar = createBottomTabNavigator(
   {
      Home: {
         screen: HomeScreen
      },
      Contact: {
         screen: ContactScreen
      },
      Setting: {
         screen: SettingScreen
      }
   },
   {
      defaultNavigationOptions: ({ navigation, screenProps }) => ({
         tabBarLabel: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let label = '', i18nKey = '';
            if (routeName === "Home") {
               label = "Trang chủ";
               i18nKey = 'home';
            } else if (routeName === "Contact") {
               label = "Liên hệ";
               i18nKey = 'contact';
            } else if (routeName === "Setting") {
               label = "Cài đặt";
               i18nKey = 'setting';
            }
            let result = null;
            if (focused) {
               result = (
                  <AppText style={{ color: 'blue', fontSize: 20 }} i18nKey={i18nKey}>{label}</AppText>
               );
            } else {
               result = (
                  <AppText style={{ fontSize: 20 }} i18nKey={i18nKey}>{label}</AppText>
               );
            }
            return result;
         },
      }),
      // tabBarComponent: props => <AddButton{...props} />,
      tabBarOptions: {
         tabStyle: {
            height: 50,
            alignItems: "center",
         }
      }
   }
);

const styles = StyleSheet.create({
   labelStyle: {
      textAlign: "center",
      fontSize: 16,
      color: 'blue'
   }
});

const AppTabbar = createAppContainer(Tabbar);
export default AppTabbar;