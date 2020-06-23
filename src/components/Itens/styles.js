import {StyleSheet} from 'react-native'

import styled from 'styled-components/native'

export const Container = styled.View`
   margin-top: 20px;
   overflow: scroll;
`;


export const ItemTab = styled.View`
   background: rgba(0, 0, 0, 0.2);
   border-radius: 3px;
   padding: 5px;
   margin: 5px;
`;

export const ItemText = styled.Text`
   font-size: 13px;
   margin-top: 5px;
   margin-bottom: 5px;
   color: black;
`;

export const TitleItem = styled.Text`
   font-size: 15px;
   color: gray;
   margin-top: 1px
`;

export const Title = styled.Text`
   font-size: 20px;
   color: black;
   margin-bottom: 7px;
`;