import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

import styles from '../../style/timestyle';

const HeaderTime = ({ numbers }) => (
  <ImageBackground style={styles.headerMegaBg} source={require('../../img/timebg.jpg')} >
    <Text style={styles.numberHeaderMega}>{numbers}</Text>
    <Text style={styles.nameGame}>{'Timemania'.toLocaleUpperCase()}</Text>
    <View style={styles.tabName} />
  </ImageBackground>
);

export default HeaderTime;
