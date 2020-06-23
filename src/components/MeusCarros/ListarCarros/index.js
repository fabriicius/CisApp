import React, { Component } from 'react'
import { View, FlatList, Text, ScrollView } from 'react-native'
import { ContainerScroll } from './styles.js'
import { Carros } from "../components/MeusCarros/Carros"
import axios from 'axios'


export class ListaCarros extends Component {

    constructor(props) {
        super(props)

        this.state = { listarCarros: [] }
    }

    UNSAFE_componentWillMount() {
        //Requisicao HTTP
        //https://viacep.com.br/ws/03808130/json/

        const config = {
            headers: { Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6WyIwNTE2MjY1OTg5NCIsIkNucGpDcGYiXSwianRpIjoiNTAxZDNhODdkZGRjNDQxNGIyZGM5NDQxZDAwZTQ1YTAiLCJyb2xlIjoiVXN1YXJpbyIsIm5iZiI6MTU5MjUxODMxNywiZXhwIjoxNTkyNjA0NzE3LCJpYXQiOjE1OTI1MTgzMTcsImlzcyI6IkV4ZW1wbG9Jc1VzZXIiLCJhdWQiOiJFeGVtcGxvQXVkaWVuY2UifQ.DA-4qmn11ul0x_fqSICiHKOfAGf0089v_ksDms0pivc93bJO790suTlmoWB9AdEqn3E0pZjI3hS8dMGcwaIIVfY-sArsO4J3txdmh3e4xWQh332caNpeL-yAdRSY5pzIWBgvqdZDLgqPvG2IYwOOHalBRzTb8roZVHyHuH43pR3bdjXyc6hLfANDHfLu-1tCUrqcWwaLzNhQtaOSU5o0KZqRWCB58gpBw44b5EspPjSpym9Thyk5AsjKPdVAW9JRRFZlVSQFVnaXBWBihqF7nUxYkNiac-PMlBs0lzctvVG2dnqD8gEHb-JLFJP_ZiFGn0Jxb4QAzWysh75CgpUm1g` }
        };
        
        axios.get( 
          'http://sandbox.cisti.com.br/Cliente/BuscarVeiculo',
          config
          ).then(response => {
            this.setState({ listarCarros: response.data });
        })
        .catch(console.log('Error'));

    }


    render() {

        const lista = this.state.listarCarros;
        console.log(lista)

        return (
            
                lista.map( function(carros)
                { return(
                    
                        <Carros key={carros.placa} lista={carros} />
                      
                   
                
            )}
            )
            
        );
    }

    componentDidMount() {
        console.log('depois de renderizar')

    }
}