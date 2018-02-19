import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

import styles from '../../style';

const HeaderMega = ({ numbers }) => (
  <ImageBackground style={styles.headerMegaBg} source={require('../../img/megabg.jpg')} >
    <Text style={styles.numberHeaderMega}>{numbers}</Text>
    <Text style={styles.nameGame}>{'Mega Sena'.toLocaleUpperCase()}</Text>
    <View style={styles.tabName} />
  </ImageBackground>
);

export default HeaderMega;
