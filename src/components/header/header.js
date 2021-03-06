import React from 'react'
import {Image, TouchableOpacity, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";
import {View} from "react-native";
const deviceWidth = Dimensions.get("window").width;

export class Logo extends React.Component {
    render() {
        return (
            //Add your logo in the image tag
            <View style={{ flex: 0.8 }}>
            <Image
                source={require('../../assets/logo.png')}
                resizeMode = "contain"
                style = {{width: 70,
                marginTop: 1,alignSelf:'center'}}
            />
            </View>
        );
    }
}

export class MenuButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress = {this.props.onPress} >
                <Icon name = "menu" size={30} style = {{color: 'black',paddingLeft: 10}}/>
                </TouchableOpacity>
        );
    }
}