import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container,
         ItensContatiner,
          ItemTab, 
          Title, 
          ItemText,
           TitleItem, 
           ButtonService,
           ViewButton,
} from './styles.js';

import {Alert} from 'react-native';

import { HeaderBackButton } from "react-navigation";

export class Carros extends Component {


render() {
        return (

        <Container>
                <ItemTab>
                        <TitleItem>Placa</TitleItem>
                        <ItemText> {this.props.lista.placa} </ItemText>

                        <TitleItem>Modelo</TitleItem>
                        <ItemText> {this.props.lista.modelo} </ItemText>

                        <TitleItem>Marca</TitleItem>
                        <ItemText> {this.props.lista.marca} </ItemText>

                        <TitleItem>Modelo</TitleItem>
                        <ItemText> {this.props.lista.modelo} </ItemText>

                        <ViewButton>
                        
                        <ButtonService
                          title="Detalhes do Cliente"
                          color="green"
                          onPress ={() => Alert.alert(
                                "Placa Modelo " 
                          )}
                        />
                      
                        </ViewButton>
                        
                </ItemTab>
        </Container >



        );
}
}


