import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

import styles from '../../style/duplastyle';

const background = '../../img/duplabg.jpg';

const HeaderDupla = ({ numbers1, numbers2 }) => (
  <ImageBackground style={styles.headerMegaBg} source={require(background)} >
    <Text style={styles.numberHeaderMega}>{numbers1}</Text>
    <Text style={styles.numberHeaderMega}>{numbers2}</Text>
    <Text style={styles.nameGame}>{'Dupla Sena'.toLocaleUpperCase()}</Text>
    <View style={styles.tabName} />
  </ImageBackground>
);

export default HeaderDupla;
