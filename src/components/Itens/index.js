import React, { Component } from 'react';

import {Container, ItensContatiner , ItemTab , Title , ItemText , TitleItem} from './styles.js';

export class Itens extends Component {


        render() {
         return (
        <Container>
                <ItemTab>
                        <TitleItem>cliente</TitleItem>
                        <ItemText> {this.props.lista.cliente} </ItemText>
                        <TitleItem>cnpjCpf</TitleItem>
                        <ItemText> {this.props.lista.cnpjCpf} </ItemText>
                        <TitleItem>endCliente</TitleItem>
                        <ItemText> {this.props.lista.endCliente} </ItemText>
                        <TitleItem>endEntrega</TitleItem>
                        <ItemText> {this.props.lista.endEntrega} </ItemText>
                        <TitleItem>endNumero</TitleItem>
                        <ItemText> {this.props.lista.endNumero} </ItemText>
                        <TitleItem>telNumero</TitleItem>
                        <ItemText> {this.props.lista.telNumero} </ItemText>
                        <TitleItem>siglaPessoa</TitleItem>
                        <ItemText> {this.props.lista.siglaPessoa} </ItemText>
                        <TitleItem>endCep</TitleItem>
                        <ItemText> {this.props.lista.endCep} </ItemText>
                </ItemTab>
        </Container >
        );
        }
}

       
