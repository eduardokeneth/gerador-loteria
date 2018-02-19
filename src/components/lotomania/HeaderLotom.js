import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

import styles from '../../style/lotomstyle';

const HeaderLotom = ({ numbers }) => (
  <ImageBackground style={styles.headerMegaBg} source={require('../../img/lotombg.jpg')} >
    <Text style={styles.numberHeaderMega}>{numbers}</Text>
    <Text style={styles.nameGame}>{'Lotomania'.toLocaleUpperCase()}</Text>
    <View style={styles.tabName} />
  </ImageBackground>
);

export default HeaderLotom;
