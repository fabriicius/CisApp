import React from "react";
import Ionicons from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "react-navigation";
import {
  HomeNavigator,
  ProfileNavigator,
  SearchNavigator
} from "./screen-stack-navigators";

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === "Ofertas") {
    iconName = "local-offer"
  } else if (routeName === "Servicos") {
    iconName = "build";
  } else if (routeName === "Conta") {
    iconName = "account-circle";
  }

  return <IconComponent name={iconName} size={25} ></IconComponent>;
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    Ofertas: HomeNavigator,
    Servicos: ProfileNavigator,
    Conta: SearchNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "gray"
    }
  }
);

export default BottomTabNavigator;
