import React from 'react';
import { View } from 'react-native';

import styles from '../../style/lotomstyle';
import Content1 from './Content1';
import Content2 from './Content2';
import ButtonGerar from './ButtonGerar';

const ContentLotom = ({ functionGenarate }) => (
  <View style={styles.content} >
    <Content1 />
    <Content2 />
    <ButtonGerar functionGenarate={functionGenarate} />
  </View>
);

export default ContentLotom;
