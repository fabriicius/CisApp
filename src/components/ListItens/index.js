import React, { Component } from 'react'
import { View, FlatList, Text, ScrollView } from 'react-native'
import { ContainerScroll } from './styles.js'
import { Itens } from "../components/Itens"
import axios from 'axios'

export class ListItens extends Component {

    constructor(props) {
        super(props)

        this.state = { listaCliente: [] }
    }

    UNSAFE_componentWillMount() {
        //Requisicao HTTP
        //https://viacep.com.br/ws/03808130/json/
        axios.get('http://sandbox.cisti.com.br/Cliente/Buscar/05162659894')
            .then(response => {
                this.setState({ listaCliente: response.data });
            })
            .catch(() => {
                console.log('Erro')
            })
    }


    render() {

        const lista = this.state.listaCliente;
        console.log(lista)

        return (
            
                <Itens
                    key={lista.Cliente}
                    lista={lista}/>
            
               
        );
    }

    componentDidMount() {
        console.log('depois de renderizar')

    }
}