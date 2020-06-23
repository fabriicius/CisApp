import { View, Text, StyleSheet , ScrollView } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";
import { ListItens } from '../components/ListItens'

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo />,
      headerBackTitle: "Servicos",
      headerLayoutPreset: "center"
    };
  };
  render() {
    return (
        <ListItens/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
