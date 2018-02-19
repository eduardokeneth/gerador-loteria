import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from '../../style/lotomstyle';

const ButtonGerar = ({ functionGenarate }) => (
  <View style={styles.boxButtonGerar}>
    <TouchableOpacity onPress={functionGenarate} style={styles.buttonGerar}>
      <Text style={styles.textButtonGerar}>{'Gerar Número'.toLocaleUpperCase()}</Text>
    </TouchableOpacity>
  </View>
);

export default ButtonGerar;

