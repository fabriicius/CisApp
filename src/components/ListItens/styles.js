import {StyleSheet} from 'react-native'

import styled from 'styled-components/native'

export const ContainerScroll = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 1 , paddingRight: 2},
  showsHorizontalScrollIndicator: false, 
})``;
