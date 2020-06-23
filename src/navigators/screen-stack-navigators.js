import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import MeusCarrosScreen from "../screens/MeusCarrosScreen";

//Add navigators with screens in this file
export const HomeNavigator = createStackNavigator({
  Ofertas: { screen: HomeScreen }
});

export const SettingsNavigator = createStackNavigator({
  Sair: { screen: SettingsScreen }
});

export const ProfileNavigator = createStackNavigator({
  Servicos: { screen: ProfileScreen }
});

export const SearchNavigator = createStackNavigator({
  Conta: { screen: SearchScreen }
});

export const MeusCarrosNavigator = createStackNavigator({
  MeusCarros: { screen: MeusCarrosScreen }
});
