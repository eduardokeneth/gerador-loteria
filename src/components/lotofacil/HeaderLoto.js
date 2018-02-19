import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

import styles from '../../style/lotostyle';

const HeaderLoto = ({ numbers }) => (
  <ImageBackground style={styles.headerMegaBg} source={require('../../img/lotobg.jpg')} >
    <Text style={styles.numberHeaderMega}>{numbers}</Text>
    <Text style={styles.nameGame}>{'Lotofácil'.toLocaleUpperCase()}</Text>
    <View style={styles.tabName} />
  </ImageBackground>
);

export default HeaderLoto;
