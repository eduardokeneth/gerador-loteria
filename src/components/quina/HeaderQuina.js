import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

import styles from '../../style/quinastyle';

const HeaderQuina = ({ numbers }) => (
  <ImageBackground style={styles.headerMegaBg} source={require('../../img/quinabg.jpg')} >
    <Text style={styles.numberHeaderMega}>{numbers}</Text>
    <Text style={styles.nameGame}>{'Quina'.toLocaleUpperCase()}</Text>
    <View style={styles.tabName} />
  </ImageBackground>
);

export default HeaderQuina;
